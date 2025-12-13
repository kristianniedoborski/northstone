import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ValueProposition from "@/components/ValueProposition";
import SolutionsSection from "@/components/SolutionsSection";
import StrategySection from "@/components/StrategySection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [location, setLocation] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Check for hash in URL on mount and when location changes
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the '#' character
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <HeroSection
          onCtaClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
          onExploreClick={() => setLocation("/solutions")}
        />
        <SocialProof />
        <ValueProposition />
        <SolutionsSection />
        <StrategySection />
        <Testimonials />
        <PricingSection onGetQuote={() => scrollToSection("contact")} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
