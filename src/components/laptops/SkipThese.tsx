import { LaptopCard } from "@/components/laptops/LaptopCard";
import type { Laptop } from "@/types/laptop";

type SkipTheseProps = {
  laptops: Laptop[];
  onOpenDetails: (laptop: Laptop) => void;
};

export function SkipThese({ laptops, onOpenDetails }: SkipTheseProps) {
  if (laptops.length === 0) return null;

  return (
    <section
      aria-labelledby="skip-these-heading"
      className="mt-8 border-t border-border/80 pt-6 sm:mt-10"
    >
      <h2
        id="skip-these-heading"
        className="text-[15px] font-semibold text-text"
      >
        Skip these
      </h2>
      <p className="mt-1 text-[13px] font-normal text-muted">
        Lower priority picks — usually weak value or hard-to-upgrade specs.
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {laptops.map((laptop) => (
          <li key={laptop.id} className="min-w-0">
            <LaptopCard
              laptop={laptop}
              subdued
              onOpenDetails={onOpenDetails}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
