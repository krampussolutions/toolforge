import Link from "next/link";

type CalculatorCardProps = {
  href: string;
  title: string;
  category: string;
  description: string;
};

export default function CalculatorCard({
  href,
  title,
  category,
  description,
}: CalculatorCardProps) {
  return (
    <Link href={href} className="card group">
      <span className="chip">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">Open tool</span>
    </Link>
  );
}