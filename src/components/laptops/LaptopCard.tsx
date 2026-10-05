"use client";

import { LaptopProductImage } from "@/components/laptops/LaptopProductImage";
import { Rating } from "@/components/ui/Rating";
import { formatInr, formatPriceAsOf } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { Laptop } from "@/types/laptop";

const ctaClass =
  "flex h-10 w-full items-center justify-center rounded-[20px] bg-cta text-[13px] font-medium text-[#171717] transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]";

type LaptopCardProps = {
  laptop: Laptop;
  subdued?: boolean;
  onOpenDetails?: (laptop: Laptop) => void;
};

export function LaptopCard({
  laptop,
  subdued = false,
  onOpenDetails,
}: LaptopCardProps) {
  const open = () => onOpenDetails?.(laptop);

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[10px] border bg-card",
        subdued ? "border-border/70 opacity-[0.92]" : "border-border",
      )}
      data-slug={laptop.slug}
    >
      <button
        type="button"
        onClick={open}
        className="flex flex-1 flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]"
      >
        <div className="relative aspect-[4/3] w-full">
          {laptop.discountPercentage > 0 && !subdued ? (
            <span className="absolute left-1.5 top-1.5 z-10 rounded-sm bg-[#c5221f] px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
              {laptop.discountPercentage}% off
            </span>
          ) : null}
          <LaptopProductImage
            src={laptop.image}
            alt={laptop.name}
            className="absolute inset-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 25vw, 280px"
            subdued={subdued}
          />
        </div>

        <div className="flex flex-1 flex-col px-2.5 pb-1.5 pt-2">
          <p
            className={cn(
              "text-[11px] font-medium leading-snug",
              subdued ? "text-muted" : "text-success",
            )}
          >
            {laptop.recommendationLabel}
          </p>

          <h3 className="mt-0.5 line-clamp-2 text-[14px] font-medium leading-[1.35] text-text">
            {laptop.name}
          </h3>

          <div className="mt-1.5">
            <Rating rating={laptop.rating} reviewCount={laptop.reviewCount} />
          </div>

          <div className="mt-2">
            <p className="text-[19px] font-semibold leading-none text-text">
              {formatInr(laptop.price)}
            </p>
            <p className="mt-0.5 text-[11px] font-normal text-muted">
              as of {formatPriceAsOf(laptop.lastChecked)}
            </p>
            <p className="mt-0.5 text-[11px] font-normal text-muted">
              M.R.P.{" "}
              <span className="line-through">{formatInr(laptop.mrp)}</span>
              {!subdued && laptop.discountPercentage > 0 ? (
                <span className="ml-1 text-[#c5221f]">
                  {laptop.discountPercentage}% off
                </span>
              ) : null}
            </p>
          </div>

          {subdued ? (
            <p className="mt-2 line-clamp-2 text-[11px] font-normal leading-snug text-muted">
              {laptop.skipReason ?? laptop.honestNote}
            </p>
          ) : null}
        </div>
      </button>

      <div className="px-2.5 pb-2.5">
        <button type="button" onClick={open} className={ctaClass}>
          View on Amazon
        </button>
      </div>
    </article>
  );
}
