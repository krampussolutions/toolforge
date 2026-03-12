import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Image Tools | UtilHubX",
  description: "Image tools for compression, conversion, resizing, and cleanup.",
  alternates: { canonical: `${SITE_URL}/image-tools` },
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "Image");
  return (
    <section>
      <h1 className="page-title">Image Tools</h1>
      <p className="page-intro">Image tools for compression, conversion, resizing, and cleanup.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
