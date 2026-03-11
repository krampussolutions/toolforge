import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import ToolSidebar from "@/components/ToolSidebar";
import SpecialToolRenderer from "@/components/special/SpecialToolRenderer";
import { toolPages } from "@/lib/site";

const specialSlugs = ["compress-image", "resize-image", "jpg-to-png", "png-to-jpg", "crop-image", "image-to-pdf", "merge-pdf", "split-pdf"];

function getPage(slug: string) {
  return toolPages.find((item) => item.slug === slug);
}
export function generateStaticParams() { return toolPages.map((item) => ({ slug: item.slug })); }
export default function Page({ params }: { params: { slug: string } }) {
  const item = getPage(params.slug);
  if (!item) notFound();
  const isSpecial = specialSlugs.includes(item.slug);
  return (
    <div className="tool-layout">
      <div>
        <span className="kicker">{item.category}</span>
        <h1 className="page-title" style={{ marginTop: 14 }}>{item.title}</h1>
        <p className="page-intro">{item.description}</p>
        <AdBanner />
        {isSpecial ? <SpecialToolRenderer slug={item.slug} /> : <div className="card"><h2>Quick answer tool</h2><p>This page is designed to help visitors complete a common task quickly without extra steps.</p></div>}
      </div>
      <ToolSidebar category={item.category} currentSlug={item.slug} />
    </div>
  );
}
