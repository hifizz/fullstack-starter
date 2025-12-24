export const PLAN_NAMES = {
  free: "Free",
  pro: "Pro",
  team: "Team",
} as const;

export type PlanKey = keyof typeof PLAN_NAMES;

export const PRICING_PLANS = [
  {
    key: "free",
    name: PLAN_NAMES.free,
    summary: "Local-first basics for individual workflows.",
    priceLabel: "Free",
    cta: "Get started",
    features: [
      { label: "Local chat saving", status: "available" },
      { label: "Highlight & Memo (basic)", status: "coming" },
      { label: "TOC minimap navigation", status: "coming" },
      { label: "Lightning search (limited index)", status: "coming" },
      { label: "Export to Markdown", status: "available" },
    ],
  },
  {
    key: "pro",
    name: PLAN_NAMES.pro,
    summary: "Scale your library and unlock power tools.",
    priceLabel: "USD / month",
    cta: "Upgrade to Pro",
    features: [
      { label: "Larger index & higher limits", status: "coming" },
      { label: "Advanced search & previews", status: "coming" },
      { label: "Prompt Library button", status: "coming" },
      { label: "Share links", status: "coming" },
      { label: "Cloud sync", status: "coming" },
    ],
  },
  {
    key: "team",
    name: PLAN_NAMES.team,
    summary: "Collaboration, governance, and shared knowledge.",
    priceLabel: "USD / seat",
    cta: "Contact sales",
    features: [
      { label: "Shared workspace", status: "coming" },
      { label: "Team prompt library", status: "coming" },
      { label: "Permissions & audit", status: "coming" },
      { label: "Priority support", status: "coming" },
    ],
  },
] as const;
