import type { FC } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import BentoGrid from "../components/BentoGrid";
import Blog from "../components/Blog";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import SocialProof from "../components/SocialProof";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <BentoGrid />
        <Blog />
        <Services />
        <Testimonials />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
