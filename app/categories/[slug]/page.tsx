import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";
import {
  categoryDescriptions,
  toolPages,
  categories,
  toSlug,
  SITE_URL,
  suites,
} from "@/lib/site";

function slugToCategory(slug: string) {
  return categories.find((c) => toSlug(c) === slug);
}

function categoryUsageCopy(category: string) {
  return {
    intro: `Browse ${category.toLowerCase()} tools on UtilHubX to compare related workflows in one place. This section groups similar tools together so people can move from search to action with less friction.`,
    help: `These ${category.toLowerCase()} pages are useful when you want to compare several tools, learn what each one does, and choose the fastest route for the task in front of you.`,
    examples: [
      `Compare several ${category.toLowerCase()} tools before deciding which one best matches your exact task.`,
      `Open a browser-based workflow quickly without installing extra software.`,
      `Use related links to move between nearby jobs in the same topic area.`,
    ],
  };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: toSlug(c) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = slugToCategory(params.slug);
  if (!category) return {};
  const url = `${SITE_URL}/categories/${toSlug(category)}`;
  const description = `${category} tool category pages on UtilHubX help visitors compare related browser-based workflows, utilities, and calculators before opening a specific tool.`;

  return {
    title: `${category} Category`,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: `${category} Category`,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category} Category`,
      description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const category = slugToCategory(params.slug);
  if (!category) notFound();

  const pages = toolPages.filter((p) => p.category === category);
  const matchingSuites = suites.filter((suite) => suite.category === category);
  const copy = categoryUsageCopy(category);

  return (
    <section>
      <h1 className="page-title">{category} Tools</h1>
      <p className="page-intro">
        {categoryDescriptions[category] || `Browse ${category.toLowerCase()} tools.`}
      </p>

      <section className="section">
        <div className="card copy">
          <h2>Why browse the {category} category</h2>
          <p>{copy.intro}</p>
          <p>{copy.help}</p>
        </div>
      </section>

      <section className="section">
        <h2>{category} tools in this category</h2>
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

      <section className="section">
        <div className="card">
          <h2>Common uses for {category.toLowerCase()} tools</h2>
          <ul>
            {copy.examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Category pages work well for visitors who know the topic they want but are still deciding which exact tool, calculator, converter, or formatter best fits the job.
          </p>
        </div>
      </section>

      {matchingSuites.length ? (
        <section className="section">
          <div className="card">
            <h2>Landing pages related to {category.toLowerCase()} workflows</h2>
            <p>
              These broader landing pages group the same topic into a more guided browsing experience with additional context and related workflows.
            </p>
            <div className="popular-links">
              {matchingSuites.map((suite) => (
                <a key={suite.slug} href={`/calculators/${suite.slug}`}>
                  {suite.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="card">
          <h2>{category} category questions</h2>
          <div style={{ marginBottom: 18 }}>
            <h3>What is included in this category?</h3>
            <p>
              This section includes browser-based {category.toLowerCase()} tools and closely related workflows published on UtilHubX.
            </p>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3>Should I start with a category page or a single tool?</h3>
            <p>
              Start here if you want to compare options. Open a single tool page if you already know the exact job you need to complete.
            </p>
          </div>
          <div>
            <h3>Why are there related landing pages too?</h3>
            <p>
              Some visitors prefer broader landing pages that bundle similar tools together. Those pages can be a better fit when you want more guidance before picking a tool.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
