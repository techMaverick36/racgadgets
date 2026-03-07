import { 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  Headphones, 
  PlayCircle, 
  Save, 
  Wrench, 
  FileCheck, 
  ShieldCheck, 
  Target, 
  Radio 
} from "lucide-react";
import type {
  NavLink,
  BentoItem,
  ServiceCard,
  StatItem,
  ProofCard,
  WhatsAppConfig,
  HeroTrustBadge,
} from "../types";

// ─── WhatsApp ──────────────────────────────────────────────────────────────

export const WA_CONFIG: WhatsAppConfig = {
  number: "256700000000", // ← replace with real number
  defaultMessage: "Hi! I'd like a tech consultation.",
};

export const waLink = (msg?: string): string => {
  const text = encodeURIComponent(msg ?? WA_CONFIG.defaultMessage);
  return `https://wa.me/${WA_CONFIG.number}?text=${text}`;
};

// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Content", href: "#content" },
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
    title: "iPhone 16 Pro Max — First Look",
    icon: Smartphone,
    image: "/hero-workspace.jpg",
    playable: true,
    whatsappMsg: "Hi! I saw your iPhone unboxing and I'm interested.",
  },
  {
    id: 2,
    span: "normal",
    bg: "#EA580C",
    textColor: "white",
    label: "Quick Tip",
    title: "Speed Up Your Android in 60 Seconds",
    icon: Zap,
    image: "/hero-cases.jpg",
    whatsappMsg: "Hi! I saw your Android tips content.",
  },
  {
    id: 3,
    span: "normal",
    bg: "#F4F4F4",
    textColor: "dark",
    label: "Review",
    title: "Best Earbuds Under UGX 150,000?",
    icon: Headphones,
    image: "/hero-headphones.jpg",
    whatsappMsg: "Hi! I'm interested in earbuds recommendations.",
  },
  {
    id: 4,
    span: "wide",
    bg: "#0A0A0A",
    textColor: "white",
    label: "Motion Reel",
    title: "RAC Gadgets — 2025 Brand Reel",
    icon: PlayCircle,
    image: "/hero-vr.jpg",
    playable: true,
    whatsappMsg: "Hi! I just watched the RAC brand reel and I'm interested.",
  },
  {
    id: 5,
    span: "normal",
    bg: "#FFF0E8",
    textColor: "dark",
    label: "Tutorial",
    title: "Backup Your Phone Before It's Too Late",
    icon: Save,
    image: "/hero-stationery.jpg",
    whatsappMsg: "Hi! I need help backing up my phone.",
  },
];

// ─── Services ──────────────────────────────────────────────────────────────

export const SERVICES: ServiceCard[] = [
  {
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Device repair
    title: "Device Repairs",
    badge: "Express",
    badgeColor: "orange",
    description:
      "Screen replacements, battery swaps, water damage recovery. Fast, professional, and warranty-backed. Your device is in expert hands.",
    whatsappMsg: "Hi! I need a device repair.",
    features: ["Screen Replacement", "Battery Swap", "Water Damage Recovery", "Warranty Included"],
  },
  {
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Data transfer/phone migration
    title: "Data Transfer",
    badge: "Safe",
    badgeColor: "green",
    description:
      "Switching phones? We safely migrate your contacts, photos, apps, and files. Zero data loss guaranteed.",
    whatsappMsg: "Hi! I need help with data transfer.",
    features: ["Contacts & Chats", "Photos & Videos", "App Data", "Zero Data Loss"],
  },
  {
    icon: Target,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop", // Tech consultation/business talk
    title: "Tech Consultation",
    badge: "Free",
    badgeColor: "blue",
    description:
      "Not sure which phone to buy? Our experts guide you based on your budget and lifestyle — honest advice, zero upselling.",
    whatsappMsg: "Hi! I'd like a free tech consultation.",
    features: ["Budget Planning", "Brand Comparison", "Honest Advice", "No Upselling"],
  },
];

// ─── Social Proof ──────────────────────────────────────────────────────────

export const PROOF_CARDS: ProofCard[] = [
  {
    variant: "podcast",
    featured: true,
    tag: "Podcast Feature",
    tagIcon: Radio,
    stars: 5,
    text: "RAC Gadgets was featured on the Tech in East Africa podcast. The host called them the most trusted gadget source in the region — and the community completely agrees.",
    author: "Tech in East Africa Podcast",
    role: "Episode 47 · 2025",
  },
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
