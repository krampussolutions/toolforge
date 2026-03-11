import Link from "next/link";
export default function CalculatorCard({ href, title, category, description }: { href: string; title: string; category: string; description: string }) {
  return <Link href={href} className="card"><span className="chip">{category}</span><h3>{title}</h3><p>{description}</p></Link>;
}
