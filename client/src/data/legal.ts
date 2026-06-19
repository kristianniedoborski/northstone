export const LEGAL_ENTITY = {
  name: "Thogersen Group ApS",
  brand: "Northstone",
  cvr: "36953098",
  address: "Ny Munkegade 95",
  city: "8000 Aarhus C",
  country: "Denmark",
  companyForm: "Anpartsselskab",
  email: "hello@usenorthstone.com",
} as const;

export const LEGAL_LAST_UPDATED = "19 June 2026";

export const LEGAL_DOCUMENTS = [
  {
    slug: "eula",
    href: "/legal/eula",
    title: "End-User License Agreement",
    description:
      "Terms governing your use of the Northstone platform and its integration with e-conomic.",
  },
  {
    slug: "privacy",
    href: "/legal/privacy",
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect personal data when you use our website and services.",
  },
  {
    slug: "dpa",
    href: "/legal/dpa",
    title: "Data Processing Agreement",
    description:
      "Our obligations as a data processor when handling your accounting and business data on your behalf.",
  },
] as const;
