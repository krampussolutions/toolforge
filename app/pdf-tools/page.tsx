import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "PDF Tools | UtilHubX",
  description: "PDF tools for merging, splitting, and browser-based conversion.",
  alternates: { canonical: `${SITE_URL}/pdf-tools` },
  openGraph: {
    title: "PDF Tools | UtilHubX",
    description: "PDF tools for merging, splitting, and browser-based conversion.",
    url: `${SITE_URL}/pdf-tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools | UtilHubX",
    description: "PDF tools for merging, splitting, and browser-based conversion.",
  },
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "PDF");
  return (
    <section>
      <h1 className="page-title">PDF Tools</h1>
      <p className="page-intro">PDF tools for merging, splitting, and browser-based conversion.</p>

      <section className="section">
        <div className="card copy">
          <h2>What these PDF tools help with</h2>
          <p>
            PDF tasks are often small but time-sensitive. People need to merge a
            few files, split pages out of a larger document, or turn images into
            a clean PDF without hunting for extra software. This landing page
            groups those workflows together so visitors can get to the right
            action quickly.
          </p>
          <p>
            The goal is to make routine document handling easier for everyday
            users, students, office workers, and anyone dealing with forms,
            receipts, scans, and shared files online.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>PDF tools on UtilHubX</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Common uses</h2>
          <ul>
            <li>Combine multiple documents into one shareable PDF.</li>
            <li>Extract selected pages from larger files.</li>
            <li>Turn images, scans, and screenshots into PDF documents.</li>
            <li>Handle document tasks quickly from a desktop or mobile browser.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Why browser-based PDF workflows matter</h2>
          <p>
            For many people, the best PDF workflow is the fastest one. Keeping
            these utilities in the browser reduces setup, removes unnecessary
            steps, and helps visitors finish routine document jobs with less
            friction.
          </p>
        </div>
      </section>
    </section>
  );
}
