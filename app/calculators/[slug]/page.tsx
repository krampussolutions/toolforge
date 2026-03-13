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
  const description = `${suite.title} on UtilHubX brings together free browser-based ${suite.shortTitle.toLowerCase()} workflows, calculators, and related tools for faster everyday use.`;

  return {
    title: `${suite.title} | Free Online ${suite.shortTitle} | UtilHubX`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${suite.title} | Free Online ${suite.shortTitle} | UtilHubX`,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${suite.title} | Free Online ${suite.shortTitle} | UtilHubX`,
      description,
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

      <section className="section">
        <div className="card copy">
          <h2>Why use the {suite.title} page</h2>
          <p>
            {suite.title} groups related browser-based workflows into one place so visitors can compare similar options without opening a dozen tabs or searching again. This is useful when you know the topic, such as finance, health, PDF, or image work, but still want to see which exact tool fits best.
          </p>
          <p>
            Instead of treating every tool as an isolated page, UtilHubX uses landing pages like this one to create a clearer path from general intent to specific action. That makes the site easier to use for both first-time visitors and repeat users who want a quick starting point.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>{suite.title} available on UtilHubX</h2>
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
          <h2>How {suite.shortTitle.toLowerCase()} workflows help visitors</h2>
          <p>
            Use these {suite.shortTitle.toLowerCase()} on UtilHubX to complete common tasks quickly in your browser without installing software. Whether you are estimating payments, converting files, cleaning up text, or handling quick daily calculations, grouped landing pages make it easier to find the right workflow faster.
          </p>
          <p>
            They also reduce confusion by keeping related tools together. That is helpful when your first choice is close, but not perfect, and you need to compare one more option before starting.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Popular ways people use {suite.shortTitle.toLowerCase()} pages</h2>
          <ul>
            <li>Compare related tools before choosing the best match.</li>
            <li>Move from a broad search query to a specific workflow quickly.</li>
            <li>Keep several nearby options in one place for repeat use.</li>
            <li>Open browser-based utilities without extra downloads or setup.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>{suite.title} frequently asked questions</h2>
          <div style={{ marginBottom: 18 }}>
            <h3>What is the difference between a suite page and a tool page?</h3>
            <p>
              A suite page groups related options together. A tool page is where you complete one specific task.
            </p>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3>Should I start here?</h3>
            <p>
              Start here if you want to compare options. Go directly to a tool if you already know the exact workflow you need.
            </p>
          </div>
          <div>
            <h3>Can I use these tools on desktop and mobile?</h3>
            <p>
              Yes. UtilHubX is designed around quick browser-based experiences that work across common devices.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
