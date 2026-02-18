import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

type SectionCtaProps = {
  headline: string;
  body?: string;
};

export default function SectionCta({ headline, body }: SectionCtaProps) {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4">{headline}</h2>
        {body ? <p className="text-gray-600 mb-8">{body}</p> : null}
        <Button
          onClick={() => setLocation("/contact")}
          className="bg-brand-900 hover:bg-brand-accent text-white"
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
