"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const triggerClassName =
  "rounded-full border border-[color:var(--marketing-border)] px-4 py-2 text-sm text-[color:var(--marketing-muted)] transition hover:text-[color:var(--marketing-ink)]";

export function MarketingMobileMenu({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClassName}>Menu</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[12rem] rounded-2xl border border-[color:var(--marketing-border)] bg-white p-2 text-sm text-[color:var(--marketing-muted)]"
      >
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href}
            asChild
            className="rounded-lg px-3 py-2 text-[color:var(--marketing-muted)] hover:text-[color:var(--marketing-ink)]"
          >
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
