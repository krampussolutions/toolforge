import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, toolPages } from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";

function getPage(slug: string) {
  return programmaticPages.find((item) => item.slug === slug);
}

function categoryLabel(category: string) {
  return category.toLowerCase();
}

function getUseCases(pageTitle: string, category: string) {
  return [
    `Use ${pageTitle.toLowerCase()} when you want a faster way to handle routine ${categoryLabel(category)} work in the browser.`,
    `This page is useful when you need a quick starting point before opening the main tool and entering your real values or files.`,
    `It also helps visitors compare similar tasks, understand what the tool does, and jump to nearby pages in the same topic cluster.`,
  ];
}

export function generateStaticParams() {
  return programmaticPages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const page = getPage(params.slug);
  if (!page) return {};

  return {
    title: `${page.title} | UtilHubX`,
    description: page.description,
    alternates: {
      canonical: `${SITE_URL}/guides/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | UtilHubX`,
      description: page.description,
      url: `${SITE_URL}/guides/${page.slug}`,
      siteName: "UtilHubX",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | UtilHubX`,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${page.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${page.title} is a guide page that helps visitors understand the task, find the right workflow, and open the matching UtilHubX tool faster.`,
        },
      },
      {
        "@type": "Question",
        name: `Where should I complete ${page.title.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: relatedTool
            ? `The main place to complete this task is the ${relatedTool.title} tool on UtilHubX.`
            : "Use the related tool links on this page to continue to the best matching browser-based workflow.",
        },
      },
      {
        "@type": "Question",
        name: `Who is this page for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `This page is for people who want a quick explanation, nearby related pages, and a direct path to practical ${categoryLabel(page.category)} tools.`,
        },
      },
    ],
  };

  const useCases = getUseCases(page.title, page.category);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <span className="kicker">{page.category}</span>
      <h1 className="page-title" style={{ marginTop: 14 }}>
        {page.title}
      </h1>
      <p className="page-intro">{page.description}</p>

      <div className="card copy">
        <h2>What this page helps you do</h2>
        <p>
          {page.title} is designed for visitors who want to understand the task
          before jumping straight into the working tool. Instead of landing on a
          thin doorway page with almost no context, you get a clearer overview
          of the job, a direct route to the matching utility, and nearby links
          that help you keep moving if your task changes slightly.
        </p>
        <p>
          This is especially useful for people searching broad phrases like
          “online,” “calculator,” or “converter” and then deciding which exact
          workflow fits their situation. UtilHubX uses these guide pages to make
          the path from search intent to useful action much faster.
        </p>

        {relatedTool ? (
          <p style={{ marginTop: 16 }}>
            <Link className="button" href={`/tools/${relatedTool.slug}`}>
              Open {relatedTool.title}
            </Link>
          </p>
        ) : null}
      </div>

      <section className="section">
        <div className="card">
          <h2>How to use this guide</h2>
          <ol>
            <li>Read the short overview to confirm you are on the right task.</li>
            <li>Open the matching tool if you are ready to calculate, convert, or format.</li>
            <li>Use the related pages below if your job is similar but not identical.</li>
            <li>Return to the parent landing page if you want to compare several options in the same topic area.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>When this page is useful</h2>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Because this page sits inside a larger content cluster, it also
            helps searchers discover related workflows without having to run a
            new search. That improves navigation for people comparing tool types,
            file formats, calculators, and similar browser-based tasks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Related pages and next steps</h2>
          <p>
            Start with the direct tool if you already know what you need. Use
            the parent landing page if you want to browse multiple {categoryLabel(page.category)}
            options in one place. The nearby links below are also helpful when a
            search query is close to your goal but not perfectly matched.
          </p>
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
      </section>

      {relatedTools.length ? (
        <section className="section">
          <div className="card">
            <h2>Related tools</h2>
            <p>
              These tools cover similar jobs in the same topic area and are a
              good next step when you want to compare methods or complete a
              slightly different task.
            </p>
            <div className="popular-links">
              {relatedTools.map((tool) => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="card">
          <h2>Frequently asked questions</h2>
          <div style={{ marginBottom: 18 }}>
            <h3>Is this the actual tool?</h3>
            <p>
              This page is a guide and navigation page. The main action happens
              inside the related UtilHubX tool linked above.
            </p>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3>Why not go directly to the tool every time?</h3>
            <p>
              Many visitors search broad phrases first. This page adds enough
              context to confirm intent, reduce confusion, and help people find
              the best matching workflow faster.
            </p>
          </div>
          <div>
            <h3>What should I do next?</h3>
            <p>
              Open the main tool, compare a few related pages, or browse the
              parent section to find another browser-based option that better
              fits your task.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
