import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import ToolSidebar from "@/components/ToolSidebar";
import SpecialToolRenderer from "@/components/special/SpecialToolRenderer";
import { SITE_URL, toolPages } from "@/lib/site";
import { toolContent } from "@/lib/tool-content";
import { programmaticPages } from "@/lib/programmatic-pages";

const specialSlugs = [
  "compress-image",
  "resize-image",
  "jpg-to-png",
  "png-to-jpg",
  "crop-image",
  "image-to-pdf",
  "merge-pdf",
  "split-pdf",
  "json-formatter",
  "base64-encoder",
  "base64-decoder",
  "url-encoder",
  "url-decoder",
  "uuid-generator",
  "slug-generator",
  "remove-line-breaks",
  "text-sorter",
  "duplicate-line-remover",
  "png-compressor",
  "webp-to-png",
  "text-reverser",
  "remove-extra-spaces",
  "line-counter",
  "word-frequency-counter",
  "text-repeater",
  "text-to-binary",
  "binary-to-text",
  "rgb-to-hex",
  "hex-to-rgb",
  "unix-timestamp-converter",
  "random-letter-generator",
  "password-strength-checker",
  "uuid-bulk-generator",
  "meta-description-counter",
  "html-escape",
  "html-unescape",
  "list-randomizer",
  "roman-numeral-converter"
];

function getPage(slug: string) {
  return toolPages.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return toolPages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const item = getPage(params.slug);
  if (!item) return {};

  const title = `${item.title} | UtilHubX`;
  const url = `${SITE_URL}/tools/${item.slug}`;

  return {
    title,
    description: item.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: item.description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = getPage(params.slug);
  if (!item) notFound();

  const isSpecial = specialSlugs.includes(item.slug);
  const content = toolContent[item.slug];

  const relatedGuides = programmaticPages
    .filter((p) => p.relatedTool === item.slug)
    .slice(0, 4);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: item.title,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/tools/${item.slug}`,
    description: item.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqSchema =
    content && content.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((entry) => ({
            "@type": "Question",
            name: entry.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: entry.a,
            },
          })),
        }
      : null;

  return (
    <div className="tool-layout">
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}

        <span className="kicker">{item.category}</span>
        <h1 className="page-title" style={{ marginTop: 14 }}>
          {item.title}
        </h1>
        <p className="page-intro">{item.description}</p>

        <AdBanner />

        {isSpecial ? (
          <SpecialToolRenderer slug={item.slug} />
        ) : (
          <div className="card">
            <h2>Quick answer tool</h2>
            <p>
              This page is designed to help visitors complete a common task
              quickly without extra steps.
            </p>
          </div>
        )}

        {content ? (
          <>
            <section className="section">
              <div className="card">
                <h2>About this tool</h2>
                <p>{content.intro}</p>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>Common examples</h2>
                <ul>
                  {content.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>How it works</h2>
                <ol>
                  {content.howItWorks.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>FAQ</h2>
                {content.faq.map((entry) => (
                  <div key={entry.q} style={{ marginBottom: 18 }}>
                    <h3>{entry.q}</h3>
                    <p>{entry.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : null}

        {relatedGuides.length ? (
          <section className="section">
            <div className="card">
              <h2>Related guides</h2>
              <div className="popular-links">
                {relatedGuides.map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="card">
            <h2>Parent section</h2>
            <div className="popular-links">
              <Link href={`/${item.parent}`}>Open related section</Link>
              <Link href={`/categories/${item.category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")}`}>Browse {item.category} tools</Link>
            </div>
          </div>
        </section>

        <div style={{ marginTop: 22 }}>
          <AdBanner slot="4455667788" />
        </div>
      </div>

      <ToolSidebar category={item.category} currentSlug={item.slug} />
    </div>
  );
}