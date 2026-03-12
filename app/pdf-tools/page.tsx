import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "PDF Tools | UtilHubX",
  description: "PDF tools for merging, splitting, and browser-based conversion.",
  alternates: { canonical: `${SITE_URL}/pdf-tools` },
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "PDF");
  return (
    <section>
      <h1 className="page-title">PDF Tools</h1>
      <p className="page-intro">PDF tools for merging, splitting, and browser-based conversion.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
