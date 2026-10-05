import {
  BUDGET_FILTERS,
  SKIP_RECOMMENDATION_THRESHOLD,
  SORT_OPTIONS,
  USE_CASE_FILTERS,
} from "@/lib/constants";
import type {
  BudgetCategory,
  Laptop,
  LaptopFilterState,
  SortOption,
} from "@/types/laptop";

export function getBudgetCategoryFromPrice(price: number): BudgetCategory {
  if (price < 40_000) return "under-40k";
  if (price < 60_000) return "40-60k";
  if (price < 80_000) return "60-80k";
  if (price < 120_000) return "80-120k";
  return "above-120k";
}

export function isSkippedLaptop(laptop: Laptop): boolean {
  if (laptop.status === "skip") return true;
  return laptop.recommendationScore <= SKIP_RECOMMENDATION_THRESHOLD;
}

export function getSkippedLaptops(laptops: Laptop[]): Laptop[] {
  return laptops.filter(isSkippedLaptop);
}

export function getCatalogLaptops(laptops: Laptop[]): Laptop[] {
  return laptops.filter((l) => !isSkippedLaptop(l));
}

export function getFeaturedLaptop(laptops: Laptop[]): Laptop | undefined {
  return laptops.find((l) => l.editorPick && !isSkippedLaptop(l));
}

function matchesUseCase(
  laptop: Laptop,
  useCase: LaptopFilterState["useCase"],
): boolean {
  if (useCase === "all") return true;
  if (useCase === "creators-ai") {
    return (
      laptop.useCases.includes("creators") ||
      laptop.useCases.includes("ai-ml")
    );
  }
  return laptop.useCases.includes(useCase);
}

export function filterLaptops(
  laptops: Laptop[],
  filters: Pick<LaptopFilterState, "budget" | "useCase">,
): Laptop[] {
  return laptops.filter((laptop) => {
    if (filters.budget !== "all" && laptop.budgetCategory !== filters.budget) {
      return false;
    }
    return matchesUseCase(laptop, filters.useCase);
  });
}

export function sortLaptops(laptops: Laptop[], sort: SortOption): Laptop[] {
  const copy = [...laptops];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    case "discount":
      return copy.sort((a, b) => b.discountPercentage - a.discountPercentage);
    case "recommended":
    default:
      return copy.sort(
        (a, b) => b.recommendationScore - a.recommendationScore,
      );
  }
}

export function getVisibleCatalogLaptops(
  laptops: Laptop[],
  filters: LaptopFilterState,
  options?: { excludeEditorPick?: boolean },
): Laptop[] {
  const base = getCatalogLaptops(laptops);
  let filtered = filterLaptops(base, filters);
  if (options?.excludeEditorPick) {
    filtered = filtered.filter((l) => !l.editorPick);
  }
  return sortLaptops(filtered, filters.sort);
}

const budgetParamMap = new Map(
  BUDGET_FILTERS.filter((b) => b.param).map((b) => [b.param!, b.value]),
);

const useParamMap = new Map(
  USE_CASE_FILTERS.filter((u) => u.param).map((u) => [u.param!, u.value]),
);

const sortParamMap = new Map(SORT_OPTIONS.map((s) => [s.param, s.value]));

export function parseFilterSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): LaptopFilterState {
  const rawBudget = getSingleParam(searchParams.budget);
  const rawUse = getSingleParam(searchParams.use);
  const rawSort = getSingleParam(searchParams.sort);

  const budget =
    (rawBudget && budgetParamMap.get(rawBudget)) ?? ("all" as const);
  const useCase =
    (rawUse && useParamMap.get(rawUse)) ?? ("all" as const);
  const sort: SortOption =
    (rawSort ? sortParamMap.get(rawSort) : undefined) ?? "recommended";

  return {
    budget: budget as LaptopFilterState["budget"],
    useCase: useCase as LaptopFilterState["useCase"],
    sort,
  };
}

function getSingleParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export function buildLaptopSearchParams(
  filters: LaptopFilterState,
): URLSearchParams {
  const params = new URLSearchParams();

  const budgetEntry = BUDGET_FILTERS.find((b) => b.value === filters.budget);
  if (budgetEntry?.param) params.set("budget", budgetEntry.param);

  const useEntry = USE_CASE_FILTERS.find((u) => u.value === filters.useCase);
  if (useEntry?.param) params.set("use", useEntry.param);

  if (filters.sort !== "recommended") {
    const sortEntry = SORT_OPTIONS.find((s) => s.value === filters.sort);
    if (sortEntry) params.set("sort", sortEntry.param);
  }

  return params;
}

export function getShortSpecs(laptop: Laptop): string {
  return `${laptop.processor} · ${laptop.ram} · ${laptop.storage}`;
}

export function getSkipDisplayReason(laptop: Laptop): string {
  if (laptop.skipReason) return laptop.skipReason;
  if (laptop.status === "skip") return "Skip: not recommended at current value";
  return "Skip: low recommendation score";
}
