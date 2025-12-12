import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onNavigate?.(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("hero")}
            data-testid="link-logo"
          >
            <div className="w-8 h-8 bg-brand-900 rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">
              S
            </div>
            <span className="font-serif font-bold text-xl text-brand-900 tracking-tight">
              Scaleup<span className="text-brand-accent">.</span>Financial
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick("solutions")}
              className="text-sm font-medium text-gray-600 hover:text-brand-900 transition"
              data-testid="link-solutions"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavClick("approach")}
              className="text-sm font-medium text-gray-600 hover:text-brand-900 transition"
              data-testid="link-approach"
            >
              Our Approach
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-sm font-medium text-gray-600 hover:text-brand-900 transition"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button
              className="text-sm font-medium text-gray-600 hover:text-brand-900 transition"
              data-testid="link-resources"
            >
              Resources
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-brand-900 hover:bg-brand-accent text-white shadow-soft"
              data-testid="button-consultation"
            >
              Get a Consultation
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-500 hover:text-brand-900 focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-80 p-4" : "max-h-0"
        }`}
        data-testid="mobile-menu"
      >
        <button
          onClick={() => handleNavClick("solutions")}
          className="block py-2 text-gray-600 font-medium w-full text-left"
          data-testid="mobile-link-solutions"
        >
          Solutions
        </button>
        <button
          onClick={() => handleNavClick("approach")}
          className="block py-2 text-gray-600 font-medium w-full text-left"
          data-testid="mobile-link-approach"
        >
          Our Approach
        </button>
        <button
          onClick={() => handleNavClick("pricing")}
          className="block py-2 text-gray-600 font-medium w-full text-left"
          data-testid="mobile-link-pricing"
        >
          Pricing
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="block mt-4 text-center bg-brand-900 text-white py-3 rounded w-full"
          data-testid="mobile-button-consultation"
        >
          Get a Consultation
        </button>
      </div>
    </nav>
  );
}
