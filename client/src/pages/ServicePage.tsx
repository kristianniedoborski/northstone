import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ProcessStepper from "@/components/ProcessStepper";
import SectionCta from "@/components/SectionCta";
import PageSeo from "@/components/PageSeo";
import SocialProof from "@/components/SocialProof";
import StatsBar from "@/components/StatsBar";
import { servicesBySlug } from "@/data/services";
import { BarChart3, Briefcase, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

type ServicePageProps = {
  slug: string;
};

const iconMap = {
  "commercial-transformation": BarChart3,
  "financial-operations": Briefcase,
  "capital-formation": ArrowRight,
  "turnaround-advisory": RefreshCw,
} as const;

const serviceSchemaBySlug: Record<string, string> = {
  "commercial-transformation": "Commercial strategy advisory",
  "financial-operations": "Financial operations consulting",
  "capital-formation": "Capital raising advisory",
  "turnaround-advisory": "Turnaround advisory",
};

export default function ServicePage({ slug }: ServicePageProps) {
  const service = servicesBySlug[slug];

  if (!service) {
    return <NotFound />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: serviceSchemaBySlug[slug] || service.name,
    provider: {
      "@type": "Organization",
      name: "Northstone",
      url: "https://www.usenorthstone.com",
    },
    areaServed: "Europe",
  };

  const Icon = iconMap[slug as keyof typeof iconMap] ?? CheckCircle2;

  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title={service.pageTitle}
        description={service.metaDescription}
        path={`/services/${slug}`}
        structuredData={serviceSchema}
      />
      <Navbar />
      <main>
        <ServiceHero headline={service.name} subheadline={service.heroSubheadline} />

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6">
              {service.problemHeadline}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{service.problemBody}</p>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4">What we do</h2>
                <p className="text-gray-600 leading-relaxed">{service.whatWeDoBody}</p>
              </div>
              <div className="space-y-5">
                {service.features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded bg-brand-light flex items-center justify-center text-brand-accent flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {slug === "capital-formation" ? (
          <StatsBar
            stats={[
              { value: "EUR 200M+", label: "Total capital raised" },
              { value: "Debt and Equity", label: "Across both instruments" },
              { value: "Multiple rounds", label: "Series A through growth equity" },
              { value: "Cross-border", label: "Investors across Europe and the US" },
            ]}
          />
        ) : null}

        <ProcessStepper title="How it works" steps={service.processSteps} />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-10 text-center">
              Who this is for
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.whoThisIsFor.map((profile) => (
                <div key={profile} className="p-6 border border-gray-200 bg-gray-50 rounded-sm">
                  <p className="text-gray-700">{profile}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/#services"
                className="text-brand-accent hover:text-brand-900 inline-flex items-center gap-2"
              >
                Back to all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <SocialProof />
        <SectionCta headline={service.ctaHeadline} />
      </main>
      <Footer />
    </div>
  );
}
