import { notFound } from "next/navigation";
import ToolSidebar from "@/components/ToolSidebar";
import AdBanner from "@/components/AdBanner";
import SuiteRenderer from "@/components/SuiteRenderer";
import { suites, SITE_URL } from "@/lib/site";

function getSuite(slug: string) {
  return suites.find((item) => item.slug === slug);
}
export function generateStaticParams() { return suites.map((item) => ({ slug: item.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getSuite(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.description, alternates: { canonical: `/calculators/${item.slug}` }, openGraph: { title: item.title, description: item.description, url: `${SITE_URL}/calculators/${item.slug}` } };
}
export default function Page({ params }: { params: { slug: string } }) {
  const item = getSuite(params.slug);
  if (!item) notFound();
  return (
    <div className="tool-layout">
      <div>
        <span className="kicker">{item.category}</span>
        <h1 className="page-title" style={{ marginTop: 14 }}>{item.title}</h1>
        <p className="page-intro">{item.description}</p>
        <AdBanner />
        <SuiteRenderer slug={item.slug} />
        <div style={{ marginTop: 22 }}><AdBanner slot="9988776655" /></div>
      </div>
      <ToolSidebar category={item.category} currentSlug={item.slug} />
    </div>
  );
}
