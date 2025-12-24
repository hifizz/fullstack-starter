import { MarketingShell } from "~/components/marketing/marketing-shell";

const sections = [
  {
    title: "Who we are",
    body: "ChatKeep is operated by an independent developer. If you have questions, contact support@chatkeep.dev.",
  },
  {
    title: "What we collect",
    body: "We use Google Analytics and Microsoft Clarity to measure usage across our website and extension. This may include device and browser data, pages visited, interactions, approximate location derived from IP, and session replay data from Clarity.",
  },
  {
    title: "What we do not collect",
    body: "We do not collect or upload your chat content. ChatKeep stores chat history locally in your browser. Cloud sync is not available yet and will require opt-in when it launches.",
  },
  {
    title: "Payments",
    body: "Payments are processed by Stripe and Creem. We do not store your full payment card details on our servers.",
  },
  {
    title: "Cookies and analytics choices",
    body: "You can accept or reject analytics cookies through the cookie banner. If you reject, analytics scripts will not load. You can change your choice by clearing site data and revisiting the site.",
  },
  {
    title: "Data retention",
    body: "Analytics data is retained according to the policies of Google Analytics and Microsoft Clarity. We keep operational data only as long as necessary for product improvement.",
  },
  {
    title: "Your rights",
    body: "You can request access, deletion, or clarification of analytics data tied to your usage by contacting support@chatkeep.dev.",
  },
  {
    title: "Changes",
    body: "We will update this policy as the product evolves. Material changes will be posted on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-16 pt-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--marketing-muted)]">
            Privacy
          </p>
          <h1 className="font-display text-4xl text-[color:var(--marketing-ink)]">
            Local-first, clear, and transparent.
          </h1>
          <p className="text-sm text-[color:var(--marketing-muted)]">
            ChatKeep is built to keep your data on your device while using analytics to improve the
            experience.
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
