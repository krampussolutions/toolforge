import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">Util<span>HubX</span></Link>
        <nav className="nav-links">
          <Link href="/categories/image">Image Tools</Link>
          <Link href="/categories/pdf">PDF Tools</Link>
          <Link href="/categories/finance">Calculators</Link>
          <Link href="/categories/conversion">Converters</Link>
          <Link href="/categories/writing">Text Tools</Link>
          <Link href="/popular-tools">Popular</Link>
        </nav>
      </div>
    </header>
  );
}
