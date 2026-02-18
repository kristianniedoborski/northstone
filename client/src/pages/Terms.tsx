import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="Terms of Service - Northstone"
        description="Terms of Service for Northstone website and advisory services."
        path="/terms"
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-brand-900">Terms of Service</h1>
            <p className="text-gray-600">
              These terms govern your use of the Northstone website and any related advisory
              services. By using this website, you agree to these terms.
            </p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600">
            <p>
              Content on this website is provided for informational purposes only and does not
              constitute legal, financial, or tax advice.
            </p>
            <p>
              Engagement terms for advisory services are defined separately in written agreements
              between Northstone and its clients.
            </p>
            <p>
              If you have questions about these terms, contact{" "}
              <a href="mailto:hello@usenorthstone.com" className="text-brand-accent hover:text-brand-900">
                hello@usenorthstone.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
