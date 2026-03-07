import type { FC } from "react";
import { Settings } from "lucide-react";
import { useScrolled } from "./useScrolled";
import { NAV_LINKS, waLink } from "../constants";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { cn } from "./cn";

/**
 * Fixed navigation bar.
 * - Frosted-glass backdrop on scroll
 * - Hides nav links on mobile (hamburger not in scope — extend as needed)
 * - WhatsApp CTA always visible
 */
const Navbar: FC = () => {
  const scrolled = useScrolled(60);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-10 py-[18px] transition-all duration-300",
        "backdrop-blur-xl bg-white/85",
        "border-b border-black/[0.06]",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-3.5"
      )}
    >
      {/* Logo */}
      <a
        href="#home"
        className="group flex items-center gap-1.5 font-display font-extrabold text-[22px] tracking-tight text-[#0A0A0A] no-underline"
        aria-label="RAC Gadgets — Home"
      >
        <span className="relative">
          R.A.C.
        </span>
        <Settings 
          size={18} 
          className="text-[#D9480F] w-full transition-transform duration-1000 group-hover:rotate-180" 
          strokeWidth={2.5}
        />
      </a>

      {/* Desktop Links */}
      <nav aria-label="Primary navigation">
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={cn(
                  "text-[14px] font-medium text-[#6B6B6B] no-underline",
                  "transition-colors duration-200 hover:text-[#EA580C]"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <a href={waLink()} target="_blank" rel="noreferrer">
        <Button
          variant="primary"
          size="sm"
          icon={<WhatsAppIcon size={15} />}
          iconPosition="left"
        >
          Chat with Us
        </Button>
      </a>
    </header>
  );
};

export default Navbar;
