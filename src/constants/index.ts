import {
  CheckCircle2,
  Smartphone,
  Zap,

  PlayCircle,
  Save,
  Wrench,
  Package,
  Laptop,
  ShieldCheck,

} from "lucide-react";
import type {
  NavLink,
  BentoItem,
  ServiceCard,
  StatItem,
  ProofCard,
  EducationItem,
  PodcastItem,
  WhatsAppConfig,
  HeroTrustBadge,
  Testimonial,
} from "../types";

// ─── WhatsApp ──────────────────────────────────────────────────────────────

export const WA_CONFIG: WhatsAppConfig = {
  number: "256777589791", // ← replace with real number
  defaultMessage: "Hi! I'd like a tech consultation.",
};

export const waLink = (msg?: string): string => {
  const text = encodeURIComponent(msg ?? WA_CONFIG.defaultMessage);
  return `https://wa.me/${WA_CONFIG.number}?text=${text}`;
};

// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Videos", href: "#content" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ──────────────────────────────────────────────────────────────────

export const HERO_TRUST_BADGES: HeroTrustBadge[] = [
  { icon: CheckCircle2, label: "500+ Devices Repaired" },
  { icon: ShieldCheck, label: "Trusted Community" },
  { icon: Zap, label: "Same-Day Service" },
];

// ─── Stats ─────────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { number: "500+", label: "Devices Repaired" },
  { number: "1,200+", label: "Happy Clients" },
  { number: "3 yrs", label: "In Business" },
  { number: "100%", label: "Genuine Products" },
];

// ─── Bento Grid ────────────────────────────────────────────────────────────

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 1,
    span: "tall",
    bg: "#1A1A1A",
    textColor: "white",
    label: "Unboxing",
    title: "iPhone 17 Pro Max — Cosmic Orange Unboxing",
    icon: Smartphone,
    image: "/unboxing.jpeg",
    playable: true,
    href: "https://www.instagram.com/rac_gadgets?igsh=MXZpZDZlOW1oZWRrcg==",
    whatsappMsg: "Hi! I saw your iPhone 17 Pro Max unboxing and I'm interested.",
  },
  {
    id: 2,
    span: "normal",
    bg: "#EA580C",
    textColor: "white",
    label: "Repairs",
    title: "Screen Replacement — Before & After",
    icon: Wrench,
    image: "/screenreplacement.jpeg",
    playable: true,
    href: "https://www.tiktok.com/@racgadgets?_r=1&_t=ZS-94U5dnfxLn8",
    whatsappMsg: "Hi! I saw your repair video and need my screen fixed.",
  },
  {
    id: 3,
    span: "normal",
    bg: "#F4F4F4",
    textColor: "dark",
    label: "Data Transfer",
    title: "Moving to a New Phone? We Make it Easy.",
    icon: Save,
    image: "/datatransfer.jpeg",
    whatsappMsg: "Hi! I need help transferring data to my new phone.",
  },
  {
    id: 4,
    span: "wide",
    bg: "#0A0A0A",
    textColor: "white",
    label: "Tutorial",
    title: "How to Set Up Your New Device Perfectly",
    icon: PlayCircle,
    image: "/device_set_up.jpeg",
    playable: true,
    href: "https://www.tiktok.com/@racgadgets?_r=1&_t=ZS-94U5dnfxLn8",
    whatsappMsg: "Hi! I watched your setup tutorial and have some questions.",
  },
  {
    id: 5,
    span: "normal",
    bg: "#FFF0E8",
    textColor: "dark",
    label: "Unboxing",
    title: "New Gadgets First Look",
    icon: Package,
    image: "/iphone17.jpg",
    playable: true,
    href: "https://www.instagram.com/rac_gadgets?igsh=MXZpZDZlOW1oZWRrcg==",
    whatsappMsg: "Hi! I'm interested in the latest gadgets I saw in your unboxing.",
  },
];

// ─── Services ──────────────────────────────────────────────────────────────

export const SERVICES: ServiceCard[] = [
  {
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?q=80&w=800&auto=format&fit=crop",
    title: "Repairs & Protection",
    badge: "Doorstep",
    badgeColor: "orange",
    description:
      "Phone issues and can't leave the office? We come to you. Screen replacements, battery swaps, screen guard fitting, cover application — fast and warranty-backed.",
    whatsappMsg: "Hi! I need a repair or screen guard fitting. Can you come to me?",
    features: ["Screen Replacement", "Screen Guard Fitting", "Cover Application", "Battery Swap", "Doorstep Service"],
  },
  {
    icon: Package,
    image: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=800&auto=format&fit=crop",
    title: "Accessories",
    badge: "In Stock",
    badgeColor: "green",
    description:
      "Everything your device needs — chargers, power banks, covers, screen guards and more. Quality accessories delivered right to you.",
    whatsappMsg: "Hi! I'd like to buy some accessories (charger/power bank/cover).",
    features: ["Chargers", "Power Banks", "Phone Covers", "Screen Guards"],
  },
  {
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "Phones & Laptops",
    badge: "Genuine",
    badgeColor: "blue",
    description:
      "Shop genuine, sealed smartphones and laptops at great prices. Not sure what to get? We guide you honestly — no upselling, just the right device for you.",
    whatsappMsg: "Hi! I'd like to buy a phone or laptop.",
    features: ["Smartphones", "Laptops", "100% Genuine & Sealed", "Honest Advice"],
  },
];

