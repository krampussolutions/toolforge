import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";
export const metadata = { title: "All Tools | UtilHubX", description: "Browse all free online tools on UtilHubX, including calculators, converters, image tools, PDF tools, and utilities." };
export default function Page() {
  return <section><h1 className="page-title">All tools</h1><p className="page-intro">Browse all tools by name, or use the category pages if you want a more guided path.</p><div className="grid grid-4">{toolPages.map((item)=><CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />)}</div></section>;
}
