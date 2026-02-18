import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Compass,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";
import SectionCta from "@/components/SectionCta";
import PageSeo from "@/components/PageSeo";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const serviceIcons = [BarChart3, Blocks, Handshake, Compass];

export default function Home() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="Northstone - Commercial Strategy Meets Financial Execution"
        description="Northstone helps scaleups and PE-backed companies transform commercial performance, build financial infrastructure, raise capital, and execute turnarounds. Hands-on operators, not consultants."
        path="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Northstone",
            url: "https://www.usenorthstone.com",
            description: "Commercial strategy meets financial execution.",
            email: "hello@usenorthstone.com",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kristian Thogersen",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "Northstone" },
          },
        ]}
      />
      <Navbar />
      <main>
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-4">
                Advisory for companies that have outgrown their infrastructure
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-brand-900">
                We sit at the intersection of commercial strategy and financial execution.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Northstone embeds with scaleups and PE-backed companies to transform
                commercial performance, restructure financial operations, and raise
                capital. We are not consultants who leave behind slide decks. We are
                operators who stay until the job is done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setLocation("/contact")}
                  className="bg-brand-900 hover:bg-brand-accent text-white"
                >
                  Book a Consultation
                </Button>
                <button
                  onClick={() => setLocation("/#services")}
                  className="inline-flex items-center gap-2 text-brand-900 hover:text-brand-accent transition"
                >
                  See how we work
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-accent mb-3">The Gap</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6">
              You have outgrown your financial infrastructure. Your commercial strategy has not kept up.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most companies between EUR 5M and EUR 30M in revenue hit the same
              wall. The bookkeeper who got you here cannot build the reporting you
              need. The commercial strategy that worked at EUR 3M is leaking margin
              at EUR 15M. And when it is time to raise capital, you realize your
              numbers do not tell the story investors need to hear. You do not need
              another advisor. You need someone who has been in your seat.
            </p>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4">
                Four pillars. One integrated approach.
              </h2>
              <p className="text-gray-600">
                Most firms specialize in one thing. We built Northstone because these
                problems do not exist in isolation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => {
                const Icon = serviceIcons[idx] ?? CheckCircle2;
                return (
                  <div
                    key={service.slug}
                    className="bg-white border border-gray-200 p-7 rounded-sm"
                  >
                    <div className="h-11 w-11 rounded bg-brand-light text-brand-accent flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-5">{service.shortDescription}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-900"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <StatsBar
          stats={[
            { value: "EUR 200M+", label: "Capital raised across debt and equity" },
            { value: "EUR 1.5M to 30M", label: "Revenue scaling experience" },
            { value: "4 Markets", label: "International expansion track record" },
            { value: "9+ Years", label: "Operating at C-suite level in high-growth" },
          ]}
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-5">
                We work with companies at an inflection point.
              </h2>
              <p className="text-gray-600 mb-7">
                We support leadership teams where commercial strategy and financial
                execution must evolve together.
              </p>
              <Button
                onClick={() => setLocation("/contact")}
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
              >
                Let's talk about your situation
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-5 border border-gray-200 rounded-sm">
                <p className="font-semibold text-brand-900 mb-2">Scaleups (EUR 5-30M revenue)</p>
                <p className="text-gray-600 text-sm">
                  You have outgrown your early-stage setup. You need real reporting,
                  a commercial strategy review, and maybe a capital raise.
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-sm">
                <p className="font-semibold text-brand-900 mb-2">PE-backed companies</p>
                <p className="text-gray-600 text-sm">
                  Post-acquisition, you need commercial and financial transformation
                  fast. We understand board dynamics and delivery pressure.
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-sm">
                <p className="font-semibold text-brand-900 mb-2">Companies in turnaround</p>
                <p className="text-gray-600 text-sm">
                  Revenue is declining, cash is tight, and the board wants a plan.
                  You need operators who can execute under pressure.
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-sm">
                <p className="font-semibold text-brand-900 mb-2">Founders preparing to raise</p>
                <p className="text-gray-600 text-sm">
                  Your numbers, your story, and your operations need to be aligned
                  before you go to market. We get you raise-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6">
              We are not consultants. We are operators.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Northstone was founded by someone who spent 9+ years in the trenches
              as COO, CCO, and CFO of a high-growth fintech. Scaling revenue from
              EUR 1.5M to EUR 30M. Raising EUR 200M+ in capital. Expanding across
              four countries. We do not advise from the sideline. We embed with your
              team and stay until the transformation is complete.
            </p>
          </div>
        </section>

        <SocialProof />
        <SectionCta
          headline="Ready to talk?"
          body="Book a 30-minute consultation. No pitch deck, no sales process. Just a conversation about where you are and whether we can help."
        />
      </main>
      <Footer />
    </div>
  );
}
