import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Before Northstone, our board meetings were debates about data accuracy. Now, they are strategic discussions about growth. The change in confidence is palpable.",
    name: "Charlotte Rønje",
    role: "CEO, Jamii.one",
    initials: "CR",
  },
  {
    quote:
      "We didn't just need a CFO; we needed an entire department. Northstone provided the system, the people, and the process instantly. It's 10x the value of a single hire.",
    name: "Kelly McCabe",
    role: "Founder, Perci Health",
    initials: "KM",
  },
  {
    quote:
      "Fundraising is brutal. Having Northstone build our model and handle the due diligence requests was the specific reason we closed our Series A on time.",
    name: "Rory Codrington",
    role: "CEO, Trust Keith",
    initials: "RC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2
          className="text-3xl font-serif font-bold text-brand-900 mb-4"
          data-testid="text-testimonials-title"
        >
          The Financial Backbone for Industry Leaders
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-white p-8 shadow-sm border border-gray-100"
            data-testid={`card-testimonial-${index}`}
          >
            <div className="text-brand-accent mb-4 text-2xl font-serif">"</div>
            <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10 bg-gray-200">
                <AvatarFallback className="text-gray-500 font-bold text-sm">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-brand-900 text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
