import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-[#171717] hover:bg-cta-hover font-medium",
  secondary:
    "bg-white text-text border border-border hover:bg-surface-muted font-medium",
  ghost: "bg-transparent text-text hover:bg-surface-muted font-normal",
  outline:
    "border border-border bg-white text-text hover:bg-surface-muted font-medium",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b8def]";

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50",
        focusRing,
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
  external,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm transition-colors",
        focusRing,
        variantClasses[variant],
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer sponsored" }
        : {})}
    >
      {children}
    </a>
  );
}
