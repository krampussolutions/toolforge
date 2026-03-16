import type { Metadata } from "next";
import Link from "next/link";
import {
  Image as ImageIcon,
  FileText,
  Calculator,
  Repeat,
  Type,
  Wrench,
  ShieldCheck,
  Smartphone,
  Gift,
  Zap,
} from "lucide-react";
import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, suites, SITE_URL } from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";
import { JSX } from "react";

export const metadata: Metadata = {
  title:
    "Free Online Tools for Images, PDFs, Text, Calculators & More | UtilHubX",
  description:
    "Use free online tools for image compression, PDF editing, word count, calculators, converters, and everyday browser-based tasks on UtilHubX.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title:
      "Free Online Tools for Images, PDFs, Text, Calculators & More | UtilHubX",
    description:
      "Use free online tools for image compression, PDF editing, word count, calculators, converters, and everyday browser-based tasks on UtilHubX.",
    url: `${SITE_URL}/`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Free Online Tools for Images, PDFs, Text, Calculators & More | UtilHubX",
    description:
      "Use free online tools for image compression, PDF editing, word count, calculators, converters, and everyday browser-based tasks on UtilHubX.",
  },
};

const popular = [
  "compress-image",
  "merge-pdf",
  "jpg-to-png",
  "word-counter",
  "case-converter",
  "loan-calculator",
  "sales-tax-calculator",
  "image-resizer-by-kb",
];

const featuredGuides = [
  "merge-pdf-online",
  "how-to-check-reading-level",
  "reading-level-checker-for-blog-posts",
  "rotate-pdf-online",
  "resize-image-to-kb",
  "jpg-to-png-online",
];

const categoryIcons: Record<string, JSX.Element> = {
  Image: <ImageIcon size={22} />,
  PDF: <FileText size={22} />,
  Finance: <Calculator size={22} />,
  Conversion: <Repeat size={22} />,
  Writing: <Type size={22} />,
  Utility: <Wrench size={22} />,
  Health: <Calculator size={22} />,
  "Date and Time": <Calculator size={22} />,
  Business: <Calculator size={22} />,
};

export default function HomePage() {
  const popularPages = toolPages.filter((p) => popular.includes(p.slug));
  const newestPages = toolPages.slice(-12).reverse();

  const guides = featuredGuides
    .map((slug) => programmaticPages.find((page) => page.slug === slug))
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UtilHubX",
    url: `${SITE_URL}/`,
    description:
      "Free online tools for image compression, PDF editing, text cleanup, calculators, converters, and everyday browser-based tasks.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/tools`,
      "query-input": "required name=search_term_string",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: popularPages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: `${SITE_URL}/tools/${page.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(itemListSchema) }}
      />

      <section className="hero">
        <span className="kicker">Fast free online tools</span>
        <h1>
          Free online tools for images, PDFs, text, calculators, and everyday
          tasks
        </h1>
        <p>
          UtilHubX helps people finish common jobs quickly without downloading
          software or creating an account. Compress an image, merge PDF files,
          count words, convert file formats, calculate payments, and clean up
          text with simple browser-based tools that work across desktop and
          mobile devices.
        </p>

        <div className="hero-actions">
          <Link href="/tools/compress-image" className="button">
            Compress Image
          </Link>
          <Link href="/tools/merge-pdf" className="button secondary">
            Merge PDF
          </Link>
          <Link href="/tools/word-counter" className="button secondary">
            Word Counter
          </Link>
          <Link href="/tools/loan-calculator" className="button secondary">
            Loan Calculator
          </Link>
        </div>

        <div className="trust">
          <div className="item">
            <div className="feature-icon">
              <Zap size={18} />
            </div>
            <strong>No signup required</strong>
            <div className="muted">Open a tool and use it right away.</div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <Smartphone size={18} />
            </div>
            <strong>Works on mobile</strong>
            <div className="muted">
              Built for phones, tablets, and desktops.
            </div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <Gift size={18} />
            </div>
            <strong>Free to use</strong>
            <div className="muted">Useful everyday tools without paywalls.</div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <ShieldCheck size={18} />
            </div>
            <strong>Browser-based</strong>
            <div className="muted">Many tools run directly in the browser.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Most used tools</h2>
        <p className="page-intro">
          Start with the most practical tools for common jobs like image
          compression, PDF editing, word counting, and quick online
          calculations.
        </p>
        <div className="grid grid-4">
          {popularPages.map((item) => (
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
        <h2>Browse by category</h2>
        <p className="page-intro">
          Explore image tools, PDF tools, writing tools, calculators, and other
          browser-based utilities grouped by topic.
        </p>
        <div className="grid grid-3">
          {suites.map((item) => (
            <Link
              key={item.slug}
              href={`/calculators/${item.slug}`}
              className="card category-card"
            >
              <div className="category-icon">
                {categoryIcons[item.category] || <Wrench size={22} />}
              </div>
              <span className="chip">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card copy">
          <h2>Best tools for common jobs</h2>
          <p>
            People use UtilHubX when they need to shrink an image for email,
            merge PDF files for work or school, estimate loan payments, split a
            restaurant bill, count words in an essay, or clean up text before
            publishing.
          </p>
          <p>
            The site is built around those real tasks instead of software jargon.
            That makes it easier to move from a search query to the exact tool
            you need without digging through complicated menus.
          </p>
          <p>
            Whether you are working with files, text, numbers, dates, or quick
            business math, the goal is the same: faster browser-based workflows
            for everyday use.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Newest tools</h2>
        <p className="page-intro">
          These are the latest additions to UtilHubX, including new PDF tools,
          writing tools, image workflows, and calculators.
        </p>
        <div className="grid grid-4">
          {newestPages.map((item) => (
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
          <h2>Helpful guides</h2>
          <p>
            Use these guides when you want a quick explanation before opening a
            tool. They are useful for understanding common workflows like PDF
            editing, reading-level checks, and image resizing.
          </p>
          <div className="popular-links">
            {guides.map((guide) => (
              <Link key={guide!.slug} href={`/guides/${guide!.slug}`}>
                {guide!.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Browse all tools and categories</h2>
          <div className="popular-links">
            <Link href="/tools">All Tools</Link>
            <Link href="/categories/image">Image Tools</Link>
            <Link href="/categories/pdf">PDF Tools</Link>
            <Link href="/categories/writing">Writing Tools</Link>
            <Link href="/categories/finance">Finance Tools</Link>
          </div>
        </div>
      </section>
    </>
  );
}