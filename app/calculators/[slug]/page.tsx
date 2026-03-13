import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";
import { suites, toolPages, SITE_URL } from "@/lib/site";

function getSuite(slug: string) {
  return suites.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return suites.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const suite = getSuite(params.slug);
  if (!suite) return {};

  const url = `${SITE_URL}/calculators/${suite.slug}`;

  return {
    title: `${suite.title} | UtilHubX`,
    description: suite.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${suite.title} | UtilHubX`,
      description: suite.description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${suite.title} | UtilHubX`,
      description: suite.description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const suite = getSuite(params.slug);
  if (!suite) notFound();

  const pages = toolPages.filter((p) => p.parent === suite.slug);

  return (
    <section>
      <h1 className="page-title">{suite.title}</h1>
      <p className="page-intro">{suite.description}</p>

      <section>
        <h2>Tools in {suite.shortTitle}</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard
              key={item.slug}
              href={`/tools/${item.slug}`}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>How these tools help</h2>
        <p>
          Use these {suite.shortTitle.toLowerCase()} on UtilHubX to complete
          common tasks quickly in your browser without installing software.
        </p>
      </section>

      <section>
        <h2>Popular uses</h2>
        <p>
          These tools are useful for everyday work, school, personal planning,
          document handling, image editing, and quick calculations.
        </p>
      </section>
    </section>
  );
}