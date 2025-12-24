import { MarketingShell } from "~/components/marketing/marketing-shell";

const sections = [
  {
    title: "Service overview",
    body: "ChatKeep provides a local-first browser extension and companion website. Features may change or evolve as we improve the product.",
  },
  {
    title: "Subscriptions and billing",
    body: "Paid plans are billed in USD through Stripe or Creem. You can cancel anytime to stop future renewals.",
  },
  {
    title: "7-day refund policy",
    body: "You may request a full refund within 7 days of your initial purchase. After 7 days, payments are non-refundable except where required by law.",
  },
  {
    title: "Acceptable use",
    body: "You agree not to misuse the service or attempt to disrupt it. You are responsible for the data you store locally.",
  },
  {
    title: "Third-party services",
    body: "We rely on third-party providers such as Stripe, Creem, Google Analytics, and Microsoft Clarity. Their policies apply to the data they process.",
  },
  {
    title: "Disclaimer and liability",
    body:
      "ChatKeep is provided " +
      '"as is" without warranties. To the maximum extent permitted by law, our liability is limited to the fees paid in the last 12 months.',
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. Material changes will be posted on this page.",
  },
  {
    title: "Contact",
    body: "If you have questions, contact support@chatkeep.dev.",
  },
];

export default function TermsPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Terms
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Clear terms for a focused product.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            These terms explain how ChatKeep works and what to expect.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">
                {section.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--marketing-muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
