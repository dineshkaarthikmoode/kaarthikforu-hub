"use client";

import { LaptopProductImage } from "@/components/laptops/LaptopProductImage";
import { LinkButton } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { formatInr, formatPriceAsOf } from "@/lib/format";
import { getShortSpecs } from "@/lib/laptop-utils";
import type { Laptop } from "@/types/laptop";
import type { KeyboardEvent } from "react";

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
  const open = () => onOpenDetails(laptop);

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  };

  return (
    <section
      aria-labelledby="student-pick-heading"
      className="overflow-hidden rounded-[10px] border border-[#E8E8E3] bg-white"
    >
      <div
        className="border-b border-[#E8E8E3] bg-[#FFFEF9] px-3 py-2.5 sm:px-4"
        role="note"
      >
        <p className="text-[11px] font-semibold leading-snug tracking-[0.04em] text-[#172B2B] sm:text-[12px]">
          <span className="inline-block border-l-[3px] border-[#F4C430] pl-2 uppercase">
            Students / coding pick
          </span>
          <span className="font-medium text-[#5F6868]"> · </span>
          <span className="font-medium text-[#172B2B]">
            Best value in the catalogue
          </span>
        </p>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={open}
        onKeyDown={onCardKeyDown}
        className="grid cursor-pointer text-left lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]"
      >
        <div className="relative aspect-[4/3] w-full max-h-[180px] bg-[#FAFAF7] lg:max-h-[190px]">
          <LaptopProductImage
            src={laptop.image}
            alt={laptop.name}
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 380px"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-3 py-3 sm:px-4 sm:py-3">
          <h2
            id="student-pick-heading"
            className="text-[15px] font-semibold leading-snug text-text"
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
              as of {formatPriceAsOf(laptop.lastChecked)}
              {laptop.mrp > laptop.price && laptop.discountPercentage > 0 ? (
                <>
                  {" "}
                  · M.R.P.{" "}
                  <span className="line-through">{formatInr(laptop.mrp)}</span>
                  <span className="ml-1 text-[#c5221f]">
                    {laptop.discountPercentage}% off
                  </span>
                </>
              ) : null}
            </p>
          </div>

          {laptop.honestNote ? (
            <p className="mt-2 rounded-md bg-highlight px-2 py-1.5 text-[12px] font-normal leading-relaxed text-text">
              {laptop.honestNote}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 border-t border-border bg-[#FAFAF7] px-3 py-2.5 sm:flex-row sm:px-4">
        <LinkButton
          href={laptop.affiliateUrl}
          external
          className={ctaPrimary}
        >
          View on Amazon
        </LinkButton>
        <button type="button" onClick={open} className={ctaSecondary}>
          Specs &amp; watch-outs
        </button>
      </div>
    </section>
  );
}
