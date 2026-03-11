import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";

export const metadata = {
  title: "File Converters",
  description: "Convert image and file formats online.",
};

export default function Page() {
  const pages = toolPages.filter((p) => ["Image", "PDF", "Conversion"].includes(p.category));
  return (
    <section>
      <h1 className="page-title">File Converters</h1>
      <p className="page-intro">Convert file types and formats quickly in a clean browser-based workflow.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
