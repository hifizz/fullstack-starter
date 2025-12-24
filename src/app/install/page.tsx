import Link from "next/link";
import { MarketingShell } from "~/components/marketing/marketing-shell";

const steps = [
  {
    title: "Add ChatKeep to Chrome",
    description: "Install the extension and pin it to your toolbar for quick access.",
  },
  {
    title: "Open Gemini",
    description: "ChatKeep starts saving your conversations locally right away.",
  },
  {
    title: "Organize as you chat",
    description: "Highlight, memo, and search across your saved chats as features roll out.",
  },
];

export default function InstallPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Install
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Install ChatKeep in under a minute.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            ChatKeep runs locally in your browser. Gemini is supported now, with ChatGPT and
            Deepseek coming soon.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--marketing-ink)] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[color:var(--marketing-ink)]">
                {step.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--marketing-muted)]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
          <h2 className="text-lg font-semibold text-[color:var(--marketing-ink)]">Permissions</h2>
          <p className="mt-2 text-sm text-[color:var(--marketing-muted)]">
            ChatKeep only requests the minimum permissions needed to read and save your chat
            content. Your data stays on your device.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--marketing-ink)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
