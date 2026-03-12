import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import ToolSidebar from "@/components/ToolSidebar";
import SpecialToolRenderer from "@/components/special/SpecialToolRenderer";
import { SITE_URL, toolPages } from "@/lib/site";
import { toolContent } from "@/lib/tool-content";

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

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `${SITE_URL}/tools/${item.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `${SITE_URL}/tools/${item.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = getPage(params.slug);
  if (!item) notFound();

  const isSpecial = specialSlugs.includes(item.slug);
  const content = toolContent[item.slug];

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: item.title,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    url: `${SITE_URL}/tools/${item.slug}`,
    description: item.description,
  };

  const faqSchema = content
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

        <div style={{ marginTop: 22 }}>
          <AdBanner slot="4455667788" />
        </div>
      </div>

      <ToolSidebar category={item.category} currentSlug={item.slug} />
    </div>
  );
}