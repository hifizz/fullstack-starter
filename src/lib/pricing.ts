export const PLAN_NAMES = {
  free: "Free",
  monthly: "Monthly",
  annual: "Annual",
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
      { label: "Highlight & Memo (basic)", status: "available" },
      { label: "TOC minimap navigation", status: "coming" },
      { label: "Lightning search (limited index)", status: "available" },
      { label: "Export to Markdown", status: "available" },
    ],
  },
  {
    key: "monthly",
    name: PLAN_NAMES.monthly,
    summary: "Scale your library and unlock power tools.",
    priceLabel: "USD / month",
    cta: "Start monthly",
    features: [
      { label: "Larger index & higher limits", status: "coming" },
      { label: "Advanced search & previews", status: "coming" },
      { label: "Prompt Library button", status: "coming" },
      { label: "Share links", status: "coming" },
      { label: "Cloud sync", status: "coming" },
    ],
  },
  {
    key: "annual",
    name: PLAN_NAMES.annual,
    summary: "Best value with annual savings baked in.",
    priceLabel: "USD / year (2 months free)",
    cta: "Start annual",
    features: [
      { label: "Larger index & higher limits", status: "coming" },
      { label: "Advanced search & previews", status: "coming" },
      { label: "Prompt Library button", status: "coming" },
      { label: "Share links", status: "coming" },
      { label: "Cloud sync", status: "coming" },
    ],
  },
] as const;
