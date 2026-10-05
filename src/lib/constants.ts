import type { BudgetCategory, SortOption, UseCaseId } from "@/types/laptop";

export const BUDGET_FILTERS: {
  value: BudgetCategory | "all";
  label: string;
  param: string | null;
}[] = [
  { value: "all", label: "All", param: null },
  { value: "under-40k", label: "Under ₹40K", param: "under-40k" },
  { value: "40-60k", label: "₹40K–₹60K", param: "40-60k" },
  { value: "60-80k", label: "₹60K–₹80K", param: "60-80k" },
  { value: "80-120k", label: "₹80K–₹1.2L", param: "80-120k" },
  { value: "above-120k", label: "Above ₹1.2L", param: "above-120k" },
];

export const USE_CASE_FILTERS: {
  value: UseCaseId | "creators-ai" | "all";
  label: string;
  param: string | null;
}[] = [
  { value: "all", label: "All", param: null },
  { value: "coding", label: "Coding", param: "coding" },
  { value: "students", label: "Students", param: "students" },
  { value: "gaming", label: "Gaming", param: "gaming" },
  { value: "creators-ai", label: "Creators & AI", param: "creators-ai" },
  { value: "home-office", label: "Home & Office", param: "home-office" },
  { value: "kids", label: "Kids", param: "kids" },
];

export const SORT_OPTIONS: { value: SortOption; label: string; param: string }[] =
  [
    { value: "recommended", label: "Recommended", param: "recommended" },
    { value: "price-asc", label: "Price: Low to High", param: "price-asc" },
    { value: "price-desc", label: "Price: High to Low", param: "price-desc" },
    { value: "rating", label: "Rating", param: "rating" },
    { value: "discount", label: "Discount", param: "discount" },
];

/** Laptops at or below this score appear in "Skip these" (unless already status skip). */
export const SKIP_RECOMMENDATION_THRESHOLD = 45;
