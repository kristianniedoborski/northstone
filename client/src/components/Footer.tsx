import { MapPin, Mail, Linkedin, Twitter } from "lucide-react";

const solutions = [
  { name: "Operational Finance", href: "#" },
  { name: "FP&A", href: "#" },
  { name: "Board Reporting", href: "#" },
  { name: "Fundraising", href: "#" },
];

const company = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy Policy", href: "#" },
];

const offices = [
  { icon: MapPin, text: "London, UK" },
  { icon: MapPin, text: "Copenhagen, DK" },
  { icon: Mail, text: "hello@scaleup.financial" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand-900 rounded-sm flex items-center justify-center text-white font-serif font-bold text-xs">
                S
              </div>
              <span className="font-serif font-bold text-lg text-brand-900">
                Scaleup<span className="text-brand-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              The complete finance function for high-growth companies.
            </p>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a
                href="#"
                className="hover:text-brand-900 transition"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-brand-900 transition"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-brand-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {solutions.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-brand-accent transition"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-brand-accent transition"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-900 mb-4 text-sm">Offices</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {offices.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <item.icon className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Scaleup Financial Management. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
