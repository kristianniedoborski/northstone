import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    
    // Homepage sections that exist on the Home page
    const homepageSections = ["approach", "pricing", "contact", "solutions"];
    
    // If we're not on the home page and clicking a homepage section, navigate to home with hash
    if (location !== "/" && homepageSections.includes(section)) {
      // Navigate to home page first
      setLocation("/");
      // Then set hash and scroll after a brief delay to ensure page is loaded
      setTimeout(() => {
        window.location.hash = section;
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return;
    }
    
    // If we're on the homepage, use existing behavior
    if (location === "/") {
      onNavigate?.(section);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSolutionsClick = () => {
    setIsMobileMenuOpen(false);
    setLocation("/solutions");
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    setLocation("/about");
  };

  const handleLogoClick = () => {
    setLocation("/");
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
            onClick={handleLogoClick}
            data-testid="link-logo"
          >
            <img 
              src="/northstone-logo.png" 
              alt="Northstone" 
              className="h-9 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={handleSolutionsClick}
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
              onClick={handleAboutClick}
              className="text-sm font-medium text-gray-600 hover:text-brand-900 transition"
              data-testid="link-about"
            >
              About Us
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
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
          onClick={handleSolutionsClick}
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
          onClick={handleAboutClick}
          className="block py-2 text-gray-600 font-medium w-full text-left"
          data-testid="mobile-link-about"
        >
          About Us
        </button>
        <button
          onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
          className="block mt-4 text-center bg-brand-900 text-white py-3 rounded w-full"
          data-testid="mobile-button-consultation"
        >
          Get a Consultation
        </button>
      </div>
    </nav>
  );
}
