import Link from "next/link";
import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";
import {
  suites,
  toolPages,
  SITE_URL,
  categoryDescriptions,
  toSlug,
} from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";

function getSuite(slug: string) {
  return suites.find((s) => s.slug === slug);
}

function getSuiteIntro(slug: string) {
  const copy: Record<string, string> = {
    "image-tools":
      "Browse image tools for compression, resizing, cropping, and file conversion. These tools are useful for website images, email attachments, forms, profile uploads, and everyday image cleanup.",
    "pdf-tools":
      "Browse PDF tools for merging, splitting, rotating, reordering, and page counting. These workflows are useful for forms, contracts, reports, scanned files, and everyday document tasks.",
    "finance-calculators":
      "Browse finance calculators for loans, mortgages, car payments, savings, ROI, and credit card payoff planning. These tools are useful for comparing scenarios before you borrow, save, or invest.",
    "health-calculators":
      "Browse health calculators for BMI, calorie needs, protein intake, and water goals. These tools are useful for quick estimates and everyday wellness planning.",
    "date-time-tools":
      "Browse date and time tools for age calculations, days between dates, business days, countdowns, work hours, and timestamp conversion. These tools help with scheduling, planning, payroll, and everyday date math.",
    "text-tools":
      "Browse text tools for word count, case conversion, readability, text cleanup, and other writing workflows. These tools are useful for essays, blog posts, email drafts, SEO work, and copied text cleanup.",
    "conversion-tools":
      "Browse conversion tools for length, weight, temperature, and other everyday unit conversions. These tools are useful for school, work, travel, shopping, and quick reference tasks.",
    "business-tools":
      "Browse business tools for sales tax, break-even analysis, pricing, discounts, and profit-related calculations. These tools are useful for quotes, invoices, product pricing, and everyday business math.",
    "everyday-tools":
      "Browse everyday tools like password generators, encoders, decoders, validators, and randomizers. These browser-based utilities help with quick tasks that come up across work, school, and daily life.",
  };

  return copy[slug];
}

function getSuiteUseCases(slug: string) {
  const copy: Record<string, string[]> = {
    "image-tools": [
      "Compress images before uploading them to a website or sending them by email.",
      "Resize photos and graphics for forms, profile pictures, or social posts.",
      "Convert between JPG, PNG, WEBP, SVG, and other common image formats.",
      "Prepare cleaner image files for sharing, design handoff, or web publishing.",
    ],
    "pdf-tools": [
      "Merge multiple PDF files into one document before sharing or uploading.",
      "Split large PDF files into smaller sections or extract selected pages.",
      "Rotate or reorder PDF pages after scanning or combining documents.",
      "Check page counts before submission, printing, or editing.",
    ],
    "finance-calculators": [
      "Estimate monthly payments before applying for a loan or mortgage.",
      "Compare repayment, savings, ROI, and payoff scenarios side by side.",
      "See how interest rate and term length affect total cost.",
      "Use quick finance math without building your own spreadsheet first.",
    ],
    "health-calculators": [
      "Check BMI using height and weight for a quick body-mass estimate.",
      "Estimate daily calorie needs for maintenance or weight goals.",
      "Review protein and water targets for everyday planning.",
      "Use fast reference calculations without switching between apps.",
    ],
    "date-time-tools": [
      "Count days, weeks, or business days between two dates.",
      "Calculate age from a birth date or other start date.",
      "Track time until a future event with a countdown.",
      "Estimate shift totals and work hours more quickly.",
    ],
    "text-tools": [
      "Count words, characters, sentences, and paragraphs in a draft.",
      "Convert text to uppercase, lowercase, title case, or sentence case.",
      "Clean text copied from PDFs, emails, and websites.",
      "Check readability, repetition, spacing, and other writing issues.",
    ],
    "conversion-tools": [
      "Convert common units for distance, weight, and everyday measurements.",
      "Use quick reference tools instead of calculating by hand.",
      "Check conversions for school, work, travel, or shopping.",
      "Move between metric and imperial values in seconds.",
    ],
    "business-tools": [
      "Calculate sales tax, discounts, and pricing totals.",
      "Estimate break-even point and basic business math scenarios.",
      "Check quote numbers before sending them to a customer.",
      "Use quick calculation tools without opening accounting software.",
    ],
    "everyday-tools": [
      "Generate passwords, UUIDs, and random values quickly.",
      "Encode, decode, and clean up common strings and text formats.",
      "Convert between utility formats like binary, HEX, and RGB.",
      "Handle quick browser tasks without extra software.",
    ],
  };

  return copy[slug] ?? [
    "Compare related tools before choosing the best fit.",
    "Use browser-based utilities for quick everyday tasks.",
    "Move from a broad category to the exact workflow you need.",
    "Keep related tools together for faster repeat use.",
  ];
}

