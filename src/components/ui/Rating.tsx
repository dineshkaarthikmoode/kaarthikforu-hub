import { cn } from "@/lib/cn";
import { formatReviewCount } from "@/lib/format";
import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
};

export function Rating({
  rating,
  reviewCount,
  size = "sm",
  className,
}: RatingProps) {
  const starSize = size === "sm" ? 11 : 12;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const textSize = size === "sm" ? "text-[12px]" : "text-[12px]";

  return (
    <div
      className={cn("flex flex-wrap items-center gap-1", className)}
      aria-label={`Rating ${rating} out of 5${
        reviewCount !== undefined ? `, ${reviewCount} reviews` : ""
      }`}
    >
      <div className="flex items-center text-[#E8A317]" aria-hidden>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`f-${i}`} size={starSize} fill="currentColor" />
        ))}
        {hasHalf ? (
          <Star
            key="half"
            size={starSize}
            className="opacity-50"
            fill="currentColor"
          />
        ) : null}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`e-${i}`} size={starSize} className="text-border" />
        ))}
      </div>
      <span className={cn(textSize, "font-normal text-text")}>
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined ? (
        <span className={cn(textSize, "font-normal text-muted")}>
          ({formatReviewCount(reviewCount)})
        </span>
      ) : null}
    </div>
  );
}
