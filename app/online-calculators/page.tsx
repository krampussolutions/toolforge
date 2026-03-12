import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";

export const metadata = {
  title: "Online Calculators",
  description: "Online calculators for finance, health, business, and everyday math.",
};

export default function Page() {
  const pages = toolPages.filter((p) => ["Finance", "Health", "Business", "Utility", "Date and Time"].includes(p.category));
  return (
    <section>
      <h1 className="page-title">Online Calculators</h1>
      <p className="page-intro">Quick calculators for payments, health, dates, pricing, and daily math.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
