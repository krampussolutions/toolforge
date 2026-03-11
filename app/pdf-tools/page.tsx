import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";

export const metadata = {
  title: "PDF Tools",
  description: "Merge, split, and create PDF files online.",
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "PDF");
  return (
    <section>
      <h1 className="page-title">PDF Tools</h1>
      <p className="page-intro">Handle common PDF tasks in your browser with simple tools.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
