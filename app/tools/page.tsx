import type { Metadata } from "next";
import CalculatorCard from "@/components/CalculatorCard";
import { SITE_URL, toolPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Tools | UtilHubX",
  description:
    "Browse all free online tools on UtilHubX, including calculators, converters, image tools, PDF tools, and utilities.",
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: "All Tools | UtilHubX",
    description:
      "Browse all free online tools on UtilHubX, including calculators, converters, image tools, PDF tools, and utilities.",
    url: `${SITE_URL}/tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Tools | UtilHubX",
    description:
      "Browse all free online tools on UtilHubX, including calculators, converters, image tools, PDF tools, and utilities.",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="page-title">All Tools</h1>
      <p className="page-intro">
        Browse all tools by name, or use the category pages if you want a more
        guided path.
      </p>

      <div className="grid grid-4">
        {toolPages.map((item) => (
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