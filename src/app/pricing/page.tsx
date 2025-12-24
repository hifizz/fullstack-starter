import Link from "next/link";
import { MarketingShell } from "~/components/marketing/marketing-shell";
import { PRICING_PLANS } from "~/lib/pricing";

export default function PricingPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Pricing
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Choose the plan that fits your workflow.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            All plans are billed in USD via Stripe. Regional pricing may apply based on your
            location. Annual plans include two months free.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.key}
              className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--marketing-muted)]">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-[color:var(--marketing-ink)]">
                    {plan.priceLabel}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--marketing-muted)]">{plan.summary}</p>
                </div>

                <ul className="space-y-3 text-sm text-[color:var(--marketing-muted)]">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2">
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          feature.status === "available"
                            ? "bg-[color:var(--marketing-ink)]"
                            : "border border-[color:var(--marketing-border)]"
                        }`}
                      />
                      <span>
                        {feature.label}
                        {feature.status === "coming" && (
                          <span className="ml-2 rounded-full border border-[color:var(--marketing-border)] px-2 py-0.5 text-[10px] uppercase tracking-wide">
                            Coming soon
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/install"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--marketing-ink)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6 text-sm text-[color:var(--marketing-muted)]">
          <p>
            Local-first by default. Cloud sync and share links will be opt-in features for paid
            plans once available.
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
