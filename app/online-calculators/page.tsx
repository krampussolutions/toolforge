import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Online Calculators | Free Everyday Calculators | UtilHubX",
  description: "Browse free online calculators on UtilHubX for finance, health, date and time, business, and everyday calculations.",
  alternates: { canonical: `${SITE_URL}/online-calculators` },
  openGraph: {
    title: "Online Calculators | Free Everyday Calculators | UtilHubX",
    description: "Browse free online calculators on UtilHubX for finance, health, date and time, business, and everyday calculations.",
    url: `${SITE_URL}/online-calculators`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Calculators | Free Everyday Calculators | UtilHubX",
    description: "Browse free online calculators on UtilHubX for finance, health, date and time, business, and everyday calculations.",
  },
};

export default function Page() {
  const pages = toolPages.filter((p) => ["Finance","Health","Date and Time","Business","Conversion"].includes(p.category));
  return (
    <section>
      <h1 className="page-title">Online Calculators</h1>
      <p className="page-intro">Browse free online calculators on UtilHubX for finance, health, date and time, business, and everyday calculations.</p>

      <section className="section">
        <div className="card copy">
          <h2>What these online calculators help with</h2>
          <p>
            Online calculators make it easier to handle routine number-based work without opening spreadsheets or installing software. This page brings together practical calculators for money, health, dates, time, business, and conversions so visitors can find the right workflow faster.
          </p>
          <p>
            It is especially useful when you know you need a calculator but have not decided which one yet. Grouping nearby options in one place makes the site easier to browse and helps people move from a broad search query to a specific answer quickly.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Calculator categories on UtilHubX</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Why browser-based calculators are useful</h2>
          <ul>
            <li>Get a quick answer without creating a spreadsheet.</li>
            <li>Compare several calculation methods in one place.</li>
            <li>Use calculators on desktop or mobile with no setup.</li>
            <li>Move from broad planning to a specific calculator fast.</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
