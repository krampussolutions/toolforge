import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, toolPages } from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";

function getPage(slug: string) {
  return programmaticPages.find((item) => item?.slug === slug);
}

function categoryLabel(category: string) {
  return category.toLowerCase();
}

function getGuideTitle(page: { title: string }) {
  return `${page.title} Guide | UtilHubX`;
}

function getGuideDescription(page: {
  title: string;
  description: string;
  category: string;
}) {
  return `${page.title} guide on UtilHubX explains when to use this workflow, how it works, common mistakes to avoid, and where to complete it online with the right ${page.category.toLowerCase()} tool.`;
}

function getUseCases(
  pageTitle: string,
  category: string,
  relatedToolTitle?: string
) {
  const lowerCategory = categoryLabel(category);
  const lowerTitle = pageTitle.toLowerCase();

  return [
    `Use ${lowerTitle} when you want a clearer explanation before starting a ${lowerCategory} task online.`,
    `This is helpful when you are comparing workflows, checking which tool to use, or trying to avoid mistakes before entering real values, text, or files.`,
    relatedToolTitle
      ? `It is especially useful if you plan to use the ${relatedToolTitle} tool and want to understand the workflow first.`
      : `It also helps you move faster once you are ready to open the matching UtilHubX tool.`,
  ];
}

function getWorkflowSteps(
  pageTitle: string,
  relatedToolTitle?: string,
  category?: string
) {
  const lowerTitle = pageTitle.toLowerCase();
  const lowerCategory = category ? categoryLabel(category) : "tool";

  return [
    `Review what ${lowerTitle} is meant to do and confirm it matches your exact task.`,
    `Gather the text, values, dates, image, PDF, or other input you plan to use.`,
    relatedToolTitle
      ? `Open the ${relatedToolTitle} tool when you are ready to complete the workflow.`
      : `Open the matching UtilHubX tool when you are ready to complete the workflow.`,
    `Check the result carefully before copying, downloading, sharing, or submitting it.`,
    `If your task is slightly different, compare related ${lowerCategory} pages before starting over.`,
  ];
}

function getMistakesSection(
  pageTitle: string,
  category: string,
  relatedToolTitle?: string
) {
  const lowerTitle = pageTitle.toLowerCase();
  const lowerCategory = categoryLabel(category);

  return [
    `Starting ${lowerTitle} without confirming that it is the right ${lowerCategory} workflow for your exact task.`,
    "Pasting, uploading, or entering incomplete content before checking the final input.",
    relatedToolTitle
      ? `Using the ${relatedToolTitle} tool too early before you know what result you actually need.`
      : "Jumping into a tool before deciding what output format or result you need.",
    "Skipping a final review before copying, downloading, printing, or submitting the result.",
  ];
}

function getFaq(
  page: {
    title: string;
    category: string;
    description: string;
  },
  relatedTool?: { title: string; slug: string }
) {
  return [
    {
      q: `What is ${page.title}?`,
      a: `${page.title} is a guide that explains the workflow, when to use it, and how to move to the right UtilHubX tool for the actual task.`,
    },
    {
      q: `Where do I complete ${page.title.toLowerCase()}?`,
      a: relatedTool
        ? `The main place to complete this workflow is the ${relatedTool.title} tool on UtilHubX. This guide explains the task first, then points you to the tool.`
        : "Use the related tool links on this page to continue to the best matching browser-based workflow.",
    },
    {
      q: `Who is this guide for?`,
      a: `This guide is for people who want a quick explanation of a ${page.category.toLowerCase()} workflow before using the actual tool online.`,
    },
    {
      q: `Why use a guide page instead of going straight to the tool?`,
      a: "A guide page helps you understand the workflow, avoid mistakes, and choose the right tool before you start.",
    },
    {
      q: `Can I use the matching tool on mobile?`,
      a: "Yes. UtilHubX tools are designed for browser-based use on desktop and mobile devices.",
    },
  ];
}

export function generateStaticParams() {
  return programmaticPages
    .filter((item) => item?.slug)
    .map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const page = getPage(params.slug);
  if (!page) return {};

  const title = getGuideTitle(page);
  const description = getGuideDescription(page);

  return {
    title,
    description,
    robots: { index: page.indexable ?? false, follow: true },
    alternates: {
      canonical: `${SITE_URL}/guides/${page.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/guides/${page.slug}`,
      siteName: "UtilHubX",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
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
    .filter((p) => p?.category === page.category && p?.slug !== page.slug)
    .slice(0, 6);

  const relatedTools = toolPages
    .filter(
      (t) =>
        t.category === page.category &&
        (!relatedTool || t.slug !== relatedTool.slug)
    )
    .slice(0, 6);

  const useCases = getUseCases(page.title, page.category, relatedTool?.title);
  const workflowSteps = getWorkflowSteps(
    page.title,
    relatedTool?.title,
    page.category
  );
  const commonMistakes = getMistakesSection(
    page.title,
    page.category,
    relatedTool?.title
  );
  const faq = getFaq(page, relatedTool);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
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
    mainEntity: faq.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
      />

      <span className="kicker">{page.category}</span>
      <h1 className="page-title">{page.title}</h1>
      <p className="page-intro">{page.description}</p>

      <section className="section">
        <div className="card copy">
          <h2>What this {page.title.toLowerCase()} guide explains</h2>
          <p>
            This guide explains what {page.title.toLowerCase()} means, when
            people usually need it, and how to choose the right UtilHubX
            workflow for the job.
          </p>
          <p>
            It is designed to help you understand the task before entering real
            values, text, dates, images, PDFs, or other input into the main
            tool.
          </p>
          <p>
            If you already know exactly what you need, you can jump to the main
            tool below. If not, use this page to get oriented first and avoid
            unnecessary trial and error.
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

      <section className="section">
        <div className="card">
          <h2>How {page.title.toLowerCase()} usually works</h2>
          <ol>
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="card copy">
          <h2>Why people search for {page.title.toLowerCase()}</h2>
          <p>
            Many visitors search for {page.title.toLowerCase()} because they do
            not just want a tool. They also want a quick explanation of the
            workflow, what result to expect, and which page to use next.
          </p>
          <p>
            That is especially common for image tools, PDF workflows,
            calculators, date utilities, and text tools where the names can be
            similar but the actual jobs are different.
          </p>
          <p>
            This guide helps bridge that gap by explaining the task first and
            then sending you to the right browser-based utility.
          </p>
        </div>
      </section>

      {relatedTool ? (
        <section className="section">
          <div className="card">
            <h2>Open the main tool for {page.title.toLowerCase()}</h2>
            <p>
              The best place to complete this workflow is the {relatedTool.title}{" "}
              tool. Use it when you are ready to enter your values, upload a
              file, paste text, or generate the final result.
            </p>
            <div className="popular-links">
              <Link href={`/tools/${relatedTool.slug}`}>{relatedTool.title}</Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="card">
          <h2>Common mistakes to avoid</h2>
          <ul>
            {commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card copy">
          <h2>How to get better results</h2>
          <p>
            Before using the tool, make sure your content, values, dates, or
            files are already close to final. That makes the output easier to
            trust and reduces rework.
          </p>
          <p>
            If the result you need is not exactly what you expected, compare the
            related tools and guides on this page before starting over. In many
            cases, the correct workflow is only one step away.
          </p>
        </div>
      </section>

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
            <h2>More guides in this topic</h2>
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
          <h2>{page.title} questions and answers</h2>
          {faq.map((entry) => (
            <div key={entry.q} style={{ marginBottom: 18 }}>
              <h3>{entry.q}</h3>
              <p>{entry.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}