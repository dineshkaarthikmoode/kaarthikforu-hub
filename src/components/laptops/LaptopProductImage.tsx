"use client";

import {
  LAPTOP_IMAGE_FALLBACK,
  resolvePublicImageSrc,
} from "@/lib/laptop-images";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

type LaptopProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  subdued?: boolean;
};

function isLocalPublicPath(src: string): boolean {
  return src.startsWith("/") && !src.startsWith("//");
}

export function LaptopProductImage({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority,
  subdued,
}: LaptopProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(() =>
    resolvePublicImageSrc(src),
  );

  useEffect(() => {
    setCurrentSrc(resolvePublicImageSrc(src));
  }, [src]);

  const useUnoptimized = isLocalPublicPath(currentSrc);

  return (
    <div className={cn("relative h-full w-full bg-[#F7F8FA]", className)}>
      <Image
        src={currentSrc}
        alt={alt}
        fill
        priority={priority}
        unoptimized={useUnoptimized}
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
