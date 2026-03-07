import type { FC } from "react";
import type { ServiceCard, BadgeColor } from "../types";
import { SERVICES, waLink } from "../constants";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";
import { cn } from "./cn";

// ─── Badge colour map ──────────────────────────────────────────────────────

const badgeStyles: Record<BadgeColor, string> = {
  orange: "bg-[#FFF7ED] text-[#EA580C]",
  green: "bg-[#E8F8EE] text-[#1A8A45]",
  blue: "bg-[#E8F0FF] text-[#1A45C8]",
};

// ─── Single Service Card ───────────────────────────────────────────────────

interface ServiceCardComponentProps {
  card: ServiceCard;
  delay: number;
}

const ServiceCardComponent: FC<ServiceCardComponentProps> = ({ card, delay }) => {
  return (
    <RevealWrapper delay={delay}>
      <a
        href={waLink(card.whatsappMsg)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Book ${card.title} on WhatsApp`}
        className={cn(
          "group relative block h-full rounded-[20px] border border-black/[0.08] bg-white no-underline",
          "transition-all duration-300 overflow-hidden",
          "hover:border-[#EA580C] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(234,88,12,0.12)]"
        )}
      >
        {/* Image Header with 'Details' Overlay */}
        {card.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            
            {/* 'Details' text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[12px] font-bold tracking-[2px] uppercase">
                Details
              </span>
            </div>

            {/* Badge - moved inside image for better layout */}
            <span
              className={cn(
                "absolute top-4 right-4 z-10",
                "text-[10px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-full",
                badgeStyles[card.badgeColor]
              )}
            >
              {card.badge}
            </span>
          </div>
        )}

        <div className="p-8">
          {/* Title */}
          <h3 className="relative z-10 font-display font-bold text-[22px] text-[#0A0A0A] mb-3">
            {card.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-[15px] text-[#6B6B6B] leading-relaxed mb-6">
            {card.description}
          </p>

          {/* Feature list */}
          <ul className="relative z-10 space-y-2 mb-7 list-none p-0 m-0">
            {card.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[13px] text-[#6B6B6B]">
                <span className="text-[#EA580C] font-bold text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <span
            className={cn(
              "relative z-10 inline-flex items-center gap-1.5",
              "text-[14px] font-semibold text-[#EA580C]",
              "transition-[gap] duration-200 group-hover:gap-3"
            )}
          >
            Book on WhatsApp
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </RevealWrapper>
  );
};

// ─── Services Section ──────────────────────────────────────────────────────

/**
 * Services — "The Service Pillar"
 *
 * Three premium service cards establishing RAC as a tech partner,
 * not merely a gadget seller. Each card links to a pre-filled WhatsApp message.
 */
const Services: FC = () => {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-[#FAFAFA]"
    >
      <div className="max-w-[1200px] mx-auto px-10 py-24">
        <RevealWrapper>
          <SectionHeader
            tag="What We Do"
            title={
              <>
                More Than a<br />Gadget Store.
              </>
            }
            subtitle="We're your end-to-end tech partner — from finding the right device to keeping it running perfectly."
          />
        </RevealWrapper>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((card, i) => (
            <ServiceCardComponent key={card.title} card={card} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
