import type { FC } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { EducationItem, PodcastItem } from "../types";
import { EDUCATION_ITEMS, PODCAST_ITEMS, SOCIAL_LINKS } from "../constants";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";


// ─── Education Card ────────────────────────────────────────────────────────

interface EducationCardProps {
  item: EducationItem;
  delay: number;
}

const EducationCard: FC<EducationCardProps> = ({ item, delay }) => {
  return (
    <RevealWrapper delay={delay}>
      <article className="group h-full bg-white rounded-[20px] border border-black/[0.08] overflow-hidden transition-colors duration-200 hover:border-black/20">
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt=""
            width={640}
            height={416}
            loading="lazy"
            decoding="async"
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
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#C2410C] hover:gap-3 transition-all"
          >
            Ask us about this <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>
    </RevealWrapper>
  );
};

// ─── Reel Card ─────────────────────────────────────────────────────────────

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
          <img
            src={item.image}
            alt=""
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-1.5 mb-1">
            <PlayCircle size={12} className="text-[#EA580C]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Reel</span>
          </div>
          <h3 className="font-bold text-zinc-900 group-hover:text-[#C2410C] transition-colors">{item.title}</h3>
          <p className="text-xs text-zinc-500 mt-0.5">{item.author}</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#EA580C] group-hover:border-[#EA580C] group-hover:text-white transition-all">
          <ArrowRight size={18} aria-hidden="true" />
        </div>
      </a>
    </RevealWrapper>
  );
};

// ─── Main Blog/Education Section ───────────────────────────────────────────

const Blog: FC = () => {
  return (
    <section id="education" aria-label="Tips and guides" className="py-24 px-5 sm:px-10 bg-white">
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
                  From Our<br />Reels.
                </h2>
                <p className="text-[#6B6B6B] text-sm mb-10 leading-relaxed">
                  Short videos on why we do what we do, straight from our Instagram.
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
              <div className="mt-10 p-7 bg-[#EA580C] rounded-[20px] text-white">
                <div>
                  <h3 className="font-bold text-lg mb-2">Want More Tips?</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-5">
                    Follow us on Instagram for daily bite-sized tech education.
                  </p>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#C2410C] rounded-[8px] text-[13px] font-semibold hover:bg-zinc-100 transition-colors"
                  >
                    Follow @rac_gadgets
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
