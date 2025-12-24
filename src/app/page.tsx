import Link from "next/link";
import { MarketingShell } from "~/components/marketing/marketing-shell";

const featureCards = [
  {
    title: "Local-first auto save",
    description:
      "Chats are saved on your device. Gemini is supported now, with more platforms coming soon.",
    status: "Available now",
  },
  {
    title: "Highlight & Memo",
    description: "Select any text to leave a memo and keep context while reading.",
    status: "Coming soon",
  },
  {
    title: "TOC minimap navigation",
    description: "Jump through long threads instantly with a sidebar outline.",
    status: "Coming soon",
  },
  {
    title: "Lightning search",
    description: "Search every saved chat in milliseconds and jump back to the source.",
    status: "Coming soon",
  },
  {
    title: "Export to Markdown",
    description: "Export conversations locally with clean Markdown formatting.",
    status: "Available now",
  },
  {
    title: "Share links",
    description: "Turn a conversation into a shareable link for teammates and clients.",
    status: "Coming soon",
  },
];

const workflowSteps = [
  {
    title: "Install and connect",
    description: "Add ChatKeep to Chrome and open Gemini to start saving instantly.",
  },
  {
    title: "Capture the signal",
    description: "Highlight, memo, and keep the important parts of every chat (coming soon).",
  },
  {
    title: "Find and reuse",
    description: "Search across your library and jump back into the original thread.",
  },
];

const platforms = [
  { name: "Gemini", status: "Available now" },
  { name: "ChatGPT", status: "Coming soon" },
  { name: "Deepseek", status: "Coming soon" },
];

export default function HomePage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--marketing-muted)]">
              Chatbot assistant, local-first
            </p>
            <h1 className="font-display text-4xl leading-tight text-[color:var(--marketing-ink)] md:text-5xl">
              ChatKeep: The missing OS for your AI chats. Aggregate, Highlight, Search, and Export
              your conversations locally.
            </h1>
            <p className="text-lg text-[color:var(--marketing-muted)] md:text-xl">
              A local-first assistant that turns Gemini (and soon ChatGPT & Deepseek) chats into a
              searchable, reusable knowledge layer.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/install"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--marketing-ink)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--marketing-accent-strong)]"
              >
                Install for Chrome
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--marketing-border)] px-6 py-3 text-sm font-semibold text-[color:var(--marketing-ink)] transition hover:border-[color:var(--marketing-ink)]"
              >
                See pricing
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-[color:var(--marketing-muted)]">
              <span className="rounded-full border border-[color:var(--marketing-border)] px-3 py-1">
                Gemini: available now
              </span>
              <span className="rounded-full border border-[color:var(--marketing-border)] px-3 py-1">
                ChatGPT: coming soon
              </span>
              <span className="rounded-full border border-[color:var(--marketing-border)] px-3 py-1">
                Deepseek: coming soon
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.3)] backdrop-blur animate-fade">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[color:var(--marketing-ink)]">
                  Why ChatKeep
                </p>
                <p className="text-sm text-[color:var(--marketing-muted)]">
                  Official chat UIs are built for generating answers, not for keeping knowledge. We
                  keep the signal, the context, and the path back.
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-[color:var(--marketing-border)] bg-white p-4">
                  <p className="text-sm font-semibold">Local-first by default</p>
                  <p className="text-xs text-[color:var(--marketing-muted)]">
                    Your chats stay on your device, ready even when you are offline.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--marketing-border)] bg-white p-4">
                  <p className="text-sm font-semibold">Built for deep reading</p>
                  <p className="text-xs text-[color:var(--marketing-muted)]">
                    TOC minimap, memos, and fast navigation for long conversations (coming soon).
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--marketing-border)] bg-white p-4">
                  <p className="text-sm font-semibold">Beyond the official UI</p>
                  <p className="text-xs text-[color:var(--marketing-muted)]">
                    Export today, search soon — the missing features power users expect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Key Features
          </p>
          <h2 className="font-display text-3xl text-[color:var(--marketing-ink)]">
            Everything you need to manage AI conversations.
          </h2>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            Coming soon items are marked clearly so you always know what is live today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-lg font-semibold text-[color:var(--marketing-ink)]">
                  {feature.title}
                </p>
                <p className="text-sm text-[color:var(--marketing-muted)]">{feature.description}</p>
              </div>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  feature.status === "Available now"
                    ? "bg-[color:var(--marketing-ink)] text-white"
                    : "border border-[color:var(--marketing-border)] text-[color:var(--marketing-muted)]"
                }`}
              >
                {feature.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
              Workflow
            </p>
            <h2 className="font-display text-3xl text-[color:var(--marketing-ink)]">
              A faster way to consume AI output.
            </h2>
            <p className="text-sm text-[color:var(--marketing-muted)]">
              ChatKeep stays quiet in the background while you chat, then gives you the structure to
              reuse everything later.
            </p>
          </div>
          <div className="grid gap-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-[color:var(--marketing-border)] bg-white/80 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--marketing-ink)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--marketing-ink)]">{step.title}</p>
                  <p className="text-sm text-[color:var(--marketing-muted)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
                Supported Platforms
              </p>
              <h2 className="font-display text-3xl text-[color:var(--marketing-ink)]">
                Built for today, expanding fast.
              </h2>
              <p className="text-sm text-[color:var(--marketing-muted)]">
                Gemini is live now. ChatGPT and Deepseek are next in line.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center gap-2 rounded-full border border-[color:var(--marketing-border)] bg-white px-4 py-2 text-sm"
                >
                  <span className="font-semibold text-[color:var(--marketing-ink)]">
                    {platform.name}
                  </span>
                  <span className="text-xs text-[color:var(--marketing-muted)]">
                    {platform.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
              Privacy
            </p>
            <h2 className="font-display text-3xl text-[color:var(--marketing-ink)]">
              Local-first, always.
            </h2>
            <p className="text-sm text-[color:var(--marketing-muted)]">
              ChatKeep stores your data on your device by default. No selling, no training, no
              tracking. Cloud sync will be opt-in and transparent.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--marketing-border)] bg-white p-6">
            <ul className="space-y-4 text-sm text-[color:var(--marketing-muted)]">
              <li>
                <span className="font-semibold text-[color:var(--marketing-ink)]">
                  Local-first:
                </span>{" "}
                your chats stay on your device.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--marketing-ink)]">No selling:</span>{" "}
                we do not sell or train on your conversations.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--marketing-ink)]">
                  Opt-in sync:
                </span>{" "}
                cloud sync will require your explicit consent.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-20 pt-4 text-center">
        <h2 className="font-display text-3xl text-[color:var(--marketing-ink)]">
          Make your AI chats yours.
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--marketing-muted)]">
          Start with Gemini today, and be ready for the next wave of platforms as we roll them out.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/install"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--marketing-ink)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--marketing-accent-strong)]"
          >
            Install for Chrome
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--marketing-border)] px-6 py-3 text-sm font-semibold text-[color:var(--marketing-ink)] transition hover:border-[color:var(--marketing-ink)]"
          >
            Compare plans
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
