import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import ToolSidebar from "@/components/ToolSidebar";
import SpecialToolRenderer from "@/components/special/SpecialToolRenderer";
import CoreToolRenderer from "@/components/special/CoreToolRenderer";
import { SITE_URL, toolPages } from "@/lib/site";
import { toolContent } from "@/lib/tool-content";
import { programmaticPages } from "@/lib/programmatic-pages";
import { toJsonLd } from "@/lib/structured-data";

const specialSlugs = [
  "compress-image",
  "resize-image",
  "jpg-to-png",
  "png-to-jpg",
  "crop-image",
  "image-to-pdf",
  "merge-pdf",
  "split-pdf",
  "json-formatter",
  "base64-encoder",
  "base64-decoder",
  "url-encoder",
  "url-decoder",
  "uuid-generator",
  "slug-generator",
  "remove-line-breaks",
  "text-sorter",
  "duplicate-line-remover",
  "png-compressor",
  "webp-to-png",
  "webp-to-jpg",
  "text-reverser",
  "remove-extra-spaces",
  "line-counter",
  "word-frequency-counter",
  "text-repeater",
  "text-to-binary",
  "binary-to-text",
  "rgb-to-hex",
  "hex-to-rgb",
  "unix-timestamp-converter",
  "random-letter-generator",
  "password-strength-checker",
  "uuid-bulk-generator",
  "meta-description-counter",
  "html-escape",
  "html-unescape",
  "list-randomizer",
  "roman-numeral-converter",
  "business-days-calculator",
  "weeks-between-dates",
  "sales-tax-calculator",
  "credit-card-payoff-calculator",
  "reading-level-checker",
  "title-case-headline-analyzer",
  "rotate-pdf",
  "delete-pdf-pages",
  "reorder-pdf-pages",
  "pdf-page-counter",
  "image-resizer-by-kb",
  "jpg-to-webp",
  "png-to-webp",
  "jpeg-to-jpg",
  "gif-to-jpg",
  "svg-to-png"
];

function getPage(slug: string) {
  return toolPages.find((item) => item.slug === slug);
}


const titleOverrides: Record<string, string> = {
  "days-between-dates": "Days Between Dates Calculator | UtilHubX",
  "business-days-calculator": "Business Days Calculator | UtilHubX",
  "weeks-between-dates": "Weeks Between Dates Calculator | UtilHubX",
};

function getIntentCopy(slug: string, title: string, category: string) {
  const map: Record<string, { why: string; tips: string[] }> = {
    "days-between-dates": {
      why: "People use Days Between Dates when they need a clear calendar-day gap for contracts, travel plans, subscriptions, project timelines, countdown planning, or personal milestones. It works best when the real question is how many total days sit between two dates before deciding whether to count weekends or switch to a weekday-only workflow.",
      tips: [
        "Use this calculator for calendar days, not workdays.",
        "If your process should count the start and end dates, compare the standard result with an inclusive count.",
        "Switch to Business Days Calculator when weekends should be excluded.",
      ],
    },
    "age-calculator": {
      why: "People use Age Calculator for school forms, medical paperwork, eligibility checks, birthdays, insurance questions, and any workflow that needs an exact age in years, months, and days instead of a rough estimate. It is especially useful when the answer must line up with a real comparison date.",
      tips: [
        "Use an exact birth date instead of estimating from year alone.",
        "Check whether the comparison should use today's date or a future deadline.",
        "Open Days Between Dates if you only need a raw day gap rather than a human age result.",
      ],
    },
    "word-counter": {
      why: "Word Counter is most useful for essays, blog posts, speech drafts, social captions, product descriptions, and SEO writing where length matters. Writers use it to stay inside assignment limits, estimate speaking time, and compare draft versions without manually counting anything.",
      tips: [
        "Paste the final draft, not partial notes, when you need a true submission count.",
        "Check both words and characters if you are writing for forms, social posts, or metadata limits.",
        "Use Reading Level Checker or Remove Extra Spaces after counting if the draft still needs cleanup.",
      ],
    },
    "tip-calculator": {
      why: "Tip Calculator is used for restaurant bills, takeout, delivery, bar tabs, and group dining when people want the tip, total, and per-person share without doing mental math. It is also handy when you want to compare 15%, 18%, and 20% before paying.",
      tips: [
        "Decide whether you are tipping on the pre-tax or post-tax total before splitting the bill.",
        "Use a custom percentage if the service or local norm falls outside common presets.",
        "Open Sales Tax Calculator or Percentage Calculator if you need to separate the math into smaller steps.",
      ],
    },
    "password-generator": {
      why: "Password Generator helps people create stronger logins for email, banking, work accounts, Wi-Fi, shopping sites, and apps where reuse is risky. It is best when you need a long random password quickly and do not want to rely on memorable but weak patterns.",
      tips: [
        "Choose a longer password length before worrying about minor character tweaks.",
        "Save the final password in a trusted password manager instead of reusing an old favorite.",
        "Check the result with Password Strength Checker before you commit to an important account.",
      ],
    },
    "jpg-to-png": {
      why: "People use JPG to PNG when a site, design tool, handoff, or editing workflow calls for PNG output instead of JPG. It is common for screenshots, simple graphics, logos, and cases where you need format compatibility more than a smaller file size.",
      tips: [
        "Do not expect lost JPG detail to come back after conversion.",
        "Use Compress Image or PNG Compressor if the PNG output becomes too large.",
        "Compare JPG to PNG and PNG to JPG if you are choosing between editability and file size.",
      ],
    },
    "png-to-jpg": {
      why: "PNG to JPG is useful when you need a smaller image for websites, email attachments, marketplace uploads, and forms that accept JPG more smoothly than PNG. It works well for photos and simple graphics where broad compatibility and lighter file size matter most.",
      tips: [
        "Use PNG when you need to preserve transparency, and JPG when the smaller file is more important.",
        "Review the converted image before uploading it to make sure the background still looks right.",
        "Open JPG to PNG if you need to move back into a PNG-based workflow later.",
      ],
    },
    "merge-pdf": {
      why: "Merge PDF is a common workflow for invoices, receipts, school submissions, signed forms, statements, and scanned pages that belong in one final document. It saves time when a portal or recipient expects one clean PDF instead of several attachments.",
      tips: [
        "Put pages and documents in their final order before downloading the merged PDF.",
        "Check the finished file once to confirm no pages were duplicated or missed.",
        "Use Split PDF or Delete PDF Pages if the merged file still needs cleanup.",
      ],
    },
    "split-pdf": {
      why: "Split PDF is used when the original document is too long, includes pages you do not want to share, or needs to be broken into smaller parts for school, work, or client delivery. It is one of the fastest ways to trim a PDF down to only the useful pages.",
      tips: [
        "Double-check your page range before exporting the smaller file.",
        "Use PDF Page Counter first if you need a quick page total before selecting ranges.",
        "Switch to Reorder PDF Pages when the file needs rearranging rather than extraction.",
      ],
    },
    "loan-calculator": {
      why: "Loan Calculator helps people compare personal loans, fixed-rate borrowing, and payment scenarios before applying or signing anything. It is useful when you want to see how rate, term, or principal changes the payment before you talk to a lender.",
      tips: [
        "Compare at least two term lengths so you can see the monthly-payment tradeoff clearly.",
        "Run a second scenario with a slightly higher rate to stress-test affordability.",
        "Open Credit Card Payoff Calculator or Mortgage Calculator if the debt type is more specific than a general loan.",
      ],
    },
    "mortgage-calculator": {
      why: "Mortgage Calculator is useful for home shoppers comparing rates, terms, and down-payment options before applying. It helps turn a rough price range into a monthly payment estimate so buyers can judge affordability earlier in the process.",
      tips: [
        "Compare a 15-year and 30-year term instead of checking only one option.",
        "Test how different down-payment amounts affect the payment before shopping seriously.",
        "Remember that taxes, insurance, and HOA costs may sit outside a principal-and-interest estimate.",
      ],
    },
    "bmi-calculator": {
      why: "BMI Calculator gives a quick body-mass estimate for wellness planning, check-ins, and broad weight-range comparisons. People often use it as a starting point before looking deeper at nutrition, training, or healthcare advice.",
      tips: [
        "Use accurate height and weight inputs instead of rounded guesses.",
        "Treat BMI as a screening estimate, not a full health diagnosis.",
        "Open Calorie Calculator or Protein Calculator if your next step is diet planning.",
      ],
    },
    "business-days-calculator": {
      why: "Business Days Calculator is useful for work deadlines, delivery estimates, invoice timing, contractor schedules, and office planning when weekends should not count. It answers a different question than a calendar-day tool by focusing on weekday gaps.",
      tips: [
        "Use this instead of Days Between Dates when the job is based on business weekdays.",
        "If custom holidays matter, treat the result as a weekday baseline and adjust manually.",
        "Compare with Weeks Between Dates if you want a higher-level schedule view.",
      ],
    },
    "credit-card-payoff-calculator": {
      why: "Credit Card Payoff Calculator helps people understand how payment size changes payoff time and total interest on revolving debt. It is most valuable when you are comparing minimum-style payments against a faster payoff plan.",
      tips: [
        "Run one scenario at your current payment and another at a higher payment to see the difference clearly.",
        "Check whether the payment covers more than monthly interest before trusting the payoff timeline.",
        "Use Loan Calculator if you want to compare fixed-payment debt against card payoff math.",
      ],
    },
    "image-resizer-by-kb": {
      why: "Image Resizer by KB is built for upload rules where file size matters more than dimensions, such as government forms, job applications, exam portals, and ID submissions. It is useful when a normal resize tool is not enough because the site only accepts files under a specific KB limit.",
      tips: [
        "Aim slightly under the maximum limit instead of right on it when a portal is strict.",
        "Use JPG output for photos when you need the best chance at hitting a small KB target.",
        "Check the downloaded file size before submitting it to the final portal or form.",
      ],
    },
  };

  if (map[slug]) return map[slug];

  return {
    why: `People use the ${title.toLowerCase()} when they want a fast, focused workflow for a specific ${category.toLowerCase()} task without opening heavier software. It works best for one-off jobs, quick checks, and straightforward browser-based tasks where speed matters.`,
    tips: [
      "Double-check the values, file, or text you enter before generating a result.",
      "Compare related tools if your task is close to another workflow in the same category.",
      "Review the final output once before downloading, copying, or sharing it.",
    ],
  };
}

export function generateStaticParams() {
  return toolPages.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const item = getPage(params.slug);
  if (!item) return {};

  const title = titleOverrides[item.slug] ?? `${item.title} | UtilHubX`;
  const url = `${SITE_URL}/tools/${item.slug}`;
  const content = toolContent[item.slug];
  const description = content
    ? `${content.intro} Use ${item.title} free in your browser on desktop or mobile.`
    : `${item.title} on UtilHubX helps you ${item.description.charAt(0).toLowerCase()}${item.description.slice(1)} Use it free in your browser on desktop or mobile.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "UtilHubX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = getPage(params.slug);
  if (!item) notFound();

  const isSpecial = specialSlugs.includes(item.slug);
  const content = toolContent[item.slug];

  const relatedGuides = programmaticPages
    .filter((p) => p.relatedTool === item.slug && (p.indexable ?? false))
    .slice(0, 6);

  const intentCopy = getIntentCopy(item.slug, item.title, item.category);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: item.title,
    applicationCategory: item.category,
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
    url: `${SITE_URL}/tools/${item.slug}`,
    description: item.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqSchema =
    content && content.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((entry) => ({
            "@type": "Question",
            name: entry.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: entry.a,
            },
          })),
        }
      : null;


  return (
    <div className="tool-layout">
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(appSchema) }}
        />
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
          />
        ) : null}

        <span className="kicker">{item.category}</span>
        <h1 className="page-title" style={{ marginTop: 14 }}>
          {item.title}
        </h1>
        <p className="page-intro">{item.description}</p>

        <AdBanner />

        {isSpecial ? (
          <SpecialToolRenderer slug={item.slug} />
        ) : item.kind === "suite" ? (
          <CoreToolRenderer slug={item.slug} />
        ) : (
          <div className="card">
            <h2>Use the {item.title} online</h2>
            <p>
              Open the {item.title.toLowerCase()} in your browser, enter the values or content you need, and get a result without downloads, account setup, or switching devices.
            </p>
          </div>
        )}

        {content ? (
          <>
            <section className="section">
              <div className="card">
                <h2>What the {item.title} does</h2>
                <p>{content.intro}</p>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>Common ways to use the {item.title}</h2>
                <ul>
                  {content.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>How the {item.title} works</h2>
                <ol>
                  {content.howItWorks.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="section">
              <div className="card">
                <h2>{item.title} questions and answers</h2>
                {content.faq.map((entry) => (
                  <div key={entry.q} style={{ marginBottom: 18 }}>
                    <h3>{entry.q}</h3>
                    <p>{entry.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : null}

        {relatedGuides.length ? (
          <section className="section">
            <div className="card">
              <h2>Guides related to {item.title}</h2>
              <div className="popular-links">
                {relatedGuides.map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="card">
            <h2>Why people use the {item.title}</h2>
            <p>{intentCopy.why}</p>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2>Tips for better results</h2>
            <ul>
              {intentCopy.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2>More {item.category.toLowerCase()} pages on UtilHubX</h2>
            <div className="popular-links">
              <Link href={`/calculators/${item.parent}`}>Open related section</Link>
              <Link href="/tools">Browse all tools</Link>
            </div>
          </div>
        </section>

        <div style={{ marginTop: 22 }}>
          <AdBanner slot="4455667788" />
        </div>
      </div>

      <ToolSidebar category={item.category} currentSlug={item.slug} />
    </div>
  );
}
