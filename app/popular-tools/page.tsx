import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Tools | Most Used Online Utilities | UtilHubX",
  description: "Explore the most-used tools on UtilHubX, including popular image tools, PDF utilities, calculators, and everyday browser-based helpers.",
  alternates: {
    canonical: `${SITE_URL}/popular-tools`,
  },
  openGraph: {
    title: "Popular Tools | Most Used Online Utilities | UtilHubX",
    description:
      "Explore the most-used tools on UtilHubX, including popular image tools, PDF utilities, calculators, and everyday browser-based helpers.",
    url: `${SITE_URL}/popular-tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popular Tools | Most Used Online Utilities | UtilHubX",
    description:
      "Explore the most-used tools on UtilHubX, including popular image tools, PDF utilities, calculators, and everyday browser-based helpers.",
  },
};

const popular = [
  "compress-image",
  "merge-pdf",
  "split-pdf",
  "jpg-to-png",
  "png-to-jpg",
  "loan-calculator",
  "mortgage-calculator",
  "bmi-calculator",
  "tip-calculator",
  "unit-converter",
  "word-counter",
  "password-generator",
];

export default function Page() {
  const pages = toolPages.filter((p) => popular.includes(p.slug));

  return (
    <section>
      <h1 className="page-title">Popular tools</h1>
      <p className="page-intro">
        These are the tools people use most often for everyday tasks.
      </p>

      <section className="section">
        <div className="card copy">
          <h2>Why visitors start here</h2>
          <p>
            Popular tools pages work well for new visitors because they surface
            the most frequently used workflows in one place. Instead of browsing
            the entire site, people can jump straight into image conversion,
            PDF handling, calculators, and quick utility tasks that solve common
            everyday problems.
          </p>
          <p>
            This landing page is also useful as a high-level overview of what
            UtilHubX offers. It combines fast paths to common jobs with enough
            context to help visitors decide whether they need a converter,
            calculator, formatter, or another browser-based utility.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Most-used tools</h2>
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
          <h2>What you can do on UtilHubX</h2>
          <ul>
            <li>Convert and optimize images for uploads, websites, and sharing.</li>
            <li>Merge, split, and build PDFs directly in the browser.</li>
            <li>Run quick finance, health, business, and date calculations.</li>
            <li>Use text and utility helpers for fast everyday tasks.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Who this page is for</h2>
          <p>
            Start here if you are new to the site, want a shortcut to the most
            practical tools, or need a broad entry point before drilling down to
            a more specific category page. Popular tools are a strong first stop
            for repeat visitors too, because they surface the workflows people
            tend to come back for again and again.
          </p>
        </div>
      </section>
    </section>
  );
}
