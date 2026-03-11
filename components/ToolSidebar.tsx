import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { toolPages } from "@/lib/site";
export default function ToolSidebar({ category, currentSlug }: { category: string; currentSlug: string }) {
  const related = toolPages.filter((t) => t.category === category && t.slug !== currentSlug).slice(0, 8);
  return <div className="sidebar"><div className="card"><h3>Related tools</h3><div className="list">{related.map((item) => <Link key={item.slug} href={`/tools/${item.slug}`}>{item.title}</Link>)}</div></div><AdBanner slot="2233445566" /></div>;
}
