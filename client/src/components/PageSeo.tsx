import { useEffect } from "react";

type StructuredData = Record<string, unknown>;

type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  structuredData?: StructuredData | StructuredData[];
};

const SITE_URL = "https://www.usenorthstone.com";
const SITE_NAME = "Northstone";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const upsertMeta = (
  selector: string,
  attributes: Record<string, string>,
  content: string,
) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) =>
      tag?.setAttribute(key, value),
    );
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export default function PageSeo({
  title,
  description,
  path,
  structuredData,
}: PageSeoProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      SITE_NAME,
    );
    upsertMeta(
      'meta[property="og:image"]',
      { property: "og:image" },
      OG_IMAGE,
    );
    upsertMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );
    upsertMeta(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      title,
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description,
    );
    upsertMeta(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      OG_IMAGE,
    );

    upsertLink("canonical", canonicalUrl);

    const schemaId = "northstone-structured-data";
    const existingScript = document.getElementById(schemaId);
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, path, structuredData, title]);

  return null;
}
