import { Button } from "@/components/ui/button";

export default function ContactSection() {
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
        <div className="max-w-md mx-auto space-y-4 text-left">
          <Button
            onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
            className="w-full bg-brand-900 hover:bg-brand-accent text-white text-lg py-6 shadow-lg"
            data-testid="button-submit-consultation"
          >
            Book Consultation
          </Button>
          <p className="text-xs text-center text-gray-400 mt-4">
            By clicking submit, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
