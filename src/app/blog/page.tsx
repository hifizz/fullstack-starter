import { MarketingShell } from "~/components/marketing/marketing-shell";

const upcomingPosts = [
  {
    title: "How to build a local-first AI chat library",
    label: "Coming soon",
  },
  {
    title: "From prompt to workflow: organizing AI conversations",
    label: "Coming soon",
  },
  {
    title: "Why TOC minimaps change long chat navigation",
    label: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Blog
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Product updates, workflows, and field notes.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            We share how we build ChatKeep, plus practical workflows for power users.
          </p>
        </div>

        <div className="grid gap-4">
          {upcomingPosts.map((post) => (
            <div
              key={post.title}
              className="flex items-center justify-between rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6"
            >
              <div>
                <p className="text-lg font-semibold text-[color:var(--marketing-ink)]">
                  {post.title}
                </p>
                <p className="text-xs text-[color:var(--marketing-muted)]">Stay tuned.</p>
              </div>
              <span className="rounded-full border border-[color:var(--marketing-border)] px-3 py-1 text-xs uppercase tracking-wide text-[color:var(--marketing-muted)]">
                {post.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