function getSuiteFaq(slug: string, title: string, shortTitle: string) {
  const lowerShort = shortTitle.toLowerCase();

  const copy: Record<string, { q: string; a: string }[]> = {
    "image-tools": [
      {
        q: "What can I do with image tools?",
        a: "Image tools help with compression, resizing, cropping, and file conversion for websites, forms, email, and everyday sharing.",
      },
      {
        q: "Which image tool should I start with?",
        a: "Start with image compression if your file is too large, resizing if dimensions are wrong, and file conversion if you need a different image format.",
      },
      {
        q: "Can I use these image tools on mobile?",
        a: "Yes. These browser-based image tools are designed to work on desktop and mobile devices.",
      },
    ],
    "pdf-tools": [
      {
        q: "What can I do with PDF tools?",
        a: "PDF tools help you merge, split, rotate, reorder, and inspect PDF files directly in the browser.",
      },
      {
        q: "When should I use merge PDF instead of split PDF?",
        a: "Use merge PDF when you want to combine files together. Use split PDF when you want to extract pages or break a file into smaller sections.",
      },
      {
        q: "Are these PDF tools useful for forms and scanned files?",
        a: "Yes. They are especially useful for scanned packets, reports, contracts, forms, and school or office documents.",
      },
    ],
    "finance-calculators": [
      {
        q: "What can finance calculators help with?",
        a: "Finance calculators help you estimate payments, compare borrowing options, project savings, and review debt payoff scenarios.",
      },
      {
        q: "Are these official lender quotes?",
        a: "No. These are planning tools that help you compare scenarios before speaking with a lender or financial institution.",
      },
      {
        q: "Which finance calculator should I use first?",
        a: "Use the tool that matches your goal: loan calculator for general borrowing, mortgage calculator for home payments, and payoff tools for debt planning.",
      },
    ],
    "health-calculators": [
      {
        q: "What can health calculators estimate?",
        a: "Health calculators can estimate BMI, calorie needs, water intake, protein targets, and other everyday wellness figures.",
      },
      {
        q: "Are health calculator results exact?",
        a: "No. They are estimates designed for quick planning and reference, not a replacement for professional medical advice.",
      },
      {
        q: "Who uses these health calculators?",
        a: "People often use them for quick personal planning, fitness tracking, meal planning, and basic wellness estimates.",
      },
    ],
    "date-time-tools": [
      {
        q: "What can date and time tools help with?",
        a: "They help with age calculations, date differences, countdowns, work hours, business days, and timestamp conversions.",
      },
      {
        q: "Should I use days between dates or business days?",
        a: "Use days between dates for calendar days and business days when you want weekdays or workday-focused planning.",
      },
      {
        q: "Are these tools useful for scheduling and payroll?",
        a: "Yes. They are useful for deadlines, project timing, shift calculations, and general date-based planning.",
      },
    ],
    "text-tools": [
      {
        q: "What can text tools help with?",
        a: "Text tools help with word count, capitalization, text cleanup, readability, spacing, sorting, and other writing tasks.",
      },
      {
        q: "Which text tools are most useful for writers?",
        a: "Word counter, case converter, reading level checker, remove line breaks, and remove extra spaces are some of the most practical starting points.",
      },
      {
        q: "Are these tools useful for SEO and content work?",
        a: "Yes. Many of them are useful for blog writing, meta descriptions, readability checks, copied-text cleanup, and content formatting.",
      },
    ],
  };

  return (
    copy[slug] ?? [
      {
        q: `What is the ${title} page?`,
        a: `The ${title} page groups related ${lowerShort} together so you can compare options before opening a specific tool.`,
      },
      {
        q: "What is the difference between a suite page and a tool page?",
        a: "A suite page groups related options together. A tool page is where you complete one specific task.",
      },
      {
        q: "Can I use these tools on desktop and mobile?",
        a: "Yes. UtilHubX tools are designed around quick browser-based workflows that work across common devices.",
      },
    ]
  );
}

