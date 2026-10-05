"use client";

import { BuyingGuide } from "@/components/laptops/BuyingGuide";
import { FeaturedLaptop } from "@/components/laptops/FeaturedLaptop";
import { LaptopDetailModal } from "@/components/laptops/LaptopDetailModal";
import { LaptopFilters } from "@/components/laptops/LaptopFilters";
import { LaptopGrid } from "@/components/laptops/LaptopGrid";
import { LaptopSort } from "@/components/laptops/LaptopSort";
import { SkipThese } from "@/components/laptops/SkipThese";
import {
  buildLaptopSearchParams,
  getFeaturedLaptop,
  getSkippedLaptops,
  getVisibleCatalogLaptops,
  parseFilterSearchParams,
} from "@/lib/laptop-utils";
import type { Laptop, LaptopFilterState } from "@/types/laptop";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState, useTransition } from "react";

type LaptopCatalogProps = {
  laptops: Laptop[];
  initialFilters: LaptopFilterState;
};

export function LaptopCatalog({ laptops, initialFilters }: LaptopCatalogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);

  const filters = useMemo(() => {
    const parsed = parseFilterSearchParams(
      Object.fromEntries(searchParams.entries()),
    );
    if (searchParams.size === 0) {
      return initialFilters;
    }
    return parsed;
  }, [searchParams, initialFilters]);

  const updateFilters = useCallback(
    (next: LaptopFilterState) => {
      const params = buildLaptopSearchParams(next);
      const query = params.toString();
      const href = query ? `${pathname}?${query}` : pathname;
      startTransition(() => {
        router.replace(href, { scroll: false });
      });
    },
    [pathname, router],
  );

  const featured = useMemo(() => getFeaturedLaptop(laptops), [laptops]);
  const skipped = useMemo(() => getSkippedLaptops(laptops), [laptops]);

  const showFeatured =
    featured &&
    filters.budget === "all" &&
    filters.useCase === "all" &&
    filters.sort === "recommended";

  const visibleLaptops = useMemo(
    () =>
      getVisibleCatalogLaptops(laptops, filters, {
        excludeEditorPick: Boolean(showFeatured),
      }),
    [laptops, filters, showFeatured],
  );

  const openDetails = useCallback((laptop: Laptop) => {
    setSelectedLaptop(laptop);
  }, []);

  const closeDetails = useCallback(() => {
    setSelectedLaptop(null);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 -mx-4 border-b border-border bg-surface/98 px-4 pb-2 pt-1.5 backdrop-blur-[2px] sm:-mx-6 sm:px-6">
        <LaptopFilters
          filters={filters}
          onBudgetChange={(budget) => updateFilters({ ...filters, budget })}
          onUseCaseChange={(useCase) => updateFilters({ ...filters, useCase })}
        />

        <div className="mt-1.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-normal text-muted">
            {visibleLaptops.length}{" "}
            {visibleLaptops.length === 1 ? "laptop" : "laptops"}
          </p>
          <LaptopSort
            value={filters.sort}
            onChange={(sort) => updateFilters({ ...filters, sort })}
          />
        </div>
      </div>

      {showFeatured && featured ? (
        <div className="mt-4">
          <FeaturedLaptop laptop={featured} onOpenDetails={openDetails} />
        </div>
      ) : null}

      <div className="mt-4 scroll-smooth">
        <LaptopGrid laptops={visibleLaptops} onOpenDetails={openDetails} />
      </div>

      <SkipThese laptops={skipped} onOpenDetails={openDetails} />

      <BuyingGuide />

      <LaptopDetailModal laptop={selectedLaptop} onClose={closeDetails} />
    </>
  );
}
