import { Card } from "@/components/ui/card";
import { Cog, TrendingUp, Landmark, Check } from "lucide-react";

const propositions = [
  {
    icon: Cog,
    title: "Operational Engine",
    description:
      "We automate and manage the tedious: bookkeeping, payroll, AP/AR, and expense management. Your books are always up to date and audit-ready.",
    features: ["Month-end close in 5 days", "Real-time reconciliation"],
    variant: "light" as const,
  },
  {
    icon: TrendingUp,
    title: "Strategic Intelligence",
    description:
      "Turn data into direction. Our FP&A team provides budgeting, forecasting, and unit economics analysis to guide your critical decisions.",
    features: ["Cash flow forecasting", "Scenario planning"],
    variant: "dark" as const,
  },
  {
    icon: Landmark,
    title: "Capital & Governance",
    description:
      "Investor-grade reporting and governance that builds confidence. Whether raising Series A or reporting to the board, you look professional.",
    features: ["Board deck preparation", "Due diligence support"],
    variant: "light" as const,
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6"
            data-testid="text-value-title"
          >
            A complete financial ecosystem.
            <br />
            Not just a consultant.
          </h2>
          <p className="text-gray-600 text-lg">
            Growing businesses often struggle with a fragmented approach - a
            bookkeeper here, a tax accountant there, and a consultant for
            strategy. We replace the chaos with a unified, high-performance
            finance function.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {propositions.map((prop, index) => (
            <Card
              key={index}
              className={`p-8 transition duration-300 ${
                prop.variant === "dark"
                  ? "bg-brand-900 text-white relative overflow-visible transform md:-translate-y-4"
                  : "bg-white border border-gray-100 shadow-soft hover:shadow-lg"
              }`}
              data-testid={`card-proposition-${index}`}
            >
              {prop.variant === "dark" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
              )}
              <div
                className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                  prop.variant === "dark"
                    ? "bg-white/10 text-white"
                    : "bg-blue-50 text-brand-900"
                }`}
              >
                <prop.icon className="h-6 w-6" />
              </div>
              <h3
                className={`text-xl font-serif font-bold mb-3 ${
                  prop.variant === "dark" ? "text-white" : "text-brand-900"
                }`}
              >
                {prop.title}
              </h3>
              <p
                className={`mb-4 ${
                  prop.variant === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {prop.description}
              </p>
              <ul
                className={`text-sm space-y-2 ${
                  prop.variant === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {prop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-4 w-4 text-brand-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
