import { LaptopCard } from "@/components/laptops/LaptopCard";
import type { Laptop } from "@/types/laptop";

type LaptopGridProps = {
  laptops: Laptop[];
  onOpenDetails: (laptop: Laptop) => void;
};

export function LaptopGrid({ laptops, onOpenDetails }: LaptopGridProps) {
  if (laptops.length === 0) {
    return (
      <div className="rounded-[10px] border border-dashed border-border bg-card px-5 py-10 text-center">
        <p className="text-[15px] font-medium text-text">No laptops match</p>
        <p className="mt-1.5 text-[13px] font-normal text-muted">
          Try clearing a filter or choosing a broader budget range.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {laptops.map((laptop) => (
        <li key={laptop.id} className="min-w-0">
          <LaptopCard laptop={laptop} onOpenDetails={onOpenDetails} />
        </li>
      ))}
    </ul>
  );
}
