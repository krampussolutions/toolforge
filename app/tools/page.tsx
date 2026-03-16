import type { Metadata } from "next";
import Link from "next/link";
import CalculatorCard from "@/components/CalculatorCard";
import {
  SITE_URL,
  categoryDescriptions,
  toolPages,
  toSlug,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "All Free Online Tools | Image, PDF, Text, Calculators & More | UtilHubX",
  description:
    "Browse all free online tools on UtilHubX, including image tools, PDF tools, text tools, calculators, converters, and everyday browser-based utilities.",
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: "All Free Online Tools | Image, PDF, Text, Calculators & More | UtilHubX",
    description:
      "Browse all free online tools on UtilHubX, including image tools, PDF tools, text tools, calculators, converters, and everyday browser-based utilities.",
    url: `${SITE_URL}/tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Online Tools | Image, PDF, Text, Calculators & More | UtilHubX",
    description:
      "Browse all free online tools on UtilHubX, including image tools, PDF tools, text tools, calculators, converters, and everyday browser-based utilities.",
  },
};

const featuredSlugs = [
  "compress-image",
  "merge-pdf",
  "word-counter",
  "case-converter",
  "loan-calculator",
  "sales-tax-calculator",
];

export default function Page() {
  const categories = [...new Set(toolPages.map((item) => item.category))];

  const featuredTools = featuredSlugs
    .map((slug) => toolPages.find((item) => item.slug === slug))
    .filter(Boolean);

  const groupedTools = categories.map((category) => ({
    category,
    tools: toolPages.filter((item) => item.category === category),
  }));

  return (
    <section>
      <h1 className="page-title">All Free Online Tools</h1>
      <p className="page-intro">
        Browse all UtilHubX tools in one place, including image tools, PDF
        tools, text tools, calculators, converters, and quick everyday browser
        utilities.
      </p>

      <section className="section">
        <div className="card">
          <h2>Popular tool categories</h2>
          <div className="popular-links">
            {categories.map((category) => (
              <Link key={category} href={`/categories/${toSlug(category)}`}>
                {category} Tools
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Most useful tools on UtilHubX</h2>
          <p>
            These are some of the most practical tools for common jobs like
            compressing images, merging PDFs, counting words, converting text
            case, and running quick calculators online.
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

      <section className="section">
        <div className="card copy">
          <h2>What you can do with these online tools</h2>
          <p>
            UtilHubX includes free browser-based tools for image compression,
            image conversion, PDF editing, word counting, text cleanup, date
            calculations, business math, finance estimates, and other everyday
            workflows.
          </p>
          <p>
            Some visitors come here looking for a specific tool like a word
            counter, image compressor, or merge PDF tool. Others use this page
            as a full directory to compare categories and find the right tool
            for the task.
          </p>
          <p>
            If you already know the type of task you need, jump into a category
            below. If not, browse the full list and open the tool page that best
            matches your workflow.
          </p>
        </div>
      </section>

      {groupedTools.map((group) => (
        <section key={group.category} className="section">
          <div className="card">
            <h2>{group.category} Tools</h2>
            <p>
              {categoryDescriptions[group.category] ??
                `Browse ${group.category.toLowerCase()} tools on UtilHubX.`}
            </p>

            <div className="popular-links" style={{ marginTop: 14 }}>
              <Link href={`/categories/${toSlug(group.category)}`}>
                Explore {group.category} category
              </Link>
            </div>

            <div className="grid grid-4" style={{ marginTop: 18 }}>
              {group.tools.map((item) => (
                <CalculatorCard
                  key={item.slug}
                  href={`/tools/${item.slug}`}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="card copy">
          <h2>How to find the right tool faster</h2>
          <p>
            Use image tools for file compression, resizing, and format changes.
            Use PDF tools for merging, splitting, rotating, deleting, and
            reordering pages. Use writing tools for word count, case conversion,
            readability checks, and text cleanup.
          </p>
          <p>
            Calculator and business tools are better when you need payment
            estimates, date math, tax totals, profit checks, or quick everyday
            number work. If you want a narrower set of results, the category
            pages provide a more guided path than the full directory.
          </p>
        </div>
      </section>
    </section>
  );
}