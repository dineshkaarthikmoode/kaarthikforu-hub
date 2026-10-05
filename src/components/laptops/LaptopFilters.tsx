"use client";

import { BUDGET_FILTERS, USE_CASE_FILTERS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { LaptopFilterState } from "@/types/laptop";

type LaptopFiltersProps = {
  filters: LaptopFilterState;
  onBudgetChange: (budget: LaptopFilterState["budget"]) => void;
  onUseCaseChange: (useCase: LaptopFilterState["useCase"]) => void;
};

function FilterChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "shrink-0 rounded-full border px-2.5 py-0.5 text-[12px] font-normal leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]",
        selected
          ? "border-[#5b9bd5] bg-[#eef6fc] text-[#1a5a8a]"
          : "border-border bg-card text-text hover:border-[#c5d9e8]",
      )}
    >
      {label}
    </button>
  );
}

function FilterRow({
  title,
  labelId,
  children,
}: {
  title: string;
  labelId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      <p
        id={labelId}
        className="shrink-0 text-[12px] font-medium text-text sm:w-12"
      >
        {title}
      </p>
      <div
        className="-mx-0.5 flex flex-1 gap-1 overflow-x-auto px-0.5 scroll-smooth"
        role="group"
        aria-labelledby={labelId}
      >
        {children}
      </div>
    </div>
  );
}

export function LaptopFilters({
  filters,
  onBudgetChange,
  onUseCaseChange,
}: LaptopFiltersProps) {
  return (
    <div className="space-y-1.5">
      <FilterRow title="Budget" labelId="budget-filter-label">
        {BUDGET_FILTERS.map((option) => (
          <FilterChip
            key={option.value}
            label={option.label}
            selected={filters.budget === option.value}
            onClick={() => onBudgetChange(option.value)}
          />
        ))}
      </FilterRow>

      <FilterRow title="Use" labelId="use-filter-label">
        {USE_CASE_FILTERS.map((option) => (
          <FilterChip
            key={option.value}
            label={option.label}
            selected={filters.useCase === option.value}
            onClick={() => onUseCaseChange(option.value)}
          />
        ))}
      </FilterRow>
    </div>
  );
}
