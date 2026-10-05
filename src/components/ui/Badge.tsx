import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "muted" | "editor";
  className?: string;
};

const variants = {
  default: "bg-primary/10 text-primary",
  accent: "bg-accent-orange/15 text-accent-orange",
  muted: "bg-surface-muted text-muted",
  editor: "bg-primary text-white",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
