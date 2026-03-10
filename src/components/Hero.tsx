import { useState, useEffect, type FC } from "react";
import { ChevronDown } from "lucide-react";
import { useGreeting } from "./useGreeting";
import { HERO_TRUST_BADGES, waLink } from "../constants";
import { useScrollReveal } from "./useScrollReveal";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

const HERO_IMAGES = [
	"/hero-workspace.jpg",
	"/hero-headphones.jpg",
	"/hero-camera.jpg",
	"/hero-vr.jpg",
	"/hero-stationery.jpg",
	"/hero-cases.jpg",
];

/**
 * Hero — "The Daily Pulse"
 *
 * Dynamic greeting + bold brand headline + dual CTA.
 * Now features an engaging background image slideshow.
 */
const Hero: FC = () => {
	const greeting = useGreeting();
	const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
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
			aria-label="Hero"
			className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-[120px] pb-20 text-center bg-black"
		>
			{/* Background Slideshow — only attach backgroundImage for loaded slides to avoid
          the browser fetching all 6 images upfront. The next image is included so it
          preloads during the current slide's 5 s window. */}
			{HERO_IMAGES.map((img, idx) => {
				const nextImg = (currentImg + 1) % HERO_IMAGES.length;
				const shouldLoad = idx === currentImg || idx === nextImg;
				return (
					<div
						key={img}
						className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
						style={{
							opacity: currentImg === idx ? 0.4 : 0,
							backgroundImage: shouldLoad ? `url(${img})` : undefined,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						aria-hidden="true"
					/>
				);
			})}

			{/* Gradient Overlay */}
			<div
				className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"
				aria-hidden="true"
			/>

			<div ref={ref} className="relative z-10 flex flex-col items-center">
				{/* Live pill */}
				<div
					className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-7"
					style={{
						opacity: visible ? 1 : 0,
						transform: visible ? "none" : "translateY(20px)",
						transition: "opacity 0.6s ease, transform 0.6s ease",
					}}
				>
					<span
						className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"
						style={{ animation: "pulse 2s infinite" }}
					/>
					<span className="text-[13px] font-semibold text-white">
						Available &amp; Active Daily
					</span>
				</div>

				{/* Greeting */}
				<p
					className="text-base font-medium text-white/80 mb-4"
					style={{
						opacity: visible ? 1 : 0,
						transform: visible ? "none" : "translateY(24px)",
						transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
					}}
				>
					{greeting} — Welcome to RAC Gadgets
				</p>

				{/* Headline */}
				<h1
					className="font-display font-extrabold leading-[1.05] tracking-[-2px] text-white max-w-[880px]"
					style={{
						fontSize: "clamp(44px, 7.5vw, 92px)",
						opacity: visible ? 1 : 0,
						transform: visible ? "none" : "translateY(30px)",
						transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
					}}
				>
					RAC Gadgets —<br />
					<span className="text-[#EA580C]">Beyond the Box.</span>
				</h1>

				{/* Sub-headline */}
				<p
					className="mt-6 text-[18px] text-white/70 max-w-[520px] leading-relaxed"
					style={{
						opacity: visible ? 1 : 0,
						transform: visible ? "none" : "translateY(24px)",
						transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
					}}
				>
					From phone repairs and screen protection to chargers, power banks, phones, and laptops, RAC Gadgets brings expert service directly to you. No queues, no stress just simple, same-day tech solutions.{" "}
				</p>

				{/* CTAs */}
				<div
					className="flex flex-wrap items-center justify-center gap-3.5 mt-10"
					style={{
						opacity: visible ? 1 : 0,
						transform: visible ? "none" : "translateY(20px)",
						transition: "opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s",
					}}
				>
					<a
						href={waLink("Hi! I'd like to consult an expert.")}
						target="_blank"
						rel="noreferrer"
					>
						<Button
							variant="primary"
							size="lg"
							icon={<WhatsAppIcon size={20} />}
							iconPosition="left"
						>
							Talk to an Expert
						</Button>
					</a>
					<a href="#content">
						<Button
							variant="secondary"
							size="lg"
							iconPosition="right"
							icon={<ChevronDown size={18} />}
							className="bg-white/10 hover:bg-white/20 text-white border-white/20"
						>
							Explore Our World
						</Button>
					</a>
				</div>

				{/* Trust badges */}
				<div
					className="flex flex-wrap items-center justify-center gap-8 mt-16"
					style={{
						opacity: visible ? 1 : 0,
						transition: "opacity 0.7s ease 0.55s",
					}}
				>
					{HERO_TRUST_BADGES.map(({ icon: Icon, label }) => (
						<div
							key={label}
							className="flex items-center gap-2 text-[13px] text-white/60"
						>
							<Icon size={16} className="text-[#EA580C]" />
							{label}
						</div>
					))}
				</div>
			</div>

			{/* Pulse keyframe — injected inline for portability */}
			<style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
		</section>
	);
};

export default Hero;
