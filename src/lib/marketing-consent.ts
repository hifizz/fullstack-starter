export const ANALYTICS_CONSENT_KEY = "chatkeep-analytics-consent";
const CONSENT_COOKIE_KEY = "chatkeep-cookie-consent";
const CONSENT_EVENT = "chatkeep-consent-change";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
let inMemoryConsent: AnalyticsConsent | null = null;

function readCookieConsent(): AnalyticsConsent | null {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie.split("; ").find((row) => row.startsWith(`${CONSENT_COOKIE_KEY}=`));

  if (!match) {
    return null;
  }

  const value = match.split("=")[1];
  if (value === "accepted" || value === "rejected") {
    return value;
  }

  return null;
}

function writeCookieConsent(value: AnalyticsConsent) {
  if (typeof document === "undefined") {
    return;
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_KEY}=${value}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax${secure}`;
}

function clearCookieConsent() {
  if (typeof document === "undefined") {
    return;
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_KEY}=; max-age=0; path=/; SameSite=Lax${secure}`;
}

export type AnalyticsConsent = "accepted" | "rejected";

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const cookieConsent = readCookieConsent();
  if (cookieConsent) {
    return cookieConsent;
  }

  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      return stored;
    }
    return null;
  } catch {
    stored = inMemoryConsent;
  }
  return stored;
}

function broadcastConsentChange() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function writeAnalyticsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined") {
    return;
  }

  writeCookieConsent(value);

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    inMemoryConsent = value;
  }

  broadcastConsentChange();
}

export function resetAnalyticsConsent() {
  if (typeof window === "undefined") {
    return;
  }

  clearCookieConsent();

  try {
    window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
  } catch {
    inMemoryConsent = null;
  }

  broadcastConsentChange();
}

export function subscribeConsentChange(handler: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === ANALYTICS_CONSENT_KEY) {
      handler();
    }
  };

  window.addEventListener(CONSENT_EVENT, handler);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(CONSENT_EVENT, handler);
    window.removeEventListener("storage", handleStorage);
  };
}
