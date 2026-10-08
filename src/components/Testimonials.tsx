import type { FC } from "react";
import { TESTIMONIALS } from "../constants";
import RevealWrapper from "./RevealWrapper";
import SectionHeader from "./SectionHeader";

const reviews = TESTIMONIALS.filter((t) => t.type === "review");
const thankYous = TESTIMONIALS.filter((t) => t.type === "thank-you");

const listNames = (names: string[]) =>
	names.length ? `Thank you, ${names.join(" & ")}` : "Thank you from the RAC team";

/**
 * Testimonials — real customer feedback graphics shared on our socials,
 * with the quoted text repeated below each so it can be read and indexed.
 */
const Testimonials: FC = () => {
	return (
		<section id="reviews" aria-label="Customer reviews" className="py-24 bg-white">
			<div className="max-w-[1200px] mx-auto px-5 sm:px-10">
				<RevealWrapper>
					<SectionHeader
						align="center"
						tag="Customer Reviews"
						title="What Our Clients Say"
						subtitle="Real messages from our customers, from expert repairs to genuine gadgets."
					/>
				</RevealWrapper>

				<div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reviews.map((post, idx) => (
						<RevealWrapper key={post.id} delay={(idx % 3) * 80}>
							<article className="h-full bg-[#F4F4F4] rounded-[20px] overflow-hidden border border-black/5">
								<img
									src={post.image}
									alt="Customer feedback graphic with the reviews quoted below"
									width={720}
									height={720}
									loading="lazy"
									decoding="async"
									className="w-full aspect-square object-cover"
								/>
								<ul className="list-none m-0 p-6 space-y-5">
									{post.quotes.map((q) => (
										<li key={q.text}>
											<blockquote className="m-0 text-[15px] text-black/80 leading-relaxed">
												“{q.text}”
											</blockquote>
											<p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[1px] text-[#C2410C]">
												{q.product}
											</p>
										</li>
									))}
								</ul>
							</article>
						</RevealWrapper>
					))}
				</div>

				<h3 className="mt-20 mb-6 font-display font-bold text-2xl text-[#0A0A0A]">
					Thank-you posts
				</h3>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					{thankYous.map((post, idx) => (
						<RevealWrapper key={post.id} delay={(idx % 4) * 60}>
							<figure className="m-0">
								<img
									src={post.image}
									alt={`${listNames(post.names)}: RAC Gadgets thank-you post`}
									width={720}
									height={720}
									loading="lazy"
									decoding="async"
									className="w-full aspect-square object-cover rounded-[16px]"
								/>
								<figcaption className="mt-2.5 text-[13px] text-[#6B6B6B]">
									{listNames(post.names)}
								</figcaption>
							</figure>
						</RevealWrapper>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
