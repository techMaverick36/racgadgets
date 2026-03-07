import type { FC, ReactNode } from "react";
import { cn } from "./cn";

interface SectionHeaderProps {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/**
 * Reusable section header with eyebrow tag, headline, and optional subtitle.
 * Supports left/center alignment and light/dark colour modes.
 */
const SectionHeader: FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}) => {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p
        className={cn(
          "text-xs font-bold tracking-[0.18em] uppercase mb-4",
          dark ? "text-[#F97316]" : "text-[#EA580C]"
        )}
      >
        {tag}
      </p>
      <h2
        className={cn(
          "font-display font-extrabold leading-[1.08] tracking-tight",
          "text-[clamp(32px,4.5vw,56px)]",
          dark ? "text-white" : "text-[#0A0A0A]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-relaxed max-w-[540px]",
            align === "center" && "mx-auto",
            dark ? "text-white/50" : "text-[#6B6B6B]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
