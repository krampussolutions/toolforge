import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";

export const metadata = {
  title: "Image Tools",
  description: "Compress, resize, crop, and convert images online.",
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "Image");
  return (
    <section>
      <h1 className="page-title">Image Tools</h1>
      <p className="page-intro">Compress, resize, crop, and convert images without installing extra software.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
