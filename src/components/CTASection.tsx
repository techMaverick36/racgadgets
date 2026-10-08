import type { FC } from "react";
import { waLink } from "../constants";
import RevealWrapper from "./RevealWrapper";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * CTASection — "Direct-to-WhatsApp Conversion"
 *
 * Dark card with an orange rule. The primary conversion moment
 * for visitors who've read through the page but haven't clicked yet.
 * Intentionally minimal — one message, one action.
 */
const CTASection: FC = () => {
  return (
    <section
      aria-label="Get started"
      className="relative py-24 px-5 sm:px-10 overflow-hidden text-center"
    >

      <RevealWrapper direction="scale" className="relative z-10 max-w-[760px] mx-auto">
        <div className="relative rounded-[28px] overflow-hidden bg-[#0A0A0A] px-6 sm:px-16 py-14 sm:py-[70px]">
          <div className="border-t-2 border-[#EA580C] w-12 mx-auto mb-6" aria-hidden="true" />
          {/* Content */}
          <div className="relative z-10">
            <h2
              className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-4"
              style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}
            >
              One message.<br />Expert help.
            </h2>
            <p className="text-[16px] text-white/70 mb-9 max-w-[440px] mx-auto leading-relaxed">
              Buy a phone, book a repair, or just ask a question. We're live on WhatsApp every day.
            </p>
            <Button
              href={waLink("Hi! I'm ready to get started.")}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="lg"
              icon={<WhatsAppIcon size={20} />}
            >
              Message Us on WhatsApp
            </Button>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default CTASection;
