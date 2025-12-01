import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronDown, ChevronUp, Rocket, Plane, RefreshCw, TrendingUp } from "lucide-react";

interface PricingSectionProps {
  onGetQuote?: () => void;
}

const pricingTiers = [
  {
    id: "launchpad",
    name: "Launchpad",
    icon: Rocket,
    subtitle: "Pre-Seed",
    qualifications: [
      "<14M kr. raised (Pre-Seed)",
      "<350K kr. in monthly expenses",
      "<175K kr. in monthly revenue",
    ],
    description:
      "Get started on the right financial foot and position your startup for long-term growth - all without needing to worry about back office logistics.",
    services: [
      {
        category: "ACCOUNTING",
        price: "2.500 kr.",
        period: "Per month (cash basis)",
        features: [
          "Month-end close management",
          "Month-end Reporting Package by day 25",
        ],
      },
      {
        category: "FINANCE",
        price: "2.800 kr.",
        period: "Per hour",
        features: [
          "Consult with a Finance expert for hourly support with one-off projects",
        ],
      },
      {
        category: "TAX",
        price: "16.000 kr.",
        period: "Annually",
        features: ["1 Federal Return", "1 State Return", "Year-end meeting"],
      },
      {
        category: "PEOPLE OPS",
        price: "5.250 kr.",
        period: "Per month",
        features: [
          "Payroll management",
          "Payroll compliance guidance",
          "Asynchronous email",
        ],
      },
    ],
  },
  {
    id: "launch",
    name: "Launch",
    icon: Plane,
    subtitle: "Seed",
    qualifications: [
      "14M-70M kr. raised (Seed)",
      "350K-1.4M kr. in monthly expenses",
      "175K-700K kr. in monthly revenue",
    ],
    description:
      "Lay a solid foundation across back office functions so you can focus on building your business.",
    services: [
      {
        category: "ACCOUNTING",
        price: "11.200 kr.",
        period: "Per month",
        features: [
          "Month-End Close Management",
          "Month-End Reporting Package",
          "AP & Vendor Management Support",
          "Balance Sheet Schedule",
        ],
      },
      {
        category: "FINANCE",
        price: "11.200 kr.",
        period: "Per month",
        features: [
          "8 hours of advisory & support from dedicated Finance expert",
          "Monthly model update & Executive Summary",
        ],
      },
      {
        category: "TAX",
        price: "16.800 kr.",
        period: "Annually",
        features: [
          "Federal 1120 (Includes 1 Federal Return)",
          "1 State/City Return",
          "Return Walkthrough",
        ],
      },
      {
        category: "PEOPLE OPS",
        price: "11.200 kr.",
        period: "Per month",
        features: [
          "10 hours of advisory & support from dedicated People expert",
          "Payroll Management",
        ],
      },
    ],
  },
  {
    id: "iterate",
    name: "Iterate",
    icon: RefreshCw,
    subtitle: "Series A",
    qualifications: [
      "70M-210M kr. raised (Series A)",
      "1.4M-3.5M kr. in monthly expenses",
      "700K-2.1M kr. in monthly revenue",
    ],
    popular: true,
    description:
      "Get the support you need to maintain a reliable, transparent back office so the rest of the company can focus on getting to product-market fit.",
    services: [
      {
        category: "ACCOUNTING",
        price: "17.500 kr.",
        period: "Per month",
        features: [
          "Month-End Close Management",
          "Month-End Reporting Package",
          "AP & Vendor Management Support",
        ],
      },
      {
        category: "FINANCE",
        price: "17.500 kr.",
        period: "Per month",
        features: [
          "12 hours of advisory & support from dedicated Finance expert",
          "Monthly model update & deep-dive analysis",
        ],
      },
      {
        category: "TAX",
        price: "28.000 kr.",
        period: "Annually",
        features: [
          "Common Federal Forms: 4562, 1125E, Pg 1 of M-3, and 6765",
          "3 State/City Returns",
        ],
      },
      {
        category: "PEOPLE OPS",
        price: "17.500 kr.",
        period: "Per month",
        features: [
          "20 hours of advisory & support from dedicated People expert",
          "Payroll Management",
        ],
      },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    icon: TrendingUp,
    subtitle: "Series B+",
    qualifications: [
      "210M+ kr. raised (Series B+)",
      "3.5M+ kr. in monthly expenses",
      "2.1M+ kr. in monthly revenue",
    ],
    description:
      "Let us build your back office to scale with robust processes, controls and tools that bridge the gap to an expensive, full-service ERP.",
    services: [
      {
        category: "ACCOUNTING",
        price: "23.500 kr.",
        period: "Per month",
        features: [
          "Month-End Close Services",
          "Investor Reporting Package",
          "AP & Vendor Management Support",
          "Balance Sheet Schedule",
        ],
      },
      {
        category: "FINANCE",
        price: "29.400 kr.",
        period: "Per month",
        features: [
          "21 hours of advisory & support from dedicated Finance expert",
          "Monthly model update & deep-dive analysis",
        ],
      },
      {
        category: "TAX",
        price: "51.100 kr.",
        period: "Annually",
        features: [
          "All Federal Forms (Except International Forms)",
          "5 State/City Returns",
          "Return Walkthrough",
        ],
      },
      {
        category: "PEOPLE OPS",
        price: "29.400 kr.",
        period: "Per month",
        features: [
          "30+ hours of advisory & support from dedicated People expert",
          "Full-Service Payroll Management",
        ],
      },
    ],
  },
];

export default function PricingSection({ onGetQuote }: PricingSectionProps) {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId);
  };

  return (
    <section className="py-24 bg-brand-900 text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            data-testid="text-pricing-title"
          >
            Simple, Scalable Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We operate on a subscription model based on your company stage and
            complexity. No hourly billing, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                expandedTier === tier.id
                  ? "bg-white text-brand-900 ring-2 ring-brand-accent"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              } ${tier.popular ? "relative" : ""}`}
              onClick={() => toggleTier(tier.id)}
              data-testid={`card-tier-${tier.id}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-sm flex items-center justify-center ${
                    expandedTier === tier.id
                      ? "bg-blue-50 text-brand-900"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  <tier.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">
                  {tier.name}
                </h3>
                <div
                  className={`text-sm mb-4 ${
                    expandedTier === tier.id ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  <p className="font-semibold mb-1">Startups who qualify:</p>
                  {tier.qualifications.map((qual, idx) => (
                    <p key={idx} className="text-xs">
                      {qual}
                    </p>
                  ))}
                </div>
                <button
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${
                    expandedTier === tier.id
                      ? "text-brand-accent"
                      : "text-brand-accent"
                  }`}
                  data-testid={`button-show-pricing-${tier.id}`}
                >
                  {expandedTier === tier.id ? "Hide" : "Show"} Pricing
                  {expandedTier === tier.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </Card>
          ))}
        </div>

        {expandedTier && (
          <div
            className="bg-white rounded-lg p-6 sm:p-8 text-brand-900 animate-in fade-in slide-in-from-top-4 duration-300"
            data-testid={`pricing-details-${expandedTier}`}
          >
            {pricingTiers
              .filter((t) => t.id === expandedTier)
              .map((tier) => (
                <div key={tier.id}>
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 max-w-2xl">{tier.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tier.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-100 rounded-lg p-5"
                        data-testid={`service-${tier.id}-${service.category.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                          {service.category}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold mb-1">
                          Starting at
                          <br />
                          {service.price}
                        </div>
                        <div className="inline-block bg-brand-900 text-white text-xs px-2 py-1 rounded mb-4">
                          {service.period}
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="font-bold mb-2">
                            Core services include:
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      onClick={onGetQuote}
                      className="bg-brand-900 hover:bg-brand-accent text-white px-8"
                      data-testid={`button-get-quote-${tier.id}`}
                    >
                      Get a Custom Quote
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        )}

        {!expandedTier && (
          <p className="text-center text-gray-400 text-sm mt-4">
            Click on a tier above to see detailed pricing
          </p>
        )}
      </div>
    </section>
  );
}
