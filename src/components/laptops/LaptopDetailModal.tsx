"use client";

import { LaptopProductImage } from "@/components/laptops/LaptopProductImage";
import { LinkButton } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { formatInr, formatPriceAsOf } from "@/lib/format";
import type { Laptop } from "@/types/laptop";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useId, useRef } from "react";

type LaptopDetailModalProps = {
  laptop: Laptop | null;
  onClose: () => void;
};

type SpecRow = { label: string; value: string };

function buildSpecRows(laptop: Laptop): SpecRow[] {
  const rows: SpecRow[] = [
    { label: "Processor", value: laptop.processor },
    { label: "RAM", value: laptop.ram },
    { label: "Storage", value: laptop.storage },
    { label: "Display", value: laptop.display },
  ];
  if (laptop.gpu) rows.push({ label: "Graphics", value: laptop.gpu });
  if (laptop.weight) rows.push({ label: "Weight", value: laptop.weight });
  rows.push({ label: "OS", value: laptop.operatingSystem });
  return rows;
}

export function LaptopDetailModal({ laptop, onClose }: LaptopDetailModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!laptop) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [laptop, onClose]);

  if (!laptop) return null;

  const specs = buildSpecRows(laptop);
  const watchOut =
    laptop.honestNote ??
    (laptop.cons?.length ? laptop.cons.join(" ") : undefined);
  const whyPicked = laptop.shortDescription || laptop.recommendationLabel;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close product details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-[10px] border border-border bg-card sm:max-h-[88vh] sm:rounded-[10px]"
      >
        <div className="flex items-start gap-3 border-b border-border p-3.5 pr-11">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
            <LaptopProductImage
              src={laptop.image}
              alt=""
              className="absolute inset-0"
              sizes="56px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h2
              id={titleId}
              className="text-[15px] font-medium leading-snug text-text"
            >
              {laptop.name}
            </h2>
            <div className="mt-1">
              <Rating
                rating={laptop.rating}
                reviewCount={laptop.reviewCount}
              />
            </div>
            <p className="mt-1.5 text-[17px] font-semibold text-text">
              {formatInr(laptop.price)}
              <span className="ml-1.5 text-[11px] font-normal text-muted">
                as of {formatPriceAsOf(laptop.lastChecked)}
              </span>
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted hover:bg-surface-muted hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 scroll-smooth">
          <table className="w-full text-[13px]">
            <tbody>
              {specs.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th
                    scope="row"
                    className="py-2 pr-3 text-left font-normal text-muted"
                  >
                    {row.label}
                  </th>
                  <td className="py-2 text-right font-normal text-text">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-3 space-y-2.5 text-[13px]">
            <div>
              <p className="font-medium text-text">Why we picked it</p>
              <p className="mt-1 font-normal leading-relaxed text-muted">
                {whyPicked}
              </p>
            </div>
            {watchOut ? (
              <div className="rounded-md border border-border bg-highlight px-2.5 py-2">
                <p className="font-medium text-text">Watch out</p>
                <p className="mt-1 font-normal leading-relaxed text-muted">
                  {watchOut}
                </p>
              </div>
            ) : null}
            {laptop.pros?.length ? (
              <p className="font-normal text-muted">
                <span className="font-medium text-text">Pros:</span>{" "}
                {laptop.pros.join(" · ")}
              </p>
            ) : null}
          </div>
        </div>

        <div className="border-t border-border p-3.5">
          <LinkButton
            href={laptop.affiliateUrl}
            external
            className="h-[44px] w-full rounded-[22px] text-[14px] font-medium"
          >
            View on Amazon
            <ExternalLink size={16} aria-hidden className="ml-1.5" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
