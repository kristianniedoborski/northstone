import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // todo: remove mock functionality - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch shortly to schedule your consultation.",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl font-serif font-bold text-brand-900 mb-6"
          data-testid="text-contact-title"
        >
          Stop managing finance.
          <br />
          Start managing growth.
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Book a 30-minute consultation to see how we can build your finance
          function today.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Email
            </label>
            <Input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-900 focus:outline-none"
              data-testid="input-email"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-900 hover:bg-brand-accent text-white text-lg py-6 shadow-lg"
            data-testid="button-submit-consultation"
          >
            {isSubmitting ? "Submitting..." : "Book Consultation"}
          </Button>
          <p className="text-xs text-center text-gray-400 mt-4">
            By clicking submit, you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
