import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Rocket, Plane, RefreshCw, TrendingUp } from "lucide-react";

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
    price: "2.500 kr.",
    period: "Per month",
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
    price: "11.200 kr.",
    period: "Per month",
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
    price: "17.500 kr.",
    period: "Per month",
    popular: true,
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
    price: "23.500 kr.",
    period: "Per month",
  },
];

const features = [
  "Month-end close",
  "Management reporting",
  "Ongoing consultation with a fractional CFO",
  "Payroll management",
  "Payroll compliance guidance",
  "Asynchronous email support",
];

export default function PricingSection({ onGetQuote }: PricingSectionProps) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`p-6 flex flex-col transition-all duration-300 ${
                tier.popular
                  ? "bg-white text-brand-900 ring-2 ring-brand-accent relative"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              }`}
              data-testid={`card-pricing-${tier.id}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-sm flex items-center justify-center ${
                    tier.popular
                      ? "bg-blue-50 text-brand-900"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  <tier.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">
                  {tier.name}
                </h3>
                <div
                  className={`text-xs mb-3 ${
                    tier.popular ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  <p className="font-semibold mb-1">Startups who qualify:</p>
                  {tier.qualifications.map((qual, idx) => (
                    <p key={idx}>{qual}</p>
                  ))}
                </div>
              </div>

              <div className="text-center mb-6">
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    tier.popular ? "text-brand-accent" : "text-brand-accent"
                  }`}
                >
                  Finance Function
                </div>
                <div className="text-3xl font-bold mb-1">
                  {tier.price}
                </div>
                <div
                  className={`text-sm ${
                    tier.popular ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {tier.period}
                </div>
              </div>

              <div
                className={`flex-1 text-sm mb-6 ${
                  tier.popular ? "text-gray-600" : "text-gray-300"
                }`}
              >
                <p
                  className={`font-bold mb-3 ${
                    tier.popular ? "text-brand-900" : "text-white"
                  }`}
                >
                  Includes:
                </p>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          tier.popular ? "text-brand-accent" : "text-green-400"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={onGetQuote}
                className={`w-full ${
                  tier.popular
                    ? "bg-brand-900 hover:bg-brand-accent text-white"
                    : "bg-white text-brand-900 hover:bg-gray-100"
                }`}
                data-testid={`button-quote-${tier.id}`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
