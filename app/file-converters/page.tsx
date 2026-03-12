import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "File Converters | UtilHubX",
  description: "File and format conversion tools for images and PDFs.",
  alternates: { canonical: `${SITE_URL}/file-converters` },
};

export default function Page() {
  const pages = toolPages.filter((p) => ["Image","PDF","Conversion"].includes(p.category));
  return (
    <section>
      <h1 className="page-title">File Converters</h1>
      <p className="page-intro">File and format conversion tools for images and PDFs.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
