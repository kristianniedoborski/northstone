import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionCta from "@/components/SectionCta";
import PageSeo from "@/components/PageSeo";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="Case Studies - Northstone"
        description="See how Northstone helps scaleups and PE-backed companies transform commercial performance, raise capital, and execute turnarounds."
        path="/case-studies"
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-900">Case Studies</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              We are currently documenting our engagements. Check back soon for detailed case
              studies showing how we help companies transform.
            </p>
          </div>
        </section>
        <SectionCta
          headline="In the meantime, book a consultation to hear about our work firsthand."
        />
      </main>
      <Footer />
    </div>
  );
}
