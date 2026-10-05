"use client";

import { LAPTOP_IMAGE_FALLBACK } from "@/lib/laptop-images";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";

type LaptopProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  subdued?: boolean;
};

export function LaptopProductImage({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority,
  subdued,
}: LaptopProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(
    src?.trim() ? src : LAPTOP_IMAGE_FALLBACK,
  );

  return (
    <div className={cn("relative bg-[#F7F8FA]", className)}>
      <Image
        src={currentSrc}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-contain p-2",
          subdued && "grayscale opacity-90",
          imageClassName,
        )}
        sizes={sizes}
        onError={() => {
          if (currentSrc !== LAPTOP_IMAGE_FALLBACK) {
            setCurrentSrc(LAPTOP_IMAGE_FALLBACK);
          }
        }}
      />
    </div>
  );
}
