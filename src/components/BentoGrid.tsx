import type { FC } from "react";
import { PlayCircle } from "lucide-react";
import type { BentoItem } from "../types";
import { BENTO_ITEMS, waLink } from "../constants";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";
import { cn } from "./cn";

// ─── Individual Bento Card ─────────────────────────────────────────────────

interface BentoCardProps {
  item: BentoItem;
  delay: number;
}

const BentoCard: FC<BentoCardProps> = ({ item, delay }) => {
  const isDark = item.textColor === "white";
  const labelColor = item.bg === "#EA580C"
    ? "rgba(255,255,255,0.65)"
    : isDark
      ? "rgba(255,255,255,0.45)"
      : "#EA580C";

  const minH = item.span === "tall" ? 480 : 240;

  return (
    <RevealWrapper
      delay={delay}
      className={cn(
        "group",
        item.span === "wide" && "sm:col-span-2",
        item.span === "tall" && "lg:row-span-2"
      )}
    >
      <a
        href={item.href ?? waLink(item.whatsappMsg)}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.label}: ${item.title}`}
        className="relative block h-full rounded-[20px] overflow-hidden cursor-pointer no-underline bg-zinc-900"
      >
        {/* Background Image with Overlay */}
        {item.image && (
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: isDark
                  ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                  : "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)"
              }}
            />
          </div>
        )}

        {/* Content Container */}
        <div
          className="relative flex flex-col justify-end p-6 h-full z-10"
          style={{ minHeight: `${minH}px`, color: isDark ? "#fff" : "#1A1A1A" }}
        >
          {/* Play button overlay */}
          {item.playable && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center
                         text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
              aria-hidden="true"
            >
              <PlayCircle size={40} fill="currentColor" fillOpacity={0.2} />
            </div>
          )}

          {/* Text content */}
          <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
            <p
              className="flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase mb-2"
              style={{ color: labelColor }}
            >
              <item.icon size={14} strokeWidth={2.5} />
              {item.label}
            </p>
            <h3 className="font-display font-bold text-[22px] leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
      </a>
    </RevealWrapper>
  );
};

// ─── Bento Grid Section ────────────────────────────────────────────────────

/**
 * BentoGrid — "The Content Vault"
 *
 * Editorial-style 3-column grid showcasing social media content types.
 * Cards link directly to contextual WhatsApp messages.
 * Responsive: 3 columns on desktop, 2 on tablet, 1 on mobile.
 */
const BentoGrid: FC = () => {
  return (
    <section id="content" aria-label="Unboxing and repair videos">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 py-24">
        <RevealWrapper>
          <SectionHeader
            tag="Visual Content"
            title={
              <>
                Unboxing &<br />
                Repair Videos.
              </>
            }
            subtitle="Watch our latest unboxings and repair demonstrations directly from our social media."
          />
        </RevealWrapper>

        {/* Grid */}
        <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {BENTO_ITEMS.map((item, i) => (
            <BentoCard key={item.id} item={item} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
