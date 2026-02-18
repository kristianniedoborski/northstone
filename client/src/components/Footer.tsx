import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src="/northstone-logo.png" alt="Northstone" className="h-8 w-auto mb-4" />
            <p className="text-sm text-gray-500">Commercial strategy meets financial execution.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide text-brand-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-600 hover:text-brand-accent transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide text-brand-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-accent transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-brand-accent transition">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide text-brand-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="mailto:hello@usenorthstone.com" className="hover:text-brand-accent transition">
                  hello@usenorthstone.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/northstonefinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-accent transition"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>Copyright 2026 Northstone. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-accent transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-accent transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
