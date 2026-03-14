import CalculatorCard from "@/components/CalculatorCard";
import { toolPages, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Free Image Tools Online | UtilHubX",
  description: "Browse free image tools on UtilHubX for compression, conversion, cropping, resizing, and other quick browser-based image tasks.",
  alternates: { canonical: `${SITE_URL}/image-tools` },
  openGraph: {
    title: "Image Tools",
    description: "Browse free image tools on UtilHubX for compression, conversion, cropping, resizing, and other quick browser-based image tasks.",
    url: `${SITE_URL}/image-tools`,
    siteName: "UtilHubX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Tools",
    description: "Browse free image tools on UtilHubX for compression, conversion, cropping, resizing, and other quick browser-based image tasks.",
  },
};

export default function Page() {
  const pages = toolPages.filter((p) => p.category === "Image");
  return (
    <section>
      <h1 className="page-title">Image Tools</h1>
      <p className="page-intro">Use these image tools to compress files, resize photos, hit target KB sizes, crop visuals, and convert between common image formats in your browser. They are useful for websites, email attachments, listings, forms, design handoffs, and quick file cleanup.</p>

      <section className="section">
        <div className="card copy">
          <h2>What UtilHubX image tools help you do</h2>
          <p>
            This section brings together practical browser-based image workflows
            for people who need fast results without opening heavy desktop
            software. Whether you are trying to reduce file size, change image
            formats, crop a file, or prepare visuals for email and uploads,
            these tools keep the job simple and accessible.
          </p>
          <p>
            Grouping image utilities into one landing page also makes it easier
            to compare similar tasks. If one workflow is close but not perfect,
            you can move to another tool in the same section without starting
            your search again.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Common image tasks people handle online</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>When these image tools help most</h2>
          <ul>
            <li>Prepare images for websites, product listings, forms, and email attachments.</li>
            <li>Convert JPG, PNG, WEBP, and related image formats for better compatibility.</li>
            <li>Resize or crop visuals before publishing, printing, or sharing with a client.</li>
            <li>Reduce file size to speed up uploads and avoid oversized attachments.</li>
          </ul>
          <p>Visitors often start with Compress Image for file size, JPG to PNG or PNG to JPG for format changes, and Resize Image when the dimensions need to fit a specific upload requirement.</p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Why use browser-based image tools</h2>
          <p>
            Browser-based image workflows are ideal for quick edits, one-off
            tasks, and simple production work when you do not need a full design
            suite. They save time, reduce friction, and help people complete
            common file tasks right where they are already working.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Helpful image guides</h2>
          <div className="popular-links">
            <a href="/guides/resize-image-to-kb">How to resize an image to KB</a>
            <a href="/guides/jpg-to-webp-online">How to convert JPG to WEBP online</a>
            <a href="/guides/svg-to-png-online">How to convert SVG to PNG online</a>
          </div>
        </div>
      </section>
    </section>
  );
}
