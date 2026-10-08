import type { FC } from "react";
import { useState, useEffect } from "react";
import { waLink } from "../constants";
import WhatsAppIcon from "./WhatsAppIcon";
import { cn } from "./cn";

/**
 * FloatingWhatsApp — persistent conversion anchor.
 *
 * Fades in after 1.5s so it doesn't compete with the hero on load.
 * Collapses to icon-only on small screens.
 */
const FloatingWhatsApp: FC = () => {
  const [mounted, setMounted] = useState(false);

  // Delay mount so animation plays after page load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[200]",
        "inline-flex items-center gap-2.5 rounded-full no-underline",
        "bg-[#25D366] hover:bg-[#1EBE5A] text-white text-[15px] font-semibold",
        "p-3.5 sm:px-5 sm:py-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.18)]",
        "transition-[opacity,transform,background-color] duration-300",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <WhatsAppIcon size={22} />
      <span className="hidden sm:inline">Chat Now</span>
    </a>
  );
};

export default FloatingWhatsApp;
