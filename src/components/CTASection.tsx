import type { FC } from "react";
import { waLink } from "../constants";
import RevealWrapper from "./RevealWrapper";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * CTASection — "Direct-to-WhatsApp Conversion"
 *
 * Dark card with orange radial glow. The primary conversion moment
 * for visitors who've read through the page but haven't clicked yet.
 * Intentionally minimal — one message, one action.
 */
const CTASection: FC = () => {
  return (
    <section
      aria-label="Get started"
      className="relative py-24 px-10 overflow-hidden text-center"
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #FFE8D8 0%, transparent 70%)",
        }}
      />

      <RevealWrapper direction="scale" className="relative z-10 max-w-[760px] mx-auto">
        <div
          className="relative rounded-[32px] overflow-hidden bg-[#0A0A0A] px-16 py-[70px]"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.15)" }}
        >
          {/* Inner card radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(234,88,12,0.2) 0%, transparent 60%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-[13px] font-bold tracking-[2px] uppercase text-[#EA580C] mb-5">
              Ready to get started?
            </p>
            <h2
              className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-4"
              style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}
            >
              One message.<br />Expert help.
            </h2>
            <p className="text-[16px] text-white/55 mb-9 max-w-[440px] mx-auto leading-relaxed">
              Buy a phone, book a repair, or just ask a question. We're live on WhatsApp every day.
            </p>
            <a
              href={waLink("Hi! I'm ready to get started.")}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon size={20} />}
                iconPosition="left"
              >
                Talk to an Expert Now
              </Button>
            </a>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default CTASection;
