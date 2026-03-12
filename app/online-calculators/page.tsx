import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Online Calculators | UtilHubX",
  description: "Online calculators for finance, health, and date-related tasks.",
  alternates: { canonical: `${SITE_URL}/online-calculators` },
};

export default function Page() {
  const pages = toolPages.filter((p) => ["Finance","Health","Date and Time","Business","Conversion"].includes(p.category));
  return (
    <section>
      <h1 className="page-title">Online Calculators</h1>
      <p className="page-intro">Online calculators for finance, health, and date-related tasks.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
