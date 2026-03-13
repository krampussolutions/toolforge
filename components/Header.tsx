import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">Util<span>HubX</span></Link>
        <nav className="nav-links">
          <Link href="/image-tools">Image Tools</Link>
          <Link href="/pdf-tools">PDF Tools</Link>
          <Link href="/online-calculators">Calculators</Link>
          <Link href="/calculators/conversion-tools">Converters</Link>
          <Link href="/calculators/text-tools">Text Tools</Link>
          <Link href="/popular-tools">Popular</Link>
        </nav>
      </div>
    </header>
  );
}
