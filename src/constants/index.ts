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
  EducationItem,
  PodcastItem,
  WhatsAppConfig,
  HeroTrustBadge,
  TestimonialPost,
} from "../types";

// ─── WhatsApp ──────────────────────────────────────────────────────────────

export const WA_CONFIG: WhatsAppConfig = {
  number: "256777589791",
  defaultMessage: "Hi! I'd like a tech consultation.",
};

export const waLink = (msg?: string): string => {
  const text = encodeURIComponent(msg ?? WA_CONFIG.defaultMessage);
  return `https://wa.me/${WA_CONFIG.number}?text=${text}`;
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/rac_gadgets",
  tiktok: "https://www.tiktok.com/@racgadgets",
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
    image: "/images/content/unboxing.webp",
    playable: true,
    href: SOCIAL_LINKS.instagram,
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
    image: "/images/content/screen-replacement.webp",
    playable: true,
    href: SOCIAL_LINKS.tiktok,
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
    image: "/images/content/data-transfer.webp",
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
    image: "/images/content/device-setup.webp",
    playable: true,
    href: SOCIAL_LINKS.tiktok,
    whatsappMsg: "Hi! I watched your setup tutorial and have some questions.",
  },
  {
    id: 5,
    span: "normal",
    bg: "#1A1A1A",
    textColor: "white",
    label: "Unboxing",
    title: "New Gadgets First Look",
    icon: Package,
    image: "/images/content/new-gadgets.webp",
    playable: true,
    href: SOCIAL_LINKS.instagram,
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

// ─── Education & Reels ─────────────────────────────────────────────

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 1,
    title: "Battery Health Guide",
    category: "Quick Tip",
    description: "Learn how to keep your battery health at 100% with these pro tips. From charging habits to software settings.",
    image: "/images/content/battery-health.webp",
    href: waLink("Hi! I'd like some tips on keeping my battery healthy."),
  },
  {
    id: 2,
    title: "Data Transfer Service",
    category: "Tutorial",
    description: "Everything you need to know about moving your data safely to your new device. iOS or Android, we've got you.",
    image: "/images/content/data-transfer.webp",
    href: waLink("Hi! I need help transferring data to my new phone."),
  },
  {
    id: 3,
    title: "Screen Protection 101",
    category: "Maintenance",
    description: "Why screen guards matter and how to choose the right one for your phone's display technology.",
    image: "/images/content/screen-protection.webp",
    href: waLink("Hi! Which screen guard is right for my phone?"),
  },
];

export const PODCAST_ITEMS: PodcastItem[] = [
  {
    id: 1,
    title: "The Heart of RAC Gadgets",
    author: "Instagram Reel",
    description: "A look into our mission and the passion behind RAC Gadgets. Join the conversation on Instagram.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=70&w=160&auto=format&fit=crop",
    href: "https://www.instagram.com/reel/DUFotL9jf8T/",
  },
  {
    id: 2,
    title: "Customer First Approach",
    author: "Instagram Reel",
    description: "Why we do what we do. Our commitment to quality service and authentic tech solutions.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=70&w=160&auto=format&fit=crop",
    href: "https://www.instagram.com/reel/DLwdIgstfdx/",
  },
];

// ─── Client Testimonials & Thank You ──────────────────────────────────────────
// One entry per graphic in public/images/testimonials. The quotes repeat the
// text inside each graphic so it is readable by screen readers and search engines.

const T = "/images/testimonials";

export const TESTIMONIALS: TestimonialPost[] = [
  {
    id: "reviews-headsets-repair",
    type: "review",
    image: `${T}/reviews-headsets-repair.webp`,
    quotes: [
      { text: "Hey Albright, the headsets are really good and original. I truly appreciate your services.", product: "Headsets" },
      { text: "Enjoying the phone.", product: "Phone" },
      { text: "Hi Albright, thanks for the good work!", product: "Phone repair" },
    ],
  },
  {
    id: "review-great-business",
    type: "review",
    image: `${T}/review-great-business.webp`,
    quotes: [
      { text: "It was great doing business with him. He gave me enough time to make a final decision, and also helped me buy other stuff I needed around town. I recommend him to more buyers. Thanks a lot bro.", product: "Phone" },
    ],
  },
  {
    id: "reviews-phone-watch-cover",
    type: "review",
    image: `${T}/reviews-phone-watch-cover.webp`,
    quotes: [
      { text: "Thanks bro for this phone. It's giving! Milk and honey.", product: "Phone" },
      { text: "My bro. The watch is very good. On point.", product: "Watch" },
      { text: "Thanks so much. My phone is now beautiful looking!", product: "Phone cover" },
    ],
  },
  {
    id: "reviews-machine-accessories",
    type: "review",
    image: `${T}/reviews-machine-accessories.webp`,
    quotes: [
      { text: "The machine is perfect.", product: "Phone" },
      { text: "Thank you as well for all the help selling. The phone now looks cute thanks to your accessories.", product: "Phone accessories" },
    ],
  },
  {
    id: "reviews-webale-airpods",
    type: "review",
    image: `${T}/reviews-webale-airpods.webp`,
    quotes: [
      { text: "It's perfect! Webale.", product: "Phone" },
      { text: "I love it. Little madam is enjoying it properly. It has a clear picture. Webale guy.", product: "Phone" },
      { text: "The AirPods are really good btw. Will be getting the Samsung ones after I get my new phone.", product: "Headsets" },
    ],
  },
  {
    id: "reviews-8a-headsets",
    type: "review",
    image: `${T}/reviews-8a-headsets.webp`,
    quotes: [
      { text: "I'm enjoying my 8a. Took me so long. I should've been here a long time ago.", product: "Phone" },
      { text: "You're most welcome! Thank you for your quick response.", product: "Phone" },
      { text: "RAC Gadgets abelewo. The headsets are too steady my guy, I am hearing the sounds of tomorrow.", product: "Headsets" },
    ],
  },
  {
    id: "thank-you-esther-isaac",
    type: "thank-you",
    image: `${T}/thank-you-esther-isaac.webp`,
    names: ["Esther", "Isaac"],
  },
  {
    id: "thank-you-sylvia-sarah",
    type: "thank-you",
    image: `${T}/thank-you-sylvia-sarah.webp`,
    names: ["Sylvia", "Sarah"],
  },
  {
    id: "thank-you-team-1",
    type: "thank-you",
    image: `${T}/thank-you-team-1.webp`,
    names: [],
  },
  {
    id: "thank-you-team-2",
    type: "thank-you",
    image: `${T}/thank-you-team-2.webp`,
    names: [],
  },
];
