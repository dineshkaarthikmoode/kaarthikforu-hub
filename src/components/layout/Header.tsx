"use client";

import { mainNavItems } from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-primary text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
          onClick={() => setOpen(false)}
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {mainNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) && item.href !== "#";
            if (item.comingSoon) {
              return (
                <span
                  key={item.label}
                  className="cursor-not-allowed rounded-md px-3 py-2 text-sm text-white/50"
                  title="Coming soon"
                >
                  {item.label}
                  <span className="ml-1.5 text-[10px] font-medium uppercase tracking-wide text-white/40">
                    Soon
                  </span>
                </span>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/5 hover:text-white",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-primary px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) && item.href !== "#";
              if (item.comingSoon) {
                return (
                  <li key={item.label}>
                    <span className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm text-white/50">
                      {item.label}
                      <span className="text-xs uppercase tracking-wide text-white/40">
                        Coming soon
                      </span>
                    </span>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-md px-3 text-sm font-medium",
                      isActive ? "bg-white/10" : "hover:bg-white/5",
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
