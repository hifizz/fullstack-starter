"use client";

import { resetAnalyticsConsent } from "~/lib/marketing-consent";
import { showCookieConsentToast } from "~/components/marketing/cookie-consent-toast";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => {
        resetAnalyticsConsent();
        showCookieConsentToast();
      }}
      className="hover:text-[color:var(--marketing-ink)]"
    >
      Cookie settings
    </button>
  );
}
