import type { FC } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import BentoGrid from "../components/BentoGrid";
import Services from "../components/Services";
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
        <Services />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
