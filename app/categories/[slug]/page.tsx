import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";
import { categoryDescriptions, toolPages, categories, toSlug, SITE_URL } from "@/lib/site";

function slugToCategory(slug: string) {
  return categories.find((c) => toSlug(c) === slug);
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: toSlug(c) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = slugToCategory(params.slug);
  if (!category) return {};
  const url = `${SITE_URL}/categories/${toSlug(category)}`;
  return { title: `${category} Tools | UtilHubX`, description: categoryDescriptions[category] || `Browse ${category.toLowerCase()} tools.`, alternates: { canonical: url } };
}

export default function Page({ params }: { params: { slug: string } }) {
  const category = slugToCategory(params.slug);
  if (!category) notFound();
  const pages = toolPages.filter((p) => p.category === category);
  return (
    <section>
      <h1 className="page-title">{category} Tools</h1>
      <p className="page-intro">{categoryDescriptions[category] || `Browse ${category.toLowerCase()} tools.`}</p>
      <div className="grid grid-4">
        {pages.map((item) => (
          <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>
    </section>
  );
}
