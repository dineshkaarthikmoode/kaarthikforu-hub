"use client";

import { SORT_OPTIONS } from "@/lib/constants";
import type { SortOption } from "@/types/laptop";

type LaptopSortProps = {
  value: SortOption;
  onChange: (sort: SortOption) => void;
  id?: string;
};

export function LaptopSort({ value, onChange, id = "laptop-sort" }: LaptopSortProps) {
  return (
    <div className="flex w-full items-center justify-end gap-1.5 sm:w-auto">
      <label htmlFor={id} className="shrink-0 text-[12px] font-normal text-muted">
        Sort by
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="h-8 min-w-0 max-w-full flex-1 rounded-md border border-border bg-card px-2 text-[12px] font-normal text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def] sm:w-[136px] sm:flex-none"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
