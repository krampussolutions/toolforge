import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Tools | UtilHubX",
  description:
    "Browse the most used tools on UtilHubX, including image tools, PDF tools, calculators, and everyday utilities.",
  alternates: {
    canonical: `${SITE_URL}/popular-tools`,
  },
  openGraph: {
    title: "Popular Tools | UtilHubX",
    description:
      "Browse the most used tools on UtilHubX, including image tools, PDF tools, calculators, and everyday utilities.",
    url: `${SITE_URL}/popular-tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popular Tools | UtilHubX",
    description:
      "Browse the most used tools on UtilHubX, including image tools, PDF tools, calculators, and everyday utilities.",
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
  );
}