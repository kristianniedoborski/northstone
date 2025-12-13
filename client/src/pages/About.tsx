import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  Target, 
  Users, 
  Zap, 
  Shield,
  TrendingUp,
  Check
} from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 bg-brand-accent rounded-full mr-2"></span>
                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                The Complete Finance Function.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-700 italic">
                  Built for Growth.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                We're on a mission to give growing companies the financial infrastructure they need to scale confidently. No fractional fixes—just a fully integrated finance department on subscription.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2 text-center">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6 text-center">
                Finance shouldn't slow you down
              </h2>
              <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
                Growing companies need more than bookkeeping. They need strategic financial leadership, operational excellence, and compliance confidence—all working together. That's why we built Northstone: the complete finance function, designed for companies that are scaling fast.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
                Why Northstone
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
                Built for Danish growth-stage companies
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We understand the unique challenges of scaling in Denmark. From VAT compliance to investor reporting, we've got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Strategic Focus
                </h3>
                <p className="text-gray-600">
                  Fractional CFO expertise that connects your financials to your business strategy. We help you make decisions backed by data, not guesswork.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Operational Excellence
                </h3>
                <p className="text-gray-600">
                  Day-to-day bookkeeping, payroll, and compliance handled with precision. Your books are always accurate, always up-to-date, always audit-ready.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Compliance Confidence
                </h3>
                <p className="text-gray-600">
                  VAT, tax, and regulatory requirements managed proactively. We keep you compliant so you can focus on growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Growth-Ready
                </h3>
                <p className="text-gray-600">
                  Financial infrastructure that scales with you. From seed stage to Series A and beyond, we're built for your journey.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Integrated Team
                </h3>
                <p className="text-gray-600">
                  One team, one subscription. Strategic CFO guidance, operational bookkeeping, and compliance—all working together seamlessly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">
                  Danish Expertise
                </h3>
                <p className="text-gray-600">
                  Deep understanding of Danish tax law, VAT regulations, and business practices. We speak your language, literally and figuratively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
              Ready to build your finance function?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how Northstone can support your growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
                className="bg-brand-900 hover:bg-brand-accent text-white px-6 py-3 h-auto text-base"
              >
                Book a Consultation
              </Button>
              <Button
                onClick={() => setLocation("/solutions")}
                variant="outline"
                className="border-gray-200 text-brand-900 hover:border-brand-900 hover:bg-gray-50 px-6 py-3 h-auto text-base"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