function getFeaturedTools(slug: string) {
  const map: Record<string, string[]> = {
    "image-tools": [
      "compress-image",
      "resize-image",
      "jpg-to-png",
      "png-to-jpg",
      "webp-to-png",
      "image-resizer-by-kb",
    ],
    "pdf-tools": [
      "merge-pdf",
      "split-pdf",
      "rotate-pdf",
      "delete-pdf-pages",
      "reorder-pdf-pages",
      "pdf-page-counter",
    ],
    "finance-calculators": [
      "loan-calculator",
      "mortgage-calculator",
      "car-payment-calculator",
      "compound-interest-calculator",
      "savings-calculator",
      "credit-card-payoff-calculator",
    ],
    "health-calculators": [
      "bmi-calculator",
      "calorie-calculator",
      "protein-calculator",
      "water-intake-calculator",
    ],
    "date-time-tools": [
      "age-calculator",
      "days-between-dates",
      "business-days-calculator",
      "weeks-between-dates",
      "countdown-calculator",
      "hours-worked-calculator",
    ],
    "text-tools": [
      "word-counter",
      "case-converter",
      "remove-line-breaks",
      "slug-generator",
      "reading-level-checker",
      "remove-extra-spaces",
    ],
    "conversion-tools": [
      "unit-converter",
      "feet-to-meters",
      "kg-to-lbs",
    ],
    "business-tools": [
      "sales-tax-calculator",
      "discount-calculator",
      "break-even-calculator",
    ],
    "everyday-tools": [
      "percentage-calculator",
      "password-generator",
      "json-formatter",
      "uuid-generator",
      "password-strength-checker",
      "list-randomizer",
    ],
  };

  return map[slug] ?? [];
}

export function generateStaticParams() {
  return suites.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const suite = getSuite(params.slug);
  if (!suite) return {};

  const url = `${SITE_URL}/calculators/${suite.slug}`;
  const description =
    getSuiteIntro(suite.slug) ??
    `${suite.title} on UtilHubX brings together free browser-based ${suite.shortTitle.toLowerCase()} workflows, calculators, and related tools for faster everyday use.`;

  return {
    title: `${suite.title} | UtilHubX`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${suite.title} | UtilHubX`,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${suite.title} | UtilHubX`,
      description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const suite = getSuite(params.slug);
  if (!suite) notFound();

  const pages = toolPages.filter((p) => p.parent === suite.slug);
  const featuredSlugs = getFeaturedTools(suite.slug);
  const featuredTools = featuredSlugs
    .map((slug) => toolPages.find((item) => item.slug === slug))
    .filter(Boolean);

  const relatedGuides = programmaticPages
    .filter((page) => page.indexable && page.parentLanding === `/${suite.slug}`)
    .slice(0, 8);

  const useCases = getSuiteUseCases(suite.slug);
  const faq = getSuiteFaq(suite.slug, suite.title, suite.shortTitle);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: suite.title,
    description: suite.description,
    url: `${SITE_URL}/calculators/${suite.slug}`,
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

      <h1 className="page-title">{suite.title}</h1>
      <p className="page-intro">
        {getSuiteIntro(suite.slug) ?? suite.description}
      </p>

      <section className="section">
        <div className="card copy">
          <h2>What you can do with {suite.title}</h2>
          <p>
            {categoryDescriptions[suite.category] ??
              `${suite.title} groups related browser-based tools into one place.`}
          </p>
          <p>
            This page helps people move from a broad search, like{" "}
            <strong>{suite.shortTitle.toLowerCase()}</strong>, to the exact tool
            they need. That is useful when you know the topic but still want to
            compare nearby workflows before starting.
          </p>
          <p>
            Instead of treating every tool as an isolated page, UtilHubX uses
            category landing pages like this one to create a cleaner path from
            general intent to specific action.
          </p>
        </div>
      </section>

      {featuredTools.length ? (
        <section className="section">
          <div className="card">
            <h2>Best {suite.shortTitle.toLowerCase()} to start with</h2>
            <p>
              These are some of the most useful tools in this section for common
              everyday workflows.
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
        <div className="card">
          <h2>Popular ways people use {suite.shortTitle.toLowerCase()}</h2>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card copy">
          <h2>Why use this page instead of opening a tool directly?</h2>
          <p>
            Start here when you want to compare related options before choosing
            a tool. That is helpful when your task is close to several different
            workflows and you want the best fit before you paste text, upload a
            file, or enter values.
          </p>
          <p>
            If you already know the exact tool you need, you can open it
            directly from this page. If not, this section gives you a faster way
            to narrow your options.
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

      {relatedGuides.length ? (
        <section className="section">
          <div className="card">
            <h2>Guides related to {suite.title}</h2>
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
          <h2>How to choose the right {suite.shortTitle.toLowerCase()} tool</h2>
          <p>
            Pick the tool that matches the output you actually need, not just
            the first name that looks close. For example, in PDF workflows you
            may need to merge, split, rotate, or reorder pages, and each one
            solves a different problem.
          </p>
          <p>
            The same idea applies to text, image, finance, and date tools.
            Choosing the right workflow first usually saves time and avoids
            redoing the task.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>{suite.title} frequently asked questions</h2>
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
          <h2>Browse more categories</h2>
          <div className="popular-links">
            <Link href="/tools">All Tools</Link>
            <Link href={`/categories/${toSlug(suite.category)}`}>
              {suite.category} Category
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}