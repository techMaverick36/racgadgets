import type { LucideIcon } from "lucide-react";

// --- Navigation ---

export interface NavLink {
  label: string;
  href: string;
}

// --- Hero ---

export interface HeroTrustBadge {
  icon: LucideIcon;
  label: string;
}

// --- Bento Grid ---

export type BentoSpan = "normal" | "tall" | "wide";

export interface BentoItem {
  id: number;
  span: BentoSpan;
  bg: string;
  textColor: "white" | "dark";
  label: string;
  title: string;
  icon: LucideIcon;
  image?: string;
  playable?: boolean;
  whatsappMsg: string;
  /** Direct URL override — when set, the card links here instead of WhatsApp */
  href?: string;
}

// --- Services ---

export type BadgeColor = "orange" | "green" | "blue";

export interface ServiceCard {
  icon: LucideIcon;
  image?: string;
  title: string;
  badge: string;
  badgeColor: BadgeColor;
  description: string;
  whatsappMsg: string;
  features: string[];
}

// --- Stats ---

export interface StatItem {
  number: string;
  label: string;
}

// --- Social Proof ---

export type ProofVariant = "testimonial" | "podcast" | "community";

export interface ProofCard {
  variant: ProofVariant;
  featured?: boolean;
  tag?: string;
  tagIcon?: LucideIcon;
  stars: number;
  text: string;
  author: string;
  role: string;
}

// --- WhatsApp ---

export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
}
