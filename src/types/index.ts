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

// --- Education ---

export interface EducationItem {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
}

export interface PodcastItem {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  href: string;
}

/** A testimonial graphic as posted on social media. */
export type TestimonialPost =
  | {
      id: string;
      type: "review";
      image: string;
      quotes: { text: string; product: string }[];
    }
  | {
      id: string;
      type: "thank-you";
      image: string;
      /** Customers pictured in the graphic; empty for team posts. */
      names: string[];
    };

// --- WhatsApp ---

export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
}
