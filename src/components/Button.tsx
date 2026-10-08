import type { FC, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
}

type ButtonProps =
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#EA580C] text-white border-[#EA580C] hover:bg-[#C2410C] hover:border-[#C2410C]",
  secondary: "bg-white text-[#0A0A0A] border-black/15 hover:border-black/40",
  // Outline button for dark backgrounds
  inverse: "bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-[15px] gap-2.5",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

/**
 * Branded button with primary / secondary / inverse variants.
 * Renders an <a> when given `href`, otherwise a <button>.
 */
const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className,
  ...rest
}) => {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[10px] border font-sans font-semibold no-underline",
    "transition-colors duration-150 cursor-pointer select-none active:translate-y-px",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};

export default Button;
