import Link from "next/link";
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
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";

function slugToCategory(slug: string) {
  return categories.find((c) => toSlug(c) === slug);
}

function categoryUsageCopy(category: string) {
  const copy: Record<
    string,
    {
      intro: string;
      help: string;
      examples: string[];
      choose: string;
    }
  > = {
    Image: {
      intro:
        "Browse image tools on UtilHubX to compare compression, resizing, cropping, and image conversion workflows in one place. This category is useful when you need to prepare images for websites, forms, email, social posts, or everyday uploads.",
      help:
        "Image tools are often closely related, but each one solves a different problem. Some reduce file size, some change image dimensions, and others convert one format into another for compatibility or editing.",
      examples: [
        "Compress images before uploading them to a website or attaching them to an email.",
        "Resize photos or graphics for forms, profile images, product listings, or social posts.",
        "Convert JPG, PNG, WEBP, SVG, and similar formats for easier sharing or compatibility.",
      ],
      choose:
        "Start with compression if your file is too large, resizing if the dimensions are wrong, and conversion if the platform requires a different image format.",
    },
    PDF: {
      intro:
        "Browse PDF tools on UtilHubX to compare merging, splitting, rotating, reordering, and page-count workflows in one place. This category is useful for contracts, forms, scanned files, school documents, and office tasks.",
      help:
        "PDF workflows often sound similar, but the result you need matters. Merge combines files, split extracts pages, rotate fixes page direction, and reorder changes page sequence.",
      examples: [
        "Merge several PDF files into one document before sharing or uploading.",
        "Split a large PDF into smaller sections or extract selected pages.",
        "Rotate or reorder scanned PDF pages to fix document layout before sending.",
      ],
      choose:
        "Pick the PDF tool based on the final output you need. If the file structure is wrong, use split, merge, rotate, delete, or reorder instead of trying to force the wrong workflow.",
    },
    Finance: {
      intro:
        "Browse finance tools on UtilHubX to compare loan, mortgage, savings, ROI, and debt payoff calculators in one place. This category is useful for planning payments, comparing borrowing scenarios, and estimating future costs.",
      help:
        "Finance tools help you review common money questions quickly without building your own spreadsheet first. They are useful for rough planning and side-by-side comparisons.",
      examples: [
        "Estimate loan or mortgage payments before applying.",
        "Compare savings growth, compound interest, and return on investment scenarios.",
        "Estimate how long credit card debt may take to pay off at different payment levels.",
      ],
      choose:
        "Choose the finance calculator that matches your goal: borrowing, saving, investing, or debt payoff. That usually gives a more useful estimate than using a general tool.",
    },
    Health: {
      intro:
        "Browse health tools on UtilHubX to compare BMI, calorie, protein, and water-intake calculators in one place. This category is useful for quick wellness estimates and everyday planning.",
      help:
        "Health calculators are best used for quick reference and planning. They can help you estimate general targets, but they are not a replacement for professional medical advice.",
      examples: [
        "Estimate BMI using height and weight.",
        "Check daily calorie needs for maintenance or weight goals.",
        "Review protein and water targets for everyday planning.",
      ],
      choose:
        "Use the tool that matches the specific estimate you need instead of expecting one health calculator to answer every question.",
    },
    "Date and Time": {
      intro:
        "Browse date and time tools on UtilHubX to compare age calculations, date differences, business days, countdowns, work hours, and timestamp conversion workflows in one place.",
      help:
        "Date tools are useful for deadlines, payroll, planning, scheduling, reporting windows, and any task that depends on accurate date math.",
      examples: [
        "Count days, weeks, or business days between two dates.",
        "Calculate age in years, months, and days from a birth date.",
        "Track time until a future event or estimate total hours worked.",
      ],
      choose:
        "Use raw day counts for calendar gaps, business days for weekday planning, and age or countdown tools when the output needs to match a more specific real-world use case.",
    },
    Writing: {
      intro:
        "Browse writing tools on UtilHubX to compare word count, case conversion, text cleanup, readability, and formatting workflows in one place. This category is useful for essays, blog posts, emails, SEO tasks, and copied text cleanup.",
      help:
        "Writing tools help with different parts of the editing process. Some count text, some clean formatting, and others improve readability or capitalization.",
      examples: [
        "Count words, characters, sentences, and paragraphs in a draft.",
        "Convert text to uppercase, lowercase, title case, or sentence case.",
        "Remove line breaks, extra spaces, and other formatting issues from copied text.",
      ],
      choose:
        "Start with the writing problem you need to solve first, like word count, text cleanup, or readability, then move to related tools if needed.",
    },
    Conversion: {
      intro:
        "Browse conversion tools on UtilHubX to compare common measurement and unit conversions in one place. This category is useful for school, work, travel, shopping, and everyday reference.",
      help:
        "Conversion tools help you move quickly between measurement systems without manual math. That is useful when you need a quick answer and do not want to risk a calculation mistake.",
      examples: [
        "Convert feet to meters and kilograms to pounds.",
        "Switch between everyday measurement systems for work or school.",
        "Use simple browser-based conversions for fast reference.",
      ],
      choose:
        "Pick the conversion tool that matches the exact unit pair you need. That is usually faster than starting with a more general page.",
    },
    Business: {
      intro:
        "Browse business tools on UtilHubX to compare sales tax, discounts, break-even calculations, and pricing-related workflows in one place. This category is useful for quotes, invoices, pricing decisions, and basic business math.",
      help:
        "Business tools help you estimate totals and compare scenarios before you send a quote, set a price, or review margins and costs.",
      examples: [
        "Calculate sales tax and final totals for purchases, invoices, and quotes.",
        "Review discount pricing before publishing an offer or promotion.",
        "Estimate break-even point for a product, service, or business plan.",
      ],
      choose:
        "Use the tool that matches the pricing or cost question in front of you instead of trying to adapt a general-purpose calculator.",
    },
    Utility: {
      intro:
        "Browse utility tools on UtilHubX to compare generators, validators, encoders, decoders, randomizers, and other quick browser-based workflows in one place.",
      help:
        "Utility tools cover fast everyday tasks that do not fit neatly into one topic area. They are useful when you want a simple answer without opening extra software.",
      examples: [
        "Generate passwords, UUIDs, and random values quickly.",
        "Encode, decode, and transform text for technical or everyday workflows.",
        "Use quick browser-based tools for formatting, color, and utility tasks.",
      ],
      choose:
        "Choose the utility tool based on the exact output you need, since these workflows are usually narrow and task-specific.",
    },
  };

  return (
    copy[category] ?? {
      intro: `Browse ${category.toLowerCase()} tools on UtilHubX to compare related workflows in one place.`,
      help: `These ${category.toLowerCase()} tools help visitors compare related browser-based workflows and choose the best fit for a specific task.`,
      examples: [
        `Compare several ${category.toLowerCase()} tools before choosing one.`,
        "Open a browser-based workflow quickly without extra software.",
        "Use related links to move between nearby jobs in the same topic area.",
      ],
      choose: `Choose the ${category.toLowerCase()} tool that most closely matches the exact task you need to complete.`,
    }
  );
}

