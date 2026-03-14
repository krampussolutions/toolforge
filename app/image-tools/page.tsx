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
      <p className="page-intro">Browse free image tools on UtilHubX for compression, conversion, cropping, resizing, and other quick browser-based image tasks.</p>

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
        <h2>Popular image editing and conversion tasks</h2>
        <div className="grid grid-4">
          {pages.map((item) => (
            <CalculatorCard key={item.slug} href={`/tools/${item.slug}`} title={item.title} category={item.category} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Popular image editing and conversion tasks</h2>
          <ul>
            <li>Prepare images for websites, forms, and email attachments.</li>
            <li>Convert between common image formats in a few clicks.</li>
            <li>Resize or crop visuals before publishing or sharing.</li>
            <li>Reduce file size to speed up uploads and save storage space.</li>
          </ul>
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
    </section>
  );
}
