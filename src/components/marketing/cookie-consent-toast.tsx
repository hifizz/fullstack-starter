"use client";

import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  type AnalyticsConsent,
  readAnalyticsConsent,
  writeAnalyticsConsent,
} from "~/lib/marketing-consent";

const COOKIE_TOAST_ID = "cookie-consent";

function ConsentDescription() {
  return (
    <span>
      We use cookies to keep ChatKeep reliable and to understand usage across the website and
      extension.
      <Link href="/privacy" className="ml-2 underline">
        Learn more
      </Link>
      .
    </span>
  );
}

function handleConsent(value: AnalyticsConsent) {
  writeAnalyticsConsent(value);
  toast.dismiss(COOKIE_TOAST_ID);
}

export function showCookieConsentToast() {
  if (readAnalyticsConsent()) {
    return;
  }

  toast.dismiss(COOKIE_TOAST_ID);
  toast("Cookies, your choice.", {
    id: COOKIE_TOAST_ID,
    description: <ConsentDescription />,
    duration: Infinity,
    dismissible: false,
    action: {
      label: "Accept all",
      onClick: () => handleConsent("accepted"),
    },
    cancel: {
      label: "Reject all",
      onClick: () => handleConsent("rejected"),
    },
  });
}

export function CookieConsentToast() {
  useEffect(() => {
    showCookieConsentToast();
  }, []);

  return null;
}
