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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <HeroSection
          onCtaClick={() => scrollToSection("contact")}
          onExploreClick={() => scrollToSection("solutions")}
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
