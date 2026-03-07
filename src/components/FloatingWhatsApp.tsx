import type { FC } from "react";
import { useState, useEffect } from "react";
import { waLink } from "../constants";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * FloatingWhatsApp — persistent conversion anchor.
 *
 * Appears after 1.5s with a pop animation.
 * Collapses to icon-only on small screens (< 480px).
 * Pulses gently to draw the eye without being intrusive.
 */
const FloatingWhatsApp: FC = () => {
  const [mounted, setMounted] = useState(false);

  // Delay mount so animation plays after page load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      role="complementary"
      aria-label="WhatsApp quick contact"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group inline-flex items-center gap-2.5 no-underline"
        style={{
          background: "#25D366",
          color: "white",
          borderRadius: 100,
          padding: "14px 22px",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(37,211,102,0.40)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          display: "inline-flex",
          alignItems: "center",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.06)";
          el.style.boxShadow = "0 12px 40px rgba(37,211,102,0.50)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 8px 32px rgba(37,211,102,0.40)";
        }}
      >
        <WhatsAppIcon size={20} />
        <span className="hidden sm:inline">Chat Now</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
