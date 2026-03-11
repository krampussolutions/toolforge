import Link from "next/link";
import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, suites } from "@/lib/site";

const popular = ["compress-image","merge-pdf","jpg-to-png","loan-calculator","bmi-calculator","tip-calculator","unit-converter","word-counter"];

export default function HomePage() {
  const popularPages = toolPages.filter((p) => popular.includes(p.slug));
  return (
    <>
      <section className="hero">
        <span className="kicker">Fast free online tools</span>
        <h1>Simple tools for files, images, calculators, and everyday tasks</h1>
        <p>
          ToolForge helps people finish common tasks quickly without downloading software or creating an account.
          Compress images, merge PDFs, run calculations, and convert files in a cleaner, customer-friendly workspace.
        </p>

        <div className="hero-actions">
          <Link href="/tools/compress-image" className="button">Compress Image</Link>
          <Link href="/tools/merge-pdf" className="button secondary">Merge PDF</Link>
          <Link href="/tools/loan-calculator" className="button secondary">Loan Calculator</Link>
          <Link href="/tools/unit-converter" className="button secondary">Unit Converter</Link>
        </div>

        <div className="trust">
          <div className="item"><strong>No signup required</strong><div className="muted">Open a tool and use it right away.</div></div>
          <div className="item"><strong>Works on mobile</strong><div className="muted">Built for phones, tablets, and desktops.</div></div>
          <div className="item"><strong>Free to use</strong><div className="muted">Useful everyday tools without paywalls.</div></div>
          <div className="item"><strong>Browser-based</strong><div className="muted">Many tools run directly on your device.</div></div>
        </div>
      </section>

      <section className="section">
        <h2>Most used tools</h2>
        <div className="grid grid-4">
          {popularPages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Browse by category</h2>
        <div className="popular-links">
          <Link href="/categories/image">Image Tools</Link>
          <Link href="/categories/pdf">PDF Tools</Link>
          <Link href="/categories/finance">Finance Calculators</Link>
          <Link href="/categories/conversion">Converters</Link>
          <Link href="/categories/writing">Text Tools</Link>
          <Link href="/categories/utility">Everyday Tools</Link>
        </div>
      </section>

      <section className="section">
        <h2>Built for common tasks</h2>
        <div className="grid grid-3">
          {suites.map((item) => (
            <CalculatorCard key={item.slug} href={`/calculators/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>Why people use ToolForge</h3>
          <p>
            People usually come here for one reason: they need a quick answer or quick file task without extra friction.
            The site is organized around the kinds of tasks people actually do every day, not around technical jargon.
          </p>
        </div>
      </section>
    </>
  );
}
