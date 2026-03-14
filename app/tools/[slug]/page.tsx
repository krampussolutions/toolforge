import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import ToolSidebar from "@/components/ToolSidebar";
import SpecialToolRenderer from "@/components/special/SpecialToolRenderer";
import CoreToolRenderer from "@/components/special/CoreToolRenderer";
import { SITE_URL, toolPages } from "@/lib/site";
import { toolContent } from "@/lib/tool-content";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";

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
  "webp-to-jpg",
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
  "roman-numeral-converter",
  "business-days-calculator",
  "weeks-between-dates",
  "sales-tax-calculator",
  "credit-card-payoff-calculator",
  "reading-level-checker",
  "title-case-headline-analyzer"
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
  const description = `${item.title} on UtilHubX helps you ${item.description.charAt(0).toLowerCase()}${item.description.slice(1)} Use it free in your browser on desktop or mobile.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    "@type": "WebApplication",
    name: item.title,
    applicationCategory: item.category,
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
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
          dangerouslySetInnerHTML={{ __html: toJsonLd(appSchema) }}
        />
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
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
        ) : item.kind === "suite" ? (
          <CoreToolRenderer slug={item.slug} />
        ) : (
          <div className="card">
            <h2>Use the {item.title} online</h2>
            <p>
              Open the {item.title.toLowerCase()} in your browser, enter the values or content you need, and get a result without downloads, account setup, or switching devices.
            </p>
          </div>
        )}

        {content ? (
          <>
            <section className="section">
              <div className="card">
                <h2>What the {item.title} does</h2>
                <p>{content.intro}</p>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>Common ways to use the {item.title}</h2>
                <ul>
                  {content.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>How the {item.title} works</h2>
                <ol>
                  {content.howItWorks.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>{item.title} questions and answers</h2>
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
              <h2>Guides related to {item.title}</h2>
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
            <h2>Why people use the {item.title}</h2>
            <p>
              People usually use the {item.title.toLowerCase()} when they want a fast, focused workflow for a specific {item.category.toLowerCase()} task. It is useful for everyday jobs, schoolwork, business tasks, and quick one-off checks where speed matters more than complex software.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2>Tips for better results</h2>
            <ul>
              <li>Double-check the values, file, or text you enter before generating a result.</li>
              <li>Use the related section link below if you need a nearby tool for the same workflow.</li>
              <li>On mobile, review the final output before downloading or copying it.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2>More {item.category.toLowerCase()} pages on UtilHubX</h2>
            <div className="popular-links">
              <Link href={`/calculators/${item.parent}`}>Open related section</Link>
              <Link href="/tools">Browse all tools</Link>
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
