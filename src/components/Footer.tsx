import type { FC } from "react";
import { Settings } from "lucide-react";
import { waLink } from "../constants";

interface FooterLinkGroup {
  heading: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
}

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Services",
    links: [
      { label: "Device Repairs", href: waLink("Hi! I need a device repair."), external: true },
      { label: "Data Transfer", href: waLink("Hi! I need help with data transfer."), external: true },
      { label: "Tech Consultation", href: waLink("Hi! I'd like a free tech consultation."), external: true },
      { label: "Phone Sales", href: waLink("Hi! I want to buy a phone."), external: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "WhatsApp", href: waLink(), external: true },
      { label: "TikTok", href: "#", external: true },
      { label: "Instagram", href: "#", external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Reviews", href: "#reviews" },
      { label: "Blog", href: "#" },
    ],
  },
];

/**
 * Footer — brand anchor + sitemap links + legal line.
 * Dark background to close the page on a confident note.
 */
const Footer: FC = () => {
  return (
    <footer
      id="contact"
      aria-label="Site footer"
      className="bg-[#0A0A0A] text-white px-10 pt-16 pb-8"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="flex flex-wrap justify-between gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand */}
          <div className="max-w-[300px]">
            <a href="#home" className="group flex items-center gap-1.5 font-display font-extrabold text-2xl no-underline text-white mb-3">
              <span className="relative">
                R.A.C.
              </span>
              <Settings 
                size={20} 
                className="text-[#EA580C] transition-transform duration-1000 group-hover:rotate-180" 
                strokeWidth={2.5}
              />
            </a>
            <p className="text-[14px] text-white/40 leading-relaxed">
              Your Trusted Tech Partner. Premium gadgets, expert repairs, and human care — one WhatsApp message away.
            </p>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white/30 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="text-[14px] text-white/55 no-underline transition-colors duration-200 hover:text-[#EA580C]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-7">
          <p className="text-[13px] text-white/25">
            © {new Date().getFullYear()} RAC Gadgets. All rights reserved.
          </p>
          <p className="font-display font-semibold text-[13px] text-[#EA580C]">
            "Expert Tech. Human Touch."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
