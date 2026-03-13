import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "UtilHubX - Simple Tools for Everyday Tasks",
  description:
    "Free online tools for files, images, calculators, converters, and everyday tasks.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "UtilHubX - Simple Tools for Everyday Tasks",
    description:
      "Free online tools for files, images, calculators, converters, and everyday tasks.",
    url: `${SITE_URL}/`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UtilHubX - Simple Tools for Everyday Tasks",
    description:
      "Free online tools for files, images, calculators, converters, and everyday tasks.",
  },
};
import Link from "next/link";
import {
  Image as ImageIcon,
  FileText,
  Calculator,
  Repeat,
  Type,
  Wrench,
  ShieldCheck,
  Smartphone,
  Gift,
  Zap,
} from "lucide-react";
import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, suites } from "@/lib/site";
import { JSX } from "react";

const popular = [
  "compress-image",
  "merge-pdf",
  "jpg-to-png",
  "loan-calculator",
  "bmi-calculator",
  "tip-calculator",
  "unit-converter",
  "word-counter",
];

const categoryIcons: Record<string, JSX.Element> = {
  Image: <ImageIcon size={22} />,
  PDF: <FileText size={22} />,
  Finance: <Calculator size={22} />,
  Conversion: <Repeat size={22} />,
  Writing: <Type size={22} />,
  Utility: <Wrench size={22} />,
  Health: <Calculator size={22} />,
  "Date and Time": <Calculator size={22} />,
  Business: <Calculator size={22} />,
};

export default function HomePage() {
  const popularPages = toolPages.filter((p) => popular.includes(p.slug));

  return (
    <>
      <section className="hero">
        <span className="kicker">Fast free online tools</span>
        <h1>Simple tools for files, images, calculators, and everyday tasks</h1>
        <p>
          UtilHubX helps people finish common tasks quickly without downloading
          software or creating an account. Compress images, merge PDFs, run
          calculations, and convert files in a cleaner, customer-friendly
          workspace.
        </p>

        <div className="hero-actions">
          <Link href="/tools/compress-image" className="button">
            Compress Image
          </Link>
          <Link href="/tools/merge-pdf" className="button secondary">
            Merge PDF
          </Link>
          <Link href="/tools/loan-calculator" className="button secondary">
            Loan Calculator
          </Link>
          <Link href="/tools/unit-converter" className="button secondary">
            Unit Converter
          </Link>
        </div>

        <div className="trust">
          <div className="item">
            <div className="feature-icon">
              <Zap size={18} />
            </div>
            <strong>No signup required</strong>
            <div className="muted">Open a tool and use it right away.</div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <Smartphone size={18} />
            </div>
            <strong>Works on mobile</strong>
            <div className="muted">Built for phones, tablets, and desktops.</div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <Gift size={18} />
            </div>
            <strong>Free to use</strong>
            <div className="muted">Useful everyday tools without paywalls.</div>
          </div>
          <div className="item">
            <div className="feature-icon">
              <ShieldCheck size={18} />
            </div>
            <strong>Browser-based</strong>
            <div className="muted">Many tools run directly on your device.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Most used tools</h2>
        <div className="grid grid-4">
          {popularPages.map((item) => (
            <CalculatorCard
              key={item.slug}
              href={`/tools/${item.slug}`}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Browse by category</h2>
        <div className="grid grid-3">
          {suites.map((item) => (
            <Link
              key={item.slug}
              href={`/calculators/${item.slug}`}
              className="card category-card"
            >
              <div className="category-icon">
                {categoryIcons[item.category] || <Wrench size={22} />}
              </div>
              <span className="chip">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Why people use UtilHubX</h2>
        <div className="card">
          <p>
            People usually come here for one reason: they need a quick answer or
            quick file task without extra friction. The site is organized around
            the kinds of tasks people actually do every day, not around
            technical jargon.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Newest tools</h2>
        <div className="grid grid-4">
          {toolPages.slice(-12).reverse().map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>
    </>
  );
}