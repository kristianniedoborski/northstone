import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Rocket, TrendingUp, Zap } from "lucide-react";

interface PricingSectionProps {
  onGetQuote?: () => void;
}

const pricingTiers = [
  {
    id: "building",
    name: "Building",
    icon: Rocket,
    qualifications: [
      "<14M kr. raised (Pre-Seed)",
      "<350K kr. in monthly expenses",
      "<175K kr. in monthly revenue",
    ],
    features: [
      "Month-end close",
      "Management reporting",
      "Ongoing consultation with a fractional CFO",
      "Payroll management",
      "Payroll compliance guidance",
      "Asynchronous email support",
    ],
  },
  {
    id: "accelerating",
    name: "Accelerating",
    icon: Zap,
    qualifications: [
      "50M-210M kr. raised (Series A)",
      "1.4M-3.5M kr. in monthly expenses",
      "700K-2.1M kr. in monthly revenue",
    ],
    features: [
      "Month-end close",
      "Management reporting",
      "Budgeting & Forecasting",
      "Cash flow management",
      "Working capital optimisation",
      "Ongoing consultation with a fractional CFO",
      "Funding support",
      "Payroll management",
      "Payroll compliance guidance",
      "Asynchronous email support",
    ],
  },
  {
    id: "scaling",
    name: "Scaling",
    icon: TrendingUp,
    qualifications: [
      "210M+ kr. raised (Series B+)",
      "3.5M+ kr. in monthly expenses",
      "2.1M+ kr. in monthly revenue",
    ],
    features: [
      "Month-end close",
      "Management reporting",
      "Budgeting & Forecasting",
      "Cash flow management",
      "Business performance analysis",
      "Working capital optimisation",
      "Ongoing consultation with a fractional CFO",
      "Funding and investment support",
      "Strategic financial planning",
      "Payroll management",
      "Payroll compliance guidance",
      "Asynchronous email support",
    ],
  },
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
            Finance Functions for Every Stage
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tailored financial infrastructure designed to match your company's growth stage and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className="p-6 flex flex-col transition-all duration-300 bg-white/5 border-white/10 text-white hover:bg-white/10"
              data-testid={`card-pricing-${tier.id}`}
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-sm flex items-center justify-center bg-white/10 text-white/70">
                  <tier.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">
                  {tier.name}
                </h3>
                <div className="text-xs mb-6 text-gray-400">
                  <p className="font-semibold mb-2 text-white">Startups who qualify:</p>
                  {tier.qualifications.map((qual, idx) => (
                    <p key={idx} className="mb-1">{qual}</p>
                  ))}
                </div>
              </div>

              <div className="flex-1 text-sm mb-6 text-gray-300">
                <p className="font-bold mb-3 text-white">
                  Includes:
                </p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
                className="w-full bg-white text-brand-900 hover:bg-gray-100"
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
