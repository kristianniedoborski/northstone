import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type HelpOption =
  | "Commercial Transformation"
  | "Financial Operations"
  | "Capital Formation"
  | "Turnaround Advisory"
  | "Not sure yet";

const helpOptions: HelpOption[] = [
  "Commercial Transformation",
  "Financial Operations",
  "Capital Formation",
  "Turnaround Advisory",
  "Not sure yet",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [description, setDescription] = useState("");
  const [helpWith, setHelpWith] = useState<HelpOption[]>([]);
  const [error, setError] = useState("");

  const isValid = useMemo(
    () =>
      Boolean(name.trim()) &&
      Boolean(email.trim()) &&
      Boolean(company.trim()) &&
      Boolean(revenueRange),
    [company, email, name, revenueRange],
  );

  const toggleHelpOption = (value: HelpOption) => {
    setHelpWith((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  };

  const submitMailto = () => {
    if (!isValid) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(`Consultation request from ${company}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Revenue range: ${revenueRange}`,
        `Help needed: ${helpWith.length ? helpWith.join(", ") : "Not provided"}`,
        `Brief description: ${description || "N/A"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:hello@usenorthstone.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <PageSeo
        title="Contact Northstone - Book a Consultation"
        description="Book a free 30-minute consultation with Northstone. No pitch, no obligation. Just a conversation about your business and whether we can help."
        path="/contact"
      />
      <Navbar />
      <main>
        <section
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-brand-900">Let's talk.</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Book a 30-minute consultation. No pitch deck, no sales process. Just a conversation
                about where you are and whether we can help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div className="border border-gray-200 rounded-sm p-6 md:p-8">
              <h2 className="font-serif text-2xl text-brand-900 mb-6">Request a consultation</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Name *</label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Company *</label>
                  <input
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Company revenue range *</label>
                  <Select value={revenueRange} onValueChange={setRevenueRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under EUR 5M">Under EUR 5M</SelectItem>
                      <SelectItem value="EUR 5-10M">EUR 5-10M</SelectItem>
                      <SelectItem value="EUR 10-30M">EUR 10-30M</SelectItem>
                      <SelectItem value="EUR 30M+">EUR 30M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-2">What do you need help with?</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {helpOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                        <Checkbox
                          checked={helpWith.includes(option)}
                          onCheckedChange={() => toggleHelpOption(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Brief description</label>
                  <Textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={4}
                    className="focus-visible:ring-brand-accent"
                  />
                </div>
                {error ? <p className="text-sm text-red-600">{error}</p> : null}
                <Button
                  onClick={submitMailto}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white w-full"
                >
                  Request a Consultation
                </Button>
                <p className="text-xs text-gray-500">
                  This launch version opens your email client with the completed request.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-brand-900 mb-6">Direct contact</h2>
              <div className="space-y-4 text-gray-700 mb-10">
                <p>
                  <span className="font-semibold text-brand-900">Email:</span>{" "}
                  <a href="mailto:hello@usenorthstone.com" className="hover:text-brand-accent">
                    hello@usenorthstone.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-brand-900">Address:</span> Bredgade 30, 1260
                  Copenhagen K
                </p>
                <p>
                  <span className="font-semibold text-brand-900">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/company/northstonefinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent"
                  >
                    Northstone on LinkedIn
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-brand-900">Response time:</span> We respond
                  within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-brand-900 mb-8 text-center">FAQ</h2>
            <Accordion type="single" collapsible className="bg-white border border-gray-200 px-6 rounded-sm">
              <AccordionItem value="q1">
                <AccordionTrigger>What happens in the consultation?</AccordionTrigger>
                <AccordionContent>
                  We spend 30 minutes understanding your situation, what challenges you are facing,
                  and what you are trying to achieve. If we can help, we will outline a practical
                  approach. If we are not the right fit, we will tell you that too.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent>
                  Engagements are scoped based on your specific situation. We do not have fixed
                  packages because every company's needs are different. We discuss pricing
                  transparently in the first conversation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Do you only work with Danish companies?</AccordionTrigger>
                <AccordionContent>
                  We are based in Copenhagen and have deep experience in the Nordics, but we work
                  with companies across Europe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>How long are typical engagements?</AccordionTrigger>
                <AccordionContent>
                  Most engagements run 3-6 months. Turnarounds may be longer. Some clients retain
                  us on an ongoing basis for functions like financial operations or board reporting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
