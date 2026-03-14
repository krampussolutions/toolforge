import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Free PDF Tools Online | UtilHubX",
  description: "Browse free PDF tools on UtilHubX for merging, splitting, and building PDF files in a fast browser-based workflow.",
  alternates: { canonical: `${SITE_URL}/pdf-tools` },
  openGraph: {
    title: "PDF Tools",
    description: "Browse free PDF tools on UtilHubX for merging, splitting, and building PDF files in a fast browser-based workflow.",
    url: `${SITE_URL}/pdf-tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools",
    description: "Browse free PDF tools on UtilHubX for merging, splitting, and building PDF files in a fast browser-based workflow.",
  },
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "PDF");
  return (
    <section>
      <h1 className="page-title">PDF Tools</h1>
      <p className="page-intro">Use these PDF tools to merge files, split pages, rotate pages, delete pages, reorder documents, count page totals, and turn images into PDFs without installing desktop software. They work well for forms, school documents, receipts, contracts, scanned pages, and quick file cleanup.</p>

      <section className="section">
        <div className="card copy">
          <h2>What UtilHubX PDF tools help with</h2>
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
        <h2>Common PDF tasks people need online</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>When these PDF tools are useful</h2>
          <ul>
            <li>Combine invoices, statements, or signed pages into one PDF before sending.</li>
            <li>Split large PDFs so you can share only the pages a client, teacher, or coworker needs.</li>
            <li>Turn phone photos, screenshots, and scanned pages into one document for uploads or record keeping.</li>
            <li>Handle quick document jobs from a desktop or mobile browser when you do not want a full PDF editor.</li>
          </ul>
          <p>Start with Merge PDF when you need one finished file, Split PDF when you only need selected pages, and Image to PDF when your source files are photos or screenshots.</p>
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

      <section className="section">
        <div className="card">
          <h2>Helpful PDF guides</h2>
          <div className="popular-links">
            <a href="/guides/merge-pdf-online">How to merge PDF files online</a>
            <a href="/guides/remove-pages-from-a-pdf">How to remove pages from a PDF</a>
            <a href="/guides/split-pdf-online">How to split PDF pages online</a>
            <a href="/guides/rotate-pdf-online">How to rotate PDF pages online</a>
            <a href="/guides/delete-pdf-pages-online">How to delete PDF pages online</a>
          </div>
        </div>
      </section>
    </section>
  );
}
