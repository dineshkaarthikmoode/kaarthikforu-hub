export type BudgetCategory =
  | "under-40k"
  | "40-60k"
  | "60-80k"
  | "80-120k"
  | "above-120k";

export type UseCaseId =
  | "coding"
  | "students"
  | "gaming"
  | "creators"
  | "ai-ml"
  | "home-office"
  | "kids";

export type LaptopStatus = "active" | "skip";

export type SortOption =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "discount";

export interface Laptop {
  id: string;
  slug: string;
  name: string;
  brand: string;
  shortDescription: string;
  price: number;
  mrp: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  processor: string;
  ram: string;
  storage: string;
  display: string;
  gpu?: string;
  weight?: string;
  operatingSystem: string;
  budgetCategory: BudgetCategory;
  useCases: UseCaseId[];
  recommendationScore: number;
  recommendationLabel: string;
  badge?: string;
  editorPick?: boolean;
  honestNote?: string;
  pros?: string[];
  cons?: string[];
  affiliateUrl: string;
  lastChecked: string;
  featured?: boolean;
  status: LaptopStatus;
  skipReason?: string;
}

export interface LaptopFilterState {
  budget: BudgetCategory | "all";
  useCase: UseCaseId | "creators-ai" | "all";
  sort: SortOption;
}
