import { MarketingShell } from "~/components/marketing/marketing-shell";

const updates = [
  {
    date: "Today",
    title: "Marketing site refresh",
    description: "Introduced the new ChatKeep positioning and pricing structure.",
  },
  {
    date: "Soon",
    title: "Platform expansion",
    description: "ChatGPT and Deepseek support are next on the roadmap.",
  },
];

export default function ChangelogPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Changelog
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Product updates and progress.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            Follow along as ChatKeep ships new features and platform support.
          </p>
        </div>

        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update.title}
              className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--marketing-muted)]">
                {update.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-[color:var(--marketing-ink)]">
                {update.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--marketing-muted)]">
                {update.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
