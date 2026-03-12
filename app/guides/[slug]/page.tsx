import Link from "next/link";
import { notFound } from "next/navigation";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toolPages, SITE_URL } from "@/lib/site";

function getPage(slug: string) {
  return programmaticPages.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return programmaticPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const page = getPage(params.slug);
  if (!page) return {};

  const title = `${page.title} | UtilHubX`;
  const url = `${SITE_URL}/guides/${page.slug}`;

  return {
    title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: "UtilHubX",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
    },
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const page = getPage(params.slug);
  if (!page) notFound();

  const relatedTool = toolPages.find((t) => t.slug === page.relatedTool);

  const similarPages = programmaticPages
    .filter((p) => p.category === page.category && p.slug !== page.slug)
    .slice(0, 6);

  const relatedTools = toolPages
    .filter(
      (t) =>
        t.category === page.category &&
        (!relatedTool || t.slug !== relatedTool.slug)
    )
    .slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    description: page.description,
    url: `${SITE_URL}/guides/${page.slug}`,
    mainEntityOfPage: `${SITE_URL}/guides/${page.slug}`,
    publisher: {
      "@type": "Organization",
      name: "UtilHubX",
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <span className="kicker">{page.category}</span>
      <h1 className="page-title" style={{ marginTop: 14 }}>
        {page.title}
      </h1>
      <p className="page-intro">{page.description}</p>

      <div className="card copy">
        <h3>Best way to use this page</h3>
        <p>
          This page helps people searching for a specific version of a tool get
          to the working tool quickly while also connecting related pages inside
          the same topic cluster.
        </p>

        {relatedTool ? (
          <p style={{ marginTop: 16 }}>
            <Link className="button" href={`/tools/${relatedTool.slug}`}>
              Open {relatedTool.title}
            </Link>
          </p>
        ) : null}
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h3>More related pages</h3>
        <div className="popular-links">
          <Link href={page.parentLanding}>Parent landing page</Link>
          {relatedTool ? (
            <Link href={`/tools/${relatedTool.slug}`}>Working tool</Link>
          ) : null}
          {similarPages.map((item) => (
            <Link key={item.slug} href={`/guides/${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {relatedTools.length ? (
        <div className="card" style={{ marginTop: 24 }}>
          <h3>Related tools</h3>
          <div className="popular-links">
            {relatedTools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}