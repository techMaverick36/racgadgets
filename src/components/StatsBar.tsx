import type { FC } from "react";
import { Settings } from "lucide-react";
import { STATS } from "../constants";
import RevealWrapper from "./RevealWrapper";

/**
 * StatsBar — dark band with key trust numbers.
 * Sits between Hero and the Bento Grid to anchor credibility early.
 */
const StatsBar: FC = () => {
  return (
    <section
      aria-label="Key statistics"
      className="bg-[#0A0A0A] py-16 px-5 sm:px-10 border-y border-white/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
        {STATS.map(({ number, label }, i) => (
          <RevealWrapper
            key={label}
            direction="up"
            delay={i * 80}
            className="text-center"
          >
            <div className="flex flex-col items-center">
              <div
                className="font-display font-extrabold leading-none text-white mb-3"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                {number}
              </div>
              <div className="flex items-center gap-2">
                <Settings size={12} className="text-[#EA580C]" aria-hidden="true" />
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/60">
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