// ─── Education & Podcasts ──────────────────────────────────────────

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 1,
    title: "Battery Health Guide",
    category: "Quick Tip",
    description: "Learn how to keep your battery health at 100% with these pro tips. From charging habits to software settings.",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800&auto=format&fit=crop",
    href: "/education/battery-health",
  },
  {
    id: 2,
    title: "Data Transfer Service",
    category: "Tutorial",
    description: "Everything you need to know about moving your data safely to your new device. iOS or Android, we've got you.",
    image: "/datatransfer.jpeg",
    href: "/education/data-transfer",
  },
  {
    id: 3,
    title: "Screen Protection 101",
    category: "Maintenance",
    description: "Why screen guards matter and how to choose the right one for your phone's display technology.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop",
    href: "/education/screen-protection",
  },
];

export const PODCAST_ITEMS: PodcastItem[] = [
  {
    id: 1,
    title: "The Heart of RAC Gadgets",
    author: "Instagram Reel",
    description: "A look into our mission and the passion behind RAC Gadgets. Join the conversation on Instagram.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    href: "https://www.instagram.com/reel/DUFotL9jf8T/",
  },
  {
    id: 2,
    title: "Customer First Approach",
    author: "Instagram Reel",
    description: "Why we do what we do. Our commitment to quality service and authentic tech solutions.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    href: "https://www.instagram.com/reel/DLwdIgstfdx/",
  },
];

// ─── Social Proof ──────────────────────────────────────────────────────────

export const PROOF_CARDS: ProofCard[] = [
  {
    variant: "testimonial",
    stars: 5,
    text: "Repaired my Samsung screen in under an hour. Back to perfect condition. Absolutely professional service.",
    author: "Amaka O.",
    role: "Kampala",
  },
  {
    variant: "testimonial",
    stars: 5,
    text: "Got my data transferred safely. I was so scared I'd lose everything. RAC Gadgets saved me!",
    author: "David E.",
    role: "Entebbe",
  },
  {
    variant: "community",
    stars: 5,
    text: "Ordered on WhatsApp, delivered same day. The iPhone was sealed and genuine. 100% trustworthy.",
    author: "Ngozi M.",
    role: "Jinja",
  },
];

// ─── Client Testimonials & Thank You ──────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    type: "review",
    text: "Hey Albright, the headsets are really good and original. I truly appreciate your services.",
    author: "Client",
    role: "Headsets",
    image: "/WhatsApp Image 2026-03-08 at 11.17.15 (1).jpeg",
  },
  {
    id: 2,
    type: "review",
    text: "Enjoying the phone",
    author: "Client",
    role: "Phone",
    image: "/WhatsApp Image 2026-03-08 at 11.17.15 (1).jpeg",
  },
  {
    id: 3,
    type: "review",
    text: "Hi Albright, Thanks for the good work!",
    author: "Client",
    role: "Phone Repair",
    image: "/WhatsApp Image 2026-03-08 at 11.17.15 (1).jpeg",
  },
  {
    id: 4,
    type: "review",
    text: "The machine is perfect",
    author: "Client",
    role: "Phone",
    image: "/WhatsApp Image 2026-03-08 at 11.17.15.jpeg",
  },
  {
    id: 5,
    type: "review",
    text: "Thank you as well for all the help selling. The phone now looks cute thanks to your accessories.",
    author: "Client",
    role: "Phone Accessories",
    image: "/WhatsApp Image 2026-03-08 at 11.17.15.jpeg",
  },
  {
    id: 6,
    type: "review",
    text: "It was great doing business with him. He gave me enough time to make a final decision, and also helped me buy other stuff I needed around town. I recommend him to more buyers. Thanks a lot bro.",
    author: "Client",
    role: "Phone",
    image: "/WhatsApp Image 2026-03-08 at 11.17.16 (1).jpeg",
  },
  {
    id: 7,
    type: "review",
    text: "Thanks bro for this phone. Its giving! Milk and honey.",
    author: "Client",
    role: "Phone",
    image: "/WhatsApp Image 2026-03-08 at 11.17.16 (2).jpeg",
  },
  {
    id: 8,
    type: "review",
    text: "My bro. The watch is very good. On point",
    author: "Client",
    role: "Watch",
    image: "/WhatsApp Image 2026-03-08 at 11.17.16 (2).jpeg",
  },
  {
    id: 9,
    type: "review",
    text: "Thanks so much. My phone is now beautiful looking!",
    author: "Client",
    role: "Phone Cover",
    image: "/WhatsApp Image 2026-03-08 at 11.17.16 (2).jpeg",
  },
  {
    id: 10,
    type: "thank-you",
    text: "Thank You",
    author: "Esther",
    role: "Happy Client",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32 (2).jpeg",
  },
  {
    id: 11,
    type: "thank-you",
    text: "Thank You",
    author: "Isaac",
    role: "Happy Client",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32 (2).jpeg",
  },
  {
    id: 12,
    type: "thank-you",
    text: "Thank You",
    author: "Sylvia",
    role: "Happy Client",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32 (3).jpeg",
  },
  {
    id: 13,
    type: "thank-you",
    text: "Thank You",
    author: "Sarah",
    role: "Happy Client",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32 (2).jpeg",
  },
  {
    id: 14,
    type: "thank-you",
    text: "Thank You",
    author: "Team",
    role: "RAC Gadgets Team",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32 (1).jpeg",
  },
  {
    id: 15,
    type: "thank-you",
    text: "Thank You",
    author: "Team",
    role: "RAC Gadgets Team",
    image: "/WhatsApp Image 2026-03-08 at 11.11.32.jpeg",
  },
];