function getFeaturedTools(category: string) {
  const map: Record<string, string[]> = {
    Image: [
      "compress-image",
      "resize-image",
      "jpg-to-png",
      "png-to-jpg",
      "webp-to-png",
      "image-resizer-by-kb",
    ],
    PDF: [
      "merge-pdf",
      "split-pdf",
      "rotate-pdf",
      "delete-pdf-pages",
      "reorder-pdf-pages",
      "pdf-page-counter",
    ],
    Finance: [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "savings-calculator",
      "roi-calculator",
      "credit-card-payoff-calculator",
    ],
    Health: [
      "bmi-calculator",
      "calorie-calculator",
      "protein-calculator",
      "water-intake-calculator",
    ],
    "Date and Time": [
      "age-calculator",
      "days-between-dates",
      "business-days-calculator",
      "weeks-between-dates",
      "countdown-calculator",
      "hours-worked-calculator",
    ],
    Writing: [
      "word-counter",
      "case-converter",
      "remove-line-breaks",
      "slug-generator",
      "reading-level-checker",
      "remove-extra-spaces",
    ],
    Conversion: ["unit-converter", "feet-to-meters", "kg-to-lbs"],
    Business: [
      "sales-tax-calculator",
      "discount-calculator",
      "break-even-calculator",
    ],
    Utility: [
      "percentage-calculator",
      "password-generator",
      "json-formatter",
      "uuid-generator",
      "password-strength-checker",
      "list-randomizer",
    ],
  };

  return map[category] ?? [];
}

