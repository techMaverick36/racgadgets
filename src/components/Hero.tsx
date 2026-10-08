import { useState, useEffect, type FC, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { useGreeting } from "./useGreeting";
import { HERO_TRUST_BADGES, waLink } from "../constants";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

const HERO_IMAGES = ["workspace", "headphones", "camera", "vr", "stationery", "cases"];

const heroSrcSet = (name: string) =>
	`/images/hero/${name}-1280.webp 1280w, /images/hero/${name}-1920.webp 1920w`;

/** Staggered entrance delay for the CSS `hero-in` animation. */
const enter = (delayMs: number): CSSProperties => ({ animationDelay: `${delayMs}ms` });

/**
 * Hero — "The Daily Pulse"
 *
 * Dynamic greeting + bold brand headline + dual CTA
 * over a background image slideshow.
 */
const Hero: FC = () => {
	const greeting = useGreeting();
	const [currentImg, setCurrentImg] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section
			id="home"
			aria-label="Introduction"
			className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-6 pt-[120px] pb-20 text-center bg-black"
		>
			{/* Background slideshow — only the current and next slides get a src, so
          the browser never downloads all six up front. */}
			{HERO_IMAGES.map((name, idx) => {
				const nextImg = (currentImg + 1) % HERO_IMAGES.length;
				const shouldLoad = idx === currentImg || idx === nextImg;
				return (
					<img
						key={name}
						src={shouldLoad ? `/images/hero/${name}-1280.webp` : undefined}
						srcSet={shouldLoad ? heroSrcSet(name) : undefined}
						sizes="100vw"
						alt=""
						aria-hidden="true"
						fetchPriority={idx === 0 ? "high" : "low"}
						decoding="async"
						className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
						style={{ opacity: currentImg === idx ? 0.4 : 0 }}
					/>
				);
			})}

			{/* Gradient Overlay */}
			<div
				className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"
				aria-hidden="true"
			/>

			<div className="relative z-10 flex flex-col items-center">
				{/* Live pill */}
				<div className="hero-in inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-7">
					<span
						className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"
						style={{ animation: "live-dot 2s ease-in-out infinite" }}
					/>
					<span className="text-[13px] font-semibold text-white">
						Open daily on WhatsApp
					</span>
				</div>

				{/* Greeting */}
				<p className="hero-in text-base font-medium text-white/80 mb-4" style={enter(100)}>
					{greeting ? `${greeting}. Welcome to RAC Gadgets` : "Welcome to RAC Gadgets"}
				</p>

				{/* Headline */}
				<h1
					className="hero-in font-display font-extrabold leading-[1.05] tracking-[-2px] text-white max-w-[880px] text-[clamp(34px,10.5vw,56px)] sm:text-[clamp(44px,7.5vw,92px)]"
					style={enter(200)}
				>
					RAC Gadgets.<br />
					<span className="text-[#EA580C]">Simplifying Tech.</span>
				</h1>

				{/* Sub-headline */}
				<p
					className="hero-in mt-6 text-[17px] sm:text-[18px] text-white/75 max-w-[540px] leading-relaxed"
					style={enter(300)}
				>
					Phone repairs, screen protection, chargers, power banks, phones and laptops,
					brought to you in Kampala. No queues, no stress. Just simple, same-day tech help.
				</p>

				{/* CTAs */}
				<div
					className="hero-in flex flex-wrap items-center justify-center gap-3 mt-10"
					style={enter(420)}
				>
					<Button
						href={waLink("Hi! I'd like to consult an expert.")}
						target="_blank"
						rel="noreferrer"
						variant="primary"
						size="lg"
						icon={<WhatsAppIcon size={20} />}
					>
						Talk to an Expert
					</Button>
					<Button
						href="#content"
						variant="inverse"
						size="lg"
						iconPosition="right"
						icon={<ChevronDown size={18} />}
					>
						See Our Work
					</Button>
				</div>

				{/* Trust badges */}
				<ul
					className="hero-in flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 list-none p-0"
					style={enter(550)}
				>
					{HERO_TRUST_BADGES.map(({ icon: Icon, label }) => (
						<li key={label} className="flex items-center gap-2 text-[13px] text-white/70">
							<Icon size={16} className="text-[#EA580C]" aria-hidden="true" />
							{label}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Hero;
