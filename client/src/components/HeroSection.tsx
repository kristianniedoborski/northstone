import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface HeroSectionProps {
  onCtaClick?: () => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ onCtaClick, onExploreClick }: HeroSectionProps) {
  const [, setLocation] = useLocation();

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      setLocation("/solutions");
    }
  };
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              <span className="w-2 h-2 bg-brand-accent rounded-full mr-2"></span>
              <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                The New Standard for Growth
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6"
              data-testid="text-hero-title"
            >
              Don't just hire a CFO. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-700 italic">
                Hire a Finance Function.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
              We provide the complete financial infrastructure for growing
              businesses. From day-to-day operations and compliance to
              board-level strategy. No fractional fixes - just a fully integrated
              finance department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onCtaClick}
                className="bg-brand-900 hover:bg-brand-accent text-white px-6 py-3 h-auto text-base"
                data-testid="button-build-finance"
              >
                Build Your Finance Function
              </Button>
              <Button
                variant="outline"
                onClick={handleExploreClick}
                className="border-gray-200 text-brand-900 hover:border-brand-900 hover:bg-gray-50 px-6 py-3 h-auto text-base group"
                data-testid="button-explore-solutions"
              >
                Explore Solutions{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                  SM
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-accent border-2 border-white flex items-center justify-center text-xs text-white">
                  <Check className="h-3 w-3" />
                </div>
              </div>
              <p data-testid="text-social-proof">Trusted by 20+ growth-stage companies</p>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square bg-brand-900 rounded-sm shadow-2xl p-6 sm:p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-gray-700 pb-4 gap-2">
                <div className="text-white font-serif text-base sm:text-lg">
                  Financial Overview
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="flex-1 flex items-end gap-1.5 sm:gap-2 mb-6">
                <div
                  className="w-1/6 bg-brand-700 h-[40%] rounded-t-sm animate-pulse"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1/6 bg-brand-700 h-[55%] rounded-t-sm animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1/6 bg-brand-700 h-[45%] rounded-t-sm animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-1/6 bg-brand-700 h-[70%] rounded-t-sm animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div className="w-1/6 bg-white h-[85%] rounded-t-sm shadow-lg relative group transition-all duration-500 hover:bg-brand-accent">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-brand-900 text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                    +124% YoY
                  </div>
                </div>
                <div className="w-1/6 bg-brand-accent h-[95%] rounded-t-sm opacity-50"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-brand-800 p-3 sm:p-4 rounded-sm">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Cash Runway
                  </div>
                  <div className="text-white text-lg sm:text-xl font-bold font-serif">
                    18 Months
                  </div>
                </div>
                <div className="bg-brand-800 p-3 sm:p-4 rounded-sm">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Burn Rate
                  </div>
                  <div className="text-white text-lg sm:text-xl font-bold font-serif">
                    Optimized
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 bg-white p-4 sm:p-6 rounded shadow-xl max-w-[180px] sm:max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    Audit Ready
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Books closed on time, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