function getCategoryFaq(category: string) {
  const copy: Record<string, { q: string; a: string }[]> = {
    Image: [
      {
        q: "What can image tools help with?",
        a: "Image tools help with compression, resizing, cropping, and format conversion for websites, forms, email, and everyday uploads.",
      },
      {
        q: "Which image tool should I use first?",
        a: "Start with image compression if your file is too large, resizing if dimensions are wrong, and conversion if you need a different image format.",
      },
      {
        q: "Can I use these image tools on mobile?",
        a: "Yes. UtilHubX image tools are browser-based and designed to work on desktop and mobile devices.",
      },
    ],
    PDF: [
      {
        q: "What can PDF tools help with?",
        a: "PDF tools help you merge, split, rotate, reorder, and inspect PDF files directly in the browser.",
      },
      {
        q: "How do I know which PDF tool I need?",
        a: "Choose based on the final result you want. Merge combines files, split extracts pages, rotate fixes direction, delete removes pages, and reorder changes page sequence.",
      },
      {
        q: "Are these PDF tools useful for forms and scanned files?",
        a: "Yes. They are useful for scanned packets, reports, contracts, school documents, and office workflows.",
      },
    ],
    Writing: [
      {
        q: "What can writing tools help with?",
        a: "Writing tools help with word count, capitalization, text cleanup, readability, spacing, sorting, and other editing tasks.",
      },
      {
        q: "Which writing tools are most useful for content work?",
        a: "Word counter, case converter, reading level checker, remove line breaks, and remove extra spaces are some of the most useful starting points.",
      },
      {
        q: "Are writing tools useful for SEO and blog posts?",
        a: "Yes. They are useful for meta descriptions, readability checks, headline cleanup, copied-text cleanup, and general content editing.",
      },
    ],
  };

  return (
    copy[category] ?? [
      {
        q: `What is included in the ${category} category?`,
        a: `This section includes browser-based ${category.toLowerCase()} tools and closely related workflows published on UtilHubX.`,
      },
      {
        q: "Should I start with a category page or a single tool?",
        a: "Start with the category page if you want to compare options. Open a single tool page if you already know the exact job you need to complete.",
      },
      {
        q: "Why are there related landing pages too?",
        a: "Some visitors prefer broader landing pages that bundle similar tools together. Those pages can be a better fit when you want more guidance before picking a tool.",
      },
    ]
  );
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: toSlug(c) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = slugToCategory(params.slug);
  if (!category) return {};

  const url = `${SITE_URL}/categories/${toSlug(category)}`;
  const copy = categoryUsageCopy(category);
  const description =
    categoryDescriptions[category] ??
    `${category} category pages on UtilHubX help visitors compare related browser-based workflows and tools before opening a specific page.`;

  return {
    title: `${category} Tools | UtilHubX`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category} Tools | UtilHubX`,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category} Tools | UtilHubX`,
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
  const faq = getCategoryFaq(category);

  const featuredSlugs = getFeaturedTools(category);
  const featuredTools = featuredSlugs
    .map((slug) => toolPages.find((item) => item.slug === slug))
    .filter(Boolean);

  const relatedGuides = programmaticPages
    .filter((page) => page.indexable)
    .filter((page) => {
      const relatedTool = toolPages.find((tool) => tool.slug === page.relatedTool);
      return relatedTool?.category === category;
    })
    .slice(0, 8);

  const url = `${SITE_URL}/categories/${toSlug(category)}`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category} Tools`,
    description: categoryDescriptions[category],
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pages.slice(0, 12).map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.title,
        url: `${SITE_URL}/tools/${page.slug}`,
      })),
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
        dangerouslySetInnerHTML={{ __html: toJsonLd(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
      />

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

      {featuredTools.length ? (
        <section className="section">
          <div className="card">
            <h2>Best {category.toLowerCase()} tools to start with</h2>
            <p>
              These are some of the most useful tools in the {category.toLowerCase()} category for common everyday workflows.
            </p>
            <div className="grid grid-3" style={{ marginTop: 18 }}>
              {featuredTools.map((item) => (
                <CalculatorCard
                  key={item!.slug}
                  href={`/tools/${item!.slug}`}
                  title={item!.title}
                  category={item!.category}
                  description={item!.description}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
          <p>{copy.choose}</p>
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
                <Link key={suite.slug} href={`/calculators/${suite.slug}`}>
                  {suite.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedGuides.length ? (
        <section className="section">
          <div className="card">
            <h2>Guides related to {category.toLowerCase()} tools</h2>
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
        <div className="card copy">
          <h2>How to choose the right {category.toLowerCase()} tool</h2>
          <p>
            Start with the result you need, not just the first tool name that sounds close. Many tools in the same category are related, but they solve different problems.
          </p>
          <p>
            Choosing the right workflow first usually saves time and gives you a cleaner result, especially for image, PDF, writing, finance, and date-based tasks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>{category} category questions</h2>
          {faq.map((entry) => (
            <div key={entry.q} style={{ marginBottom: 18 }}>
              <h3>{entry.q}</h3>
              <p>{entry.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Browse more tool pages</h2>
          <div className="popular-links">
            <Link href="/tools">All Tools</Link>
            {matchingSuites.map((suite) => (
              <Link key={suite.slug} href={`/calculators/${suite.slug}`}>
                {suite.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}