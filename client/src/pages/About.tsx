import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";
import SectionCta from "@/components/SectionCta";
import PageSeo from "@/components/PageSeo";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="About Northstone - Operators, Not Consultants"
        description="Northstone was founded by Kristian Thogersen after 9+ years scaling a fintech from EUR 1.5M to EUR 30M revenue, raising EUR 200M+ in capital, and expanding across 4 markets."
        path="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Northstone",
          mainEntity: {
            "@type": "Person",
            name: "Kristian Thogersen",
            jobTitle: "Founder",
          },
        }}
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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-brand-900">
                Built by operators. For operators.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Northstone exists because we believe growing companies deserve better
                than generic advice from people who have never sat in their seat.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6">From the trenches</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Northstone was founded by Kristian Thogersen after spending 9+ years at
                ViaBill, a Danish fintech, in roles spanning COO, CCO, and CFO. During that
                time, Kristian helped scale the company from EUR 1.5M to EUR 30M in revenue,
                raised EUR 200M+ in debt and equity capital, and led expansion into Denmark,
                the United States, Spain, and Norway.
              </p>
              <p>
                Before ViaBill, Kristian built his foundation at Deloitte, where he developed
                the analytical rigor and financial discipline that later proved essential in
                high-growth environments.
              </p>
              <p>
                Northstone was born from a simple observation: growing companies face
                interconnected challenges - commercial strategy, financial operations, and
                capital needs - but the advisory market treats these as separate problems.
                Northstone brings an integrated, operator-led approach to companies at
                inflection points.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-10 text-center">
              How we are different
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-sm">
                <h3 className="font-semibold text-brand-900 mb-3">Operators, not consultants</h3>
                <p className="text-gray-600 text-sm">
                  We have held the roles we advise on: COO, CCO, CFO. We do not advise
                  from theory.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-sm">
                <h3 className="font-semibold text-brand-900 mb-3">Integrated, not siloed</h3>
                <p className="text-gray-600 text-sm">
                  Commercial problems create financial problems that create capital
                  problems. We solve root causes, not symptoms.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-sm">
                <h3 className="font-semibold text-brand-900 mb-3">Embedded, not external</h3>
                <p className="text-gray-600 text-sm">
                  We join your team and become accountable for outcomes, not
                  deliverables.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4 text-center">
              Our team
            </h2>
            <p className="text-gray-600 text-center mb-10">
              We hire exclusively from top-tier professional services and high-growth operating environments.
            </p>
            <SocialProof />
          </div>
        </section>

        <SectionCta
          headline="Want to meet the team?"
          body="Book a consultation and find out if we are the right fit."
        />
      </main>
      <Footer />
    </div>
  );
}
