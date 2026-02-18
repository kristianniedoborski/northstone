import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

type ServiceHeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
};

export default function ServiceHero({
  eyebrow = "Services",
  headline,
  subheadline,
}: ServiceHeroProps) {
  const [, setLocation] = useLocation();

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
            <span className="w-2 h-2 bg-brand-accent rounded-full mr-2"></span>
            <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
              {eyebrow}
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-brand-900">
            {headline}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-brand-900 hover:bg-brand-accent text-white"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
