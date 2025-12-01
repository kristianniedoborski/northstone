import { Layers, Zap, Leaf, Box, Send } from "lucide-react";

const logos = [
  { icon: Box, name: "BLOCKS" },
  { icon: Zap, name: "Voltaic" },
  { icon: Leaf, name: "GrowthTree" },
  { icon: Layers, name: "StackFin" },
  { icon: Send, name: "AeroDyne" },
];

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Powering the finance function for
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2"
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              <logo.icon className="h-5 w-5" />
              <span className="font-bold text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
