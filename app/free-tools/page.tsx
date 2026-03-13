import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Free Online Tools",
  description: "Browse free online tools on UtilHubX for writing, utility, image, PDF, and calculator tasks.",
  alternates: { canonical: `${SITE_URL}/free-tools` },
};

export default function Page() {
  const pages = toolPages;
  return (
    <section>
      <h1 className="page-title">Free Online Tools</h1>
      <p className="page-intro">Free online tools for everyday tasks, writing, utilities, and browser-based helpers.</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
