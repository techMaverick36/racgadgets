import type { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#EA580C] text-white border-transparent shadow-[0_8px_32px_rgba(234,88,12,0.30)] hover:bg-[#F97316] hover:shadow-[0_12px_40px_rgba(234,88,12,0.40)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-[#0A0A0A] border-[1.5px] border-black/10 hover:border-[#EA580C] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[#EA580C] border-transparent hover:bg-[#FFF7ED]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm gap-2",
  md: "px-7 py-3.5 text-[15px] gap-2.5",
  lg: "px-9 py-4 text-[17px] gap-3",
};

/**
 * Branded button with primary / secondary / ghost variants.
 * Accepts an optional icon node rendered left or right of the label.
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
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        "font-sans transition-all duration-200 cursor-pointer border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
