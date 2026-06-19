import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { LEGAL_ENTITY, LEGAL_LAST_UPDATED } from "@/data/legal";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  path: string;
  badge?: string;
  children: ReactNode;
};

export function LegalEntityBlock() {
  return (
    <div className="bg-gray-50 p-6 rounded-sm">
      <p className="font-semibold text-brand-900 mb-2">{LEGAL_ENTITY.name}</p>
      <p className="mb-1">CVR: {LEGAL_ENTITY.cvr}</p>
      <p className="mb-1">{LEGAL_ENTITY.address}</p>
      <p className="mb-1">{LEGAL_ENTITY.city}, {LEGAL_ENTITY.country}</p>
      <p className="mb-1">{LEGAL_ENTITY.companyForm}</p>
      <p>Email: {LEGAL_ENTITY.email}</p>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function LegalPageLayout({
  title,
  description,
  path,
  badge,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageSeo title={title} description={description} path={path} />
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
              {badge && (
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-2" />
                  <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                    {badge}
                  </span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                {title.replace(` - ${LEGAL_ENTITY.brand}`, "").replace(` - Northstone`, "")}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Last updated: {LEGAL_LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
