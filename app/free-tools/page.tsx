import Link from "next/link";
import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";

export const metadata = {
  title: "Free Online Tools",
  description: "Free online tools for images, PDFs, calculators, converters, and everyday tasks.",
};

const featured = [
  "compress-image",
  "merge-pdf",
  "jpg-to-png",
  "loan-calculator",
  "bmi-calculator",
  "unit-converter",
  "word-counter",
  "tip-calculator",
];

export default function Page() {
  const pages = toolPages.filter((p) => featured.includes(p.slug));
  return (
    <section>
      <h1 className="page-title">Free Online Tools</h1>
      <p className="page-intro">
        Use free online tools for everyday file tasks, quick calculations, and simple conversions.
      </p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
      <div className="card" style={{ marginTop: 24 }}>
        <h3>Popular sections</h3>
        <div className="popular-links">
          <Link href="/image-tools">Image Tools</Link>
          <Link href="/pdf-tools">PDF Tools</Link>
          <Link href="/online-calculators">Online Calculators</Link>
          <Link href="/file-converters">File Converters</Link>
        </div>
      </div>
    </section>
  );
}
