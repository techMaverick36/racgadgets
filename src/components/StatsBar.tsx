import type { FC } from "react";
import { Settings } from "lucide-react";
import { STATS } from "../constants";
import RevealWrapper from "./RevealWrapper";

/**
 * StatsBar — elegant dark band with key trust numbers and orange accents.
 * Sits between Hero and the Bento Grid to anchor credibility early.
 */
const StatsBar: FC = () => {
  return (
    <section
      aria-label="Key statistics"
      className="bg-[#0A0A0A] py-16 px-10 relative overflow-hidden border-y border-white/[0.05]"
    >
      {/* Subtle backdrop text for texture */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none font-display font-black text-[180px] text-white whitespace-nowrap"
        aria-hidden="true"
      >
        TRUSTED TECH PARTNER
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-wrap justify-around items-center gap-10 md:gap-4">
        {STATS.map(({ number, label }, i) => (
          <RevealWrapper
            key={label}
            direction="up"
            delay={i * 80}
            className="text-center group"
          >
            <div className="flex flex-col items-center">
              <div
                className="font-display font-extrabold leading-none text-white mb-3 transition-transform duration-500 group-hover:scale-110"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                {number}<span className="text-[#EA580C]">.</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings size={12} className="text-[#EA580C]/60 group-hover:rotate-90 transition-transform duration-700" />
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">
                  {label}
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
