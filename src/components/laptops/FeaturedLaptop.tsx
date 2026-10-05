"use client";

import { LaptopProductImage } from "@/components/laptops/LaptopProductImage";
import { Rating } from "@/components/ui/Rating";
import { formatInr, formatPriceAsOf } from "@/lib/format";
import { getShortSpecs } from "@/lib/laptop-utils";
import type { Laptop } from "@/types/laptop";

const ctaPrimary =
  "h-10 flex-1 rounded-[20px] bg-cta px-3 text-[13px] font-medium text-[#171717] transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]";
const ctaSecondary =
  "h-10 flex-1 rounded-[20px] border border-border bg-card px-3 text-[13px] font-medium text-text transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]";

type FeaturedLaptopProps = {
  laptop: Laptop;
  onOpenDetails: (laptop: Laptop) => void;
};

export function FeaturedLaptop({ laptop, onOpenDetails }: FeaturedLaptopProps) {
  const specLine = getShortSpecs(laptop);

  return (
    <section
      aria-labelledby="editor-pick-heading"
      className="overflow-hidden rounded-[10px] border border-cta bg-card"
    >
      <div className="grid lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]">
        <button
          type="button"
          onClick={() => onOpenDetails(laptop)}
          className="relative aspect-[4/3] w-full max-h-[180px] lg:max-h-[190px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]"
        >
          <LaptopProductImage
            src={laptop.image}
            alt={laptop.name}
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 380px"
            priority
          />
        </button>

        <div className="flex flex-col justify-center px-3 py-3 sm:px-4 sm:py-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.06em] text-muted">
            Editor&apos;s pick · From the channel
          </p>
          <h2
            id="editor-pick-heading"
            className="mt-1 text-[15px] font-semibold leading-snug text-text"
          >
            {laptop.name}
          </h2>
          <p className="mt-0.5 text-[12px] font-normal text-muted">{specLine}</p>
          <p className="mt-1 text-[12px] font-medium text-success">
            {laptop.recommendationLabel}
          </p>

          <div className="mt-1.5">
            <Rating rating={laptop.rating} reviewCount={laptop.reviewCount} />
          </div>

          <div className="mt-2">
            <p className="text-[22px] font-semibold leading-none text-text">
              {formatInr(laptop.price)}
            </p>
            <p className="mt-0.5 text-[11px] font-normal text-muted">
              as of {formatPriceAsOf(laptop.lastChecked)} · M.R.P.{" "}
              <span className="line-through">{formatInr(laptop.mrp)}</span>
              <span className="ml-1 text-[#c5221f]">
                {laptop.discountPercentage}% off
              </span>
            </p>
          </div>

          {laptop.honestNote ? (
            <p className="mt-2 rounded-md bg-highlight px-2 py-1.5 text-[12px] font-normal leading-relaxed text-text">
              {laptop.honestNote}
            </p>
          ) : null}

          <div className="mt-2.5 flex flex-col gap-1.5 sm:flex-row">
            <button
              type="button"
              onClick={() => onOpenDetails(laptop)}
              className={ctaPrimary}
            >
              View on Amazon
            </button>
            <button
              type="button"
              onClick={() => onOpenDetails(laptop)}
              className={ctaSecondary}
            >
              Specs &amp; watch-outs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
