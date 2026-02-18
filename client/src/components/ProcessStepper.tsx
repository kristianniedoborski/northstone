import type { ProcessStep } from "@/data/services";

type ProcessStepperProps = {
  title: string;
  steps: ProcessStep[];
};

export default function ProcessStepper({ title, steps }: ProcessStepperProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-10 text-center">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white border border-gray-200 p-6 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-8 w-8 rounded-full bg-brand-900 text-white text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-900">{step.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-brand-accent">
                    {step.timeframe}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
