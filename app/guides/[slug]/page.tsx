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

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/guides/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/guides/${page.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) notFound();
  const relatedTool = toolPages.find((t) => t.slug === page.relatedTool);
  const similarPages = programmaticPages.filter((p) => p.category === page.category && p.slug !== page.slug).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: `${SITE_URL}/guides/${page.slug}`,
    mainEntityOfPage: `${SITE_URL}/guides/${page.slug}`,
  };

  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <span className="kicker">{page.category}</span>
      <h1 className="page-title" style={{ marginTop: 14 }}>{page.title}</h1>
      <p className="page-intro">{page.description}</p>

      <div className="card copy">
        <h3>Best way to use this page</h3>
        <p>
          This page is meant to help people searching for a specific variation of a tool quickly get to the working version.
          It also helps search engines understand how UtilHubX covers related topics within the same tool cluster.
        </p>
        {relatedTool ? (
          <p style={{ marginTop: 16 }}>
            <Link className="button" href={`/tools/${relatedTool.slug}`}>Open {relatedTool.title}</Link>
          </p>
        ) : null}
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h3>More related pages</h3>
        <div className="popular-links">
          <Link href={page.parentLanding}>Parent landing page</Link>
          {relatedTool ? <Link href={`/tools/${relatedTool.slug}`}>Working tool</Link> : null}
          {similarPages.map((item) => <Link key={item.slug} href={`/guides/${item.slug}`}>{item.title}</Link>)}
        </div>
      </div>
    </section>
  );
}
