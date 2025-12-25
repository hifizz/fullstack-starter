import type { FlatRefundCreated, FlatSubscriptionEvent } from "@creem_io/better-auth";
import type { BillingProvider, PlanKey } from "~/lib/billing/types";
import { getCreemProductId } from "./config";
import {
  getSubscriptionByProviderId,
  recordWebhookEvent,
  updateSubscriptionStatus,
  upsertSubscription,
} from "./subscription-repo";

const PROVIDER: BillingProvider = "creem";

const mapPlanKeyFromProductId = (productId: string): PlanKey | null => {
  const monthlyId = getCreemProductId("monthly");
  const annualId = getCreemProductId("annual");
  if (monthlyId && productId === monthlyId) return "monthly";
  if (annualId && productId === annualId) return "annual";
  return null;
};

const resolveUserId = (metadata: Record<string, unknown> | undefined) => {
  const ref = metadata?.referenceId ?? metadata?.userId ?? metadata?.user_id;
  if (!ref) return null;
  return String(ref);
};

const mapCreemStatus = (
  status: "active" | "canceled" | "unpaid" | "paused" | "trialing",
  currentPeriodEnd: Date,
  canceledAt: Date | null,
) => {
  if (status === "trialing") return "trial" as const;
  if (status === "active") {
    if (canceledAt && currentPeriodEnd > new Date()) return "grace" as const;
    return "active" as const;
  }
  if (status === "unpaid") return "past_due" as const;
  if (status === "paused") return "past_due" as const;
  if (status === "canceled") {
    if (currentPeriodEnd > new Date()) return "grace" as const;
    return "canceled" as const;
  }
  return "canceled" as const;
};

export const syncCreemSubscriptionEvent = async (event: FlatSubscriptionEvent<string>) => {
  const eventRecorded = await recordWebhookEvent(PROVIDER, event.webhookId, event.webhookEventType);
  if (!eventRecorded) return;

  const planKeyFromMetaRaw = event.metadata?.planKey;
  const planKeyFromMeta =
    planKeyFromMetaRaw === "monthly" ||
    planKeyFromMetaRaw === "annual" ||
    planKeyFromMetaRaw === "free"
      ? planKeyFromMetaRaw
      : null;
  const planKeyFromProduct = mapPlanKeyFromProductId(event.product.id);
  const planKey = (planKeyFromMeta as PlanKey | null) ?? planKeyFromProduct;

  if (!planKey) return;

  const userId = resolveUserId(event.metadata);
  if (!userId) return;

  const status = mapCreemStatus(event.status, event.current_period_end_date, event.canceled_at);

  await upsertSubscription({
    userId,
    planKey,
    provider: PROVIDER,
    status,
    currentPeriodStart: event.current_period_start_date,
    currentPeriodEnd: event.current_period_end_date,
    cancelAtPeriodEnd: event.canceled_at !== null,
    trialEndsAt: status === "trial" ? event.current_period_end_date : undefined,
    providerCustomerId: event.customer.id,
    providerSubscriptionId: event.id,
    trialUsed: status === "trial",
  });
};

export const syncCreemRefundEvent = async (event: FlatRefundCreated) => {
  const eventRecorded = await recordWebhookEvent(PROVIDER, event.webhookId, event.webhookEventType);
  if (!eventRecorded) return;

  const subscriptionId = event.transaction.subscription;
  if (!subscriptionId) return;

  const record = await getSubscriptionByProviderId(PROVIDER, subscriptionId);
  if (!record) return;

  await updateSubscriptionStatus(record.userId, "refunded", {
    pastDueAt: null,
  });
};
