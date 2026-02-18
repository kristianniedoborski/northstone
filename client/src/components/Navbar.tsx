import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/northstone-logo.png" alt="Northstone" className="h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="text-sm font-medium text-gray-700 hover:text-brand-900 transition flex items-center gap-1"
              data-testid="link-services"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            {isServicesOpen ? (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-sm p-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-3 py-2 rounded-sm hover:bg-gray-50 text-sm text-gray-700"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-brand-900">
            About
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-gray-700 hover:text-brand-900 flex items-center gap-2">
            Case Studies
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full uppercase tracking-wide">
              Coming Soon
            </span>
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-brand-900">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex">
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-brand-accent hover:bg-brand-accent/90 text-white"
            data-testid="button-consultation"
          >
            Book a Consultation
          </Button>
        </div>

        <button
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col">
          <div className="space-y-4 overflow-y-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block py-2 text-lg text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link href="/about" className="block py-2 text-lg text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/case-studies" className="block py-2 text-lg text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
              Case Studies (Coming Soon)
            </Link>
            <Link href="/contact" className="block py-2 text-lg text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setLocation("/contact");
            }}
            className="bg-brand-accent hover:bg-brand-accent/90 text-white mt-6 w-full"
          >
            Book a Consultation
          </Button>
        </div>
      ) : null}
    </nav>
  );
}
