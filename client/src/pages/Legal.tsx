import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { LEGAL_DOCUMENTS, LEGAL_ENTITY, LEGAL_LAST_UPDATED } from "@/data/legal";
import { LegalEntityBlock } from "@/components/LegalPageLayout";
import { ArrowRight } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="Legal - Northstone"
        description="Legal documents for Northstone platform and accounting services operated by Thogersen Group ApS."
        path="/legal"
      />
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 bg-brand-accent rounded-full mr-2" />
                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                Legal
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
                {LEGAL_ENTITY.brand} is operated by {LEGAL_ENTITY.name}. Review our legal
                documents governing platform use, privacy, and data processing.
              </p>
              <p className="text-sm text-gray-500">Last updated: {LEGAL_LAST_UPDATED}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-4">
              {LEGAL_DOCUMENTS.map((doc) => (
                <Link
                  key={doc.slug}
                  href={doc.href}
                  className="group block border border-gray-200 rounded-sm p-6 hover:border-brand-accent hover:shadow-sm transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-serif font-bold text-brand-900 mb-2 group-hover:text-brand-accent transition">
                        {doc.title}
                      </h2>
                      <p className="text-gray-600">{doc.description}</p>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 text-gray-400 group-hover:text-brand-accent shrink-0 mt-1 transition"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Legal entity</h2>
              <LegalEntityBlock />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
