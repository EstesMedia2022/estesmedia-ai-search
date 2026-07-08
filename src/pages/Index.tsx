import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import WatchVideoSection from "@/components/WatchVideoSection";
import StatsSection from "@/components/StatsSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ResultsSection from "@/components/ResultsSection";
import MascotSection from "@/components/MascotSection";
import CompareSection from "@/components/CompareSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <WatchVideoSection />
      <StatsSection />
      <ProblemSection />
      <HowItWorks />
      <ResultsSection />
      <MascotSection />
      <CompareSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
