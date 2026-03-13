import CalculatorCard from "@/components/CalculatorCard";
import { suites } from "@/lib/site";
export const metadata = { title: "Calculator Suites | UtilHubX", description: "Browse grouped calculator suites and related tool sections on UtilHubX." };
export default function Page() {
  return <section><h1 className="page-title">Tool groups</h1><p className="page-intro">These grouped pages are designed for people who want multiple related tools in one place.</p><div className="grid grid-3">{suites.map((item)=><CalculatorCard key={item.slug} href={`/calculators/${item.slug}`} title={item.title} category={item.category} description={item.description} />)}</div></section>;
}
