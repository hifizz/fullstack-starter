import { MarketingShell } from "~/components/marketing/marketing-shell";

export default function TermsPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Terms
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Clear terms for a clear product.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            These terms outline how ChatKeep is provided. We keep it short and transparent.
          </p>
        </div>

        <div className="space-y-6 text-sm text-[color:var(--marketing-muted)]">
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">Usage</h2>
            <p className="mt-2">
              ChatKeep is provided as-is. You are responsible for how you use and store your chat
              data.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">
              Subscriptions
            </h2>
            <p className="mt-2">
              Paid plans will be billed in USD through Stripe. Regional pricing may apply, and you
              can cancel anytime.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">
              Future updates
            </h2>
            <p className="mt-2">
              Features labeled as coming soon may change based on development progress. We will
              update this page as they ship.
            </p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
