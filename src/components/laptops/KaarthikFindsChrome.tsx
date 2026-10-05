import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import { FINDS_NAME, FINDS_TAGLINE, SITE_NAME } from "@/lib/site-config";
import Link from "next/link";

export function KaarthikFindsHeader() {
  return (
    <header>
      <div className="bg-header-dark text-white">
        <div className="mx-auto w-full max-w-[1080px] px-4 py-2 sm:px-6 sm:py-2.5">
          <p className="text-[15px] font-semibold leading-tight sm:text-base">
            {FINDS_NAME}
          </p>
          <p className="mt-0.5 text-[12px] font-normal leading-snug text-white/70">
            {FINDS_TAGLINE}
          </p>
        </div>
      </div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-[1080px] px-4 py-1 sm:px-6">
          <AffiliateDisclosure className="text-[11px] font-normal leading-snug text-muted" />
        </div>
      </div>
    </header>
  );
}

export function KaarthikFindsFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border bg-header-dark">
      <div className="mx-auto w-full max-w-[1080px] space-y-1.5 px-4 py-6 text-center text-[11px] font-normal leading-relaxed text-white/55 sm:px-6">
        <p>
          Prices and availability change on Amazon. Update listings in{" "}
          <code className="text-white/75">src/data/laptops.ts</code>.
        </p>
        <p>
          Part of{" "}
          <Link
            href="/"
            className="text-white/80 underline underline-offset-2 hover:text-white"
          >
            {SITE_NAME}
          </Link>
          {" · © "}
          {year} {FINDS_NAME}
        </p>
      </div>
    </footer>
  );
}
