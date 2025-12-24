import { MarketingShell } from "~/components/marketing/marketing-shell";

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Privacy
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Local-first, transparent, and respectful.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            ChatKeep is designed to keep your data on your device. We do not sell, train on, or
            share your conversations.
          </p>
        </div>

        <div className="space-y-6 text-sm text-[color:var(--marketing-muted)]">
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">
              Data storage
            </h2>
            <p className="mt-2">
              Your chat history is stored locally in your browser by default. You control when and
              how to delete it.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">Analytics</h2>
            <p className="mt-2">
              ChatKeep does not track your conversations or sell usage data. Any future telemetry
              will be opt-in and clearly disclosed.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">Cloud sync</h2>
            <p className="mt-2">
              Cloud sync is not available yet. When it launches, it will require explicit opt-in and
              provide clear controls for data access.
            </p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
