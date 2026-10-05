import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import { footerNavItems } from "@/lib/navigation";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-primary">{SITE_NAME}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {SITE_TAGLINE}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Explore</p>
            <ul className="mt-3 space-y-2">
              {footerNavItems.map((item) =>
                item.comingSoon ? (
                  <li key={item.label} className="text-sm text-muted">
                    {item.label}{" "}
                    <span className="text-xs">(Coming soon)</span>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Disclosure</p>
            <AffiliateDisclosure className="mt-3" />
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted">
          © {year} {SITE_NAME}. Sample product data for demonstration.
        </p>
      </div>
    </footer>
  );
}
