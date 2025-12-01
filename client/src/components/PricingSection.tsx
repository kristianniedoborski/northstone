import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onGetQuote?: () => void;
}

const pricingTiers = [
  {
    name: "Growth",
    subtitle: "For Seed to Series A",
    features: [
      "Full Operational Finance (Bookkeeping)",
      "Monthly Management Reporting",
      "Quarterly Strategy Sessions",
      "Cash Flow Monitoring",
    ],
    variant: "dark" as const,
  },
  {
    name: "Scale",
    subtitle: "For Series A+ & Rapid Growth",
    features: [
      "Everything in Growth",
      "Dedicated Finance Director Partner",
      "Board Meeting Attendance",
      "Custom Financial Modeling",
    ],
    variant: "light" as const,
    popular: true,
  },
];

export default function PricingSection({ onGetQuote }: PricingSectionProps) {
  return (
    <section className="py-24 bg-brand-900 text-white" id="pricing">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-serif font-bold mb-6"
          data-testid="text-pricing-title"
        >
          Simple, Scalable Pricing
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          We operate on a subscription model based on your company stage and
          complexity. No hourly billing, no surprises.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded transition relative ${
                tier.variant === "dark"
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white text-brand-900"
              }`}
              data-testid={`card-pricing-${tier.name.toLowerCase()}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold mb-2">
                {tier.name}
              </h3>
              <div className="text-brand-accent font-bold mb-4 text-sm uppercase">
                {tier.subtitle}
              </div>
              <ul
                className={`space-y-3 mb-8 ${
                  tier.variant === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check
                      className={`h-4 w-4 mr-3 flex-shrink-0 ${
                        tier.variant === "dark"
                          ? "text-green-400"
                          : "text-brand-900"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={onGetQuote}
                className={`w-full ${
                  tier.variant === "dark"
                    ? "bg-white text-brand-900 hover:bg-gray-100"
                    : "bg-brand-900 text-white hover:bg-brand-800"
                }`}
                data-testid={`button-quote-${tier.name.toLowerCase()}`}
              >
                Get a Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
