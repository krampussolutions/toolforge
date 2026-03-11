import CalculatorCard from "@/components/CalculatorCard";
import { toolPages } from "@/lib/site";
const popular = ["compress-image","merge-pdf","split-pdf","jpg-to-png","png-to-jpg","loan-calculator","mortgage-calculator","bmi-calculator","tip-calculator","unit-converter","word-counter","password-generator"];
export const metadata = { title: "Popular Tools", description: "Browse the most popular tools on ToolForge." };
export default function Page() {
  const pages = toolPages.filter((p) => popular.includes(p.slug));
  return <section><h1 className="page-title">Popular tools</h1><p className="page-intro">These are the tools people use most often for everyday tasks.</p><div className="grid grid-4">{pages.map((item)=><CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />)}</div></section>;
}
