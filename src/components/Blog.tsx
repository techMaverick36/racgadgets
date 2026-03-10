import type { FC } from "react";
import { ArrowRight, Radio } from "lucide-react";
import type { EducationItem, PodcastItem } from "../types";
import { EDUCATION_ITEMS, PODCAST_ITEMS } from "../constants";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";
import { cn } from "./cn";

// ─── Education Card ────────────────────────────────────────────────────────

interface EducationCardProps {
  item: EducationItem;
  delay: number;
}

const EducationCard: FC<EducationCardProps> = ({ item, delay }) => {
  return (
    <RevealWrapper delay={delay}>
      <div className="group bg-white rounded-[24px] border border-black/[0.08] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1">
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
              {item.category}
            </span>
          </div>
        </div>
        <div className="p-7">
          <h3 className="font-display font-bold text-xl mb-3 text-zinc-900">{item.title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6 line-clamp-2">
            {item.description}
          </p>
          <a
            href={item.href}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#EA580C] hover:gap-3 transition-all"
          >
            Learn More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </RevealWrapper>
  );
};

// ─── Podcast Card ──────────────────────────────────────────────────────────

interface PodcastCardProps {
  item: PodcastItem;
  delay: number;
}

const PodcastCard: FC<PodcastCardProps> = ({ item, delay }) => {
  return (
    <RevealWrapper delay={delay}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 p-5 bg-zinc-50 rounded-[20px] border border-zinc-200/50 transition-all hover:bg-zinc-100 group"
      >
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-1.5 mb-1">
            <Radio size={12} className="text-[#EA580C]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Podcast</span>
          </div>
          <h4 className="font-bold text-zinc-900 group-hover:text-[#EA580C] transition-colors">{item.title}</h4>
          <p className="text-xs text-zinc-500 mt-0.5">{item.author}</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#EA580C] group-hover:border-[#EA580C] group-hover:text-white transition-all">
          <ArrowRight size={18} />
        </div>
      </a>
    </RevealWrapper>
  );
};

// ─── Main Blog/Education Section ───────────────────────────────────────────

const Blog: FC = () => {
  return (
    <section id="education" className="py-24 px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Education Cards */}
          <div className="lg:col-span-8">
            <RevealWrapper>
              <SectionHeader
                tag="Knowledge Base"
                title={<>Educational<br />Tips & Guides.</>}
                subtitle="Deep dives into how your tech works, and how to make it last longer."
              />
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {EDUCATION_ITEMS.map((item, i) => (
                <EducationCard key={item.id} item={item} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Right: Podcast Sidebar */}
          <div className="lg:col-span-4">
            <RevealWrapper>
              <div className="lg:mt-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#EA580C]">
                  Listen Now
                </p>
                <h2 className="font-display font-extrabold text-3xl text-zinc-900 mb-4">
                  Podcast<br />Recommendations.
                </h2>
                <p className="text-[#6B6B6B] text-sm mb-10 leading-relaxed">
                  Stay updated with the latest in tech and entrepreneurship through our favorite podcasts.
                </p>
              </div>
            </RevealWrapper>

            <div className="space-y-4">
              {PODCAST_ITEMS.map((item, i) => (
                <PodcastCard key={item.id} item={item} delay={i * 100 + 300} />
              ))}
            </div>

            {/* CTA for more podcasts or blog */}
            <RevealWrapper delay={600}>
              <div className="mt-10 p-7 bg-[#EA580C] rounded-[24px] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2">Want More Tips?</h4>
                  <p className="text-white/80 text-xs leading-relaxed mb-5">
                    Follow us on Instagram for daily bite-sized tech education.
                  </p>
                  <a
                    href="https://www.instagram.com/rac_gadgets"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#EA580C] rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors"
                  >
                    Follow @rac_gadgets
                  </a>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
