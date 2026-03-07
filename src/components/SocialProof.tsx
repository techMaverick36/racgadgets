import type { FC } from "react";
import type { ProofCard } from "../types";
import { PROOF_CARDS } from "../constants";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";
import { cn } from "./cn";

// ─── Single Proof Card ─────────────────────────────────────────────────────

interface ProofCardComponentProps {
  card: ProofCard;
  delay: number;
}

const ProofCardComponent: FC<ProofCardComponentProps> = ({ card, delay }) => {
  return (
    <RevealWrapper
      delay={delay}
      className={cn(
        card.featured && "md:[grid-column:span_2]"
      )}
    >
      <article
        aria-label={`Review by ${card.author}`}
        className={cn(
          "h-full p-7 rounded-[20px] border transition-all duration-300",
          "border-white/10 bg-white/5",
          "hover:bg-[rgba(234,88,12,0.08)] hover:border-[rgba(234,88,12,0.25)] hover:-translate-y-1",
          card.featured && "bg-[rgba(234,88,12,0.1)] border-[rgba(234,88,12,0.25)]"
        )}
      >
        {/* Tag — podcast / community variant */}
        {card.tag && (
          <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-[rgba(234,88,12,0.15)] text-[#F97316] text-[11px] font-bold tracking-[1px] uppercase">
            {card.tagIcon && <card.tagIcon size={12} aria-hidden="true" />}
            {card.tag}
          </div>
        )}

        {/* Stars */}
        <div
          className="text-[#FFB800] tracking-[3px] text-base mb-4"
          role="img"
          aria-label={`${card.stars} out of 5 stars`}
        >
          {"★".repeat(card.stars)}
        </div>

        {/* Quote */}
        <p className="text-[15px] text-white/80 leading-relaxed mb-5">
          "{card.text}"
        </p>

        {/* Author */}
        <footer>
          <p className="text-[13px] font-semibold text-white">{card.author}</p>
          <p className="text-[12px] text-white/40 mt-0.5">{card.role}</p>
        </footer>
      </article>
    </RevealWrapper>
  );
};

// ─── Social Proof Section ──────────────────────────────────────────────────

/**
 * SocialProof — "Community Trust Gallery"
 *
 * Dark-background section with testimonials, podcast features,
 * and community proof. Featured card spans two columns on desktop.
 */
const SocialProof: FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Customer reviews and social proof"
      className="bg-[#1A1A1A] py-24 px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper>
          <SectionHeader
            tag="Community Trust"
            title={
              <>
                People Love<br />RAC Gadgets.
              </>
            }
            subtitle="From podcast features to Sunday thank-you posts — here's what our community says."
            dark
          />
        </RevealWrapper>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROOF_CARDS.map((card, i) => (
            <ProofCardComponent key={i} card={card} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
