import { type FC } from "react";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const Testimonials: FC = () => {
	const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

	return (
		<section id="reviews" className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div ref={ref} className="text-center mb-16">
					<h2
						className="text-4xl md:text-5xl font-display font-bold text-black mb-4"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "none" : "translateY(20px)",
							transition: "all 0.6s ease-out",
						}}
					>
						What Our Clients Say
					</h2>
					<p
						className="text-lg text-black/60 max-w-2xl mx-auto"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "none" : "translateY(20px)",
							transition: "all 0.6s ease-out 0.1s",
						}}
					>
						Real feedback from our amazing community. From expert repairs to genuine gadgets, we're here to serve you.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{TESTIMONIALS.map((t, idx) => (
						<div
							key={t.id}
							className="group relative bg-black/5 rounded-3xl overflow-hidden border border-black/5 hover:border-[#EA580C]/30 transition-all duration-500"
							style={{
								opacity: visible ? 1 : 0,
								transform: visible ? "none" : "translateY(30px)",
								transition: `all 0.6s ease-out ${0.2 + idx * 0.05}s`,
							}}
						>
							<div className="flex flex-col h-full">
								{/* Image Section */}
								<div className="relative h-64 overflow-hidden">
									<img
										src={t.image}
										alt={t.author}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
									
									{t.type === "thank-you" && (
										<div className="absolute top-4 right-4 bg-[#EA580C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
											Thank You
										</div>
									)}
								</div>

								{/* Content Section */}
								<div className="p-8 flex-grow flex flex-col justify-between">
									<div>
										<Quote className="text-[#EA580C] mb-4 opacity-40" size={32} />
										<p className="text-black/80 text-lg italic leading-relaxed mb-6">
											"{t.text}"
										</p>
									</div>
									
									<div className="flex items-center gap-4">
										<div className="w-10 h-1 h-0.5 bg-[#EA580C]/30" />
										<div>
											<h4 className="font-bold text-black">{t.author}</h4>
											<p className="text-sm text-black/50">{t.role}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
