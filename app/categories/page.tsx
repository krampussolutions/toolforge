import Link from "next/link";
import { categories, categoryDescriptions } from "@/lib/site";
export const metadata = { title: "Tool Categories", description: "Browse tool categories on UtilHubX to explore grouped browser-based workflows and utilities." };
export default function Page() {
  return <section><h1 className="page-title">Categories</h1><p className="page-intro">Choose a category to browse a more customer-friendly section of the site.</p><div className="grid grid-3">{categories.map((category)=><Link key={category} href={`/categories/${category.toLowerCase().replace(/\s+/g,"-")}`} className="card"><span className="chip">{category}</span><h3>{category}</h3><p>{categoryDescriptions[category]}</p></Link>)}</div></section>;
}
