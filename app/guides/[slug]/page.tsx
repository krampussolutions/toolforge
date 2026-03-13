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

  const description = `${page.title} on UtilHubX is a guide page that explains the workflow, points you to the matching tool, and helps you complete this ${page.category.toLowerCase()} task faster online.`;

  return {
    title: `${page.title} Guide | UtilHubX`,
    description,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${SITE_URL}/guides/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} Guide | UtilHubX`,
      description,
      url: `${SITE_URL}/guides/${page.slug}`,
      siteName: "UtilHubX",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} Guide | UtilHubX`,
      description,
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
          text: `This guide is for people who want a quick explanation of the workflow before using a ${page.category.toLowerCase()} tool online.`,
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
      <h1 className="page-title">{page.title}</h1>
      <p className="page-intro">{page.description}</p>

      <section className="section">
        <div className="card copy">
          <h2>What the {page.title} guide covers</h2>
          <p>
            This guide page is designed to explain the workflow behind {page.title.toLowerCase()} in plain language before you open the main tool. It helps visitors understand what the task means, when it is useful, and which UtilHubX page is the best place to finish the job.
          </p>
          <p>
            Many people land on guide-style pages while searching for a quick explanation, a comparison point, or a simpler entry path into a browser-based tool. This page exists to make that jump easier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>When to use {page.title.toLowerCase()}</h2>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {relatedTool ? (
        <section className="section">
          <div className="card">
            <h2>Open the main tool for {page.title.toLowerCase()}</h2>
            <p>
              The best place to complete this workflow is the {relatedTool.title} page. Use it when you are ready to enter your values, upload a file, or generate the final result.
            </p>
            <div className="popular-links">
              <Link href={`/tools/${relatedTool.slug}`}>{relatedTool.title}</Link>
            </div>
          </div>
        </section>
      ) : null}

      {relatedTools.length ? (
        <section className="section">
          <div className="card">
            <h2>Related {page.category.toLowerCase()} tools</h2>
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

      {similarPages.length ? (
        <section className="section">
          <div className="card">
            <h2>More guides like {page.title.toLowerCase()}</h2>
            <div className="popular-links">
              {similarPages.map((item) => (
                <Link key={item.slug} href={`/guides/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="card">
          <h2>{page.title} guide questions</h2>
          <div style={{ marginBottom: 18 }}>
            <h3>Does this page complete the task for me?</h3>
            <p>
              No. This page explains the workflow and points you to the matching tool. Use the related tool link above when you are ready to complete the task.
            </p>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3>Why not go straight to the tool?</h3>
            <p>
              Many visitors want a quick explanation first. Guide pages help clarify the job before you start using the tool itself.
            </p>
          </div>
          <div>
            <h3>Can I use the main tool on mobile?</h3>
            <p>
              Yes. UtilHubX tools are designed for quick browser-based use on desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
