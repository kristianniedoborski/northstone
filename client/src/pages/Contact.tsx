import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Calendar } from "lucide-react";

export default function Contact() {
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
                  Get in Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                Let's build your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-700 italic">
                  finance function.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Book a 30-minute consultation to see how we can help transform your financial operations and support your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:hello@northstone.com"
                        className="text-lg text-gray-600 hover:text-brand-900 transition"
                      >
                        hello@northstone.com
                      </a>
                      <p className="text-sm text-gray-500 mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center text-brand-900 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">
                        Our Office
                      </h3>
                      <p className="text-lg text-gray-600">
                        Copenhagen, Denmark
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Serving companies across Denmark
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="bg-gray-50 rounded-sm p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-900 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-4">
                  Book a Free Consultation
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Schedule a 30-minute call to discuss your financial needs and see how Northstone can help your company scale.
                </p>
                <Button
                  onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
                  className="bg-brand-900 hover:bg-brand-accent text-white px-8 py-6 h-auto text-lg shadow-lg"
                >
                  Schedule a Call
                </Button>
                <p className="text-xs text-gray-400 mt-4">
                  No commitment required. We'll discuss your needs and see if we're a good fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
