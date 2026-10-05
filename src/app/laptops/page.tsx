import { LaptopCatalog } from "@/components/laptops/LaptopCatalog";
import { laptops } from "@/data/laptops";
import { parseFilterSearchParams } from "@/lib/laptop-utils";
import { FINDS_NAME, SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: `${FINDS_NAME} — Laptop picks by budget & use case`,
  description:
    "Kaarthik Finds: curated laptop recommendations for coding, students, gaming, and creators. Filter, compare specs, then shop on Amazon.",
  alternates: {
    canonical: `${SITE_URL}/laptops`,
  },
  openGraph: {
    title: FINDS_NAME,
    description:
      "Dedicated laptop picks — filter by budget and use case, read honest notes, then view on Amazon.",
    url: `${SITE_URL}/laptops`,
    siteName: FINDS_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: FINDS_NAME,
    description: "Curated laptop catalogue with filters and spec details.",
  },
};

function CatalogFallback() {
  return (
    <div className="mt-6 space-y-4">
      <div className="h-24 rounded-xl bg-white/60" />
      <div className="h-40 rounded-xl bg-white/60" />
    </div>
  );
}

export default async function LaptopsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialFilters = parseFilterSearchParams(params);

  return (
    <main id="finds-main" className="scroll-smooth">
      <div className="mx-auto w-full max-w-[1080px] px-4 py-3 sm:px-6 sm:py-4">
        <Suspense fallback={<CatalogFallback />}>
          <LaptopCatalog laptops={laptops} initialFilters={initialFilters} />
        </Suspense>
      </div>
    </main>
  );
}
