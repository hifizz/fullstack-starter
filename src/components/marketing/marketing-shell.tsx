import Link from "next/link";
import { CookieSettingsLink } from "~/components/marketing/cookie-settings-link";
import { MarketingMobileMenu } from "~/components/marketing/marketing-mobile-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Install", href: "/install" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
];

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--marketing-surface)] text-[color:var(--marketing-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),_transparent_55%)]" />
        <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(15,23,42,0.12),_transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.06)_0%,_rgba(15,23,42,0)_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,_transparent_24px,_rgba(15,23,42,0.04)_24px,_rgba(15,23,42,0.04)_25px)] bg-[length:100%_25px]" />
      </div>

      <header className="relative z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--marketing-ink)] text-white">
              <span className="text-lg font-semibold">CK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">ChatKeep</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--marketing-muted)]">
                AI Chat Assistant
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[color:var(--marketing-muted)] lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--marketing-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <MarketingMobileMenu items={navItems} />
            </div>
            <Link
              href="/install"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--marketing-ink)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Install for Chrome
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-[color:var(--marketing-border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[color:var(--marketing-muted)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-[color:var(--marketing-ink)]">
              Local-first by default.
            </p>
            <p>Your data stays on your device. No selling, no training.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-[color:var(--marketing-ink)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[color:var(--marketing-ink)]">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-[color:var(--marketing-ink)]">
              FAQ
            </Link>
            <CookieSettingsLink />
          </div>
        </div>
      </footer>
    </div>
  );
}
