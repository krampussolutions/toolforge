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
  "svg-to-png",
];


const whyPeopleUseOverrides: Record<string, string[]> = {
  "merge-pdf": [
    "Combine signed pages, statements, forms, and supporting files into one cleaner PDF for upload or sharing.",
    "Avoid sending several attachments when one document is easier for clients, teachers, or coworkers to review.",
    "Keep multi-part files in the correct order before archiving, printing, or sending them to another system.",
  ],
  "compress-image": [
    "Reduce image file size before email, web upload, job applications, and form submissions with file limits.",
    "Speed up page loading on websites and landing pages by shrinking large images before publishing.",
    "Make phone photos and screenshots easier to share when the original files are too large.",
  ],
  "loan-calculator": [
    "Estimate a monthly payment before you apply for a personal loan, auto loan, or other fixed-rate borrowing.",
    "Compare how a shorter term or lower rate changes the payment and total borrowing cost.",
    "Check whether a loan fits your budget before talking to a lender or signing an offer.",
  ],
  "bmi-calculator": [
    "Get a quick body mass index estimate from height and weight without doing the formula by hand.",
    "Use BMI as a simple screening metric before reviewing more detailed health measurements with a professional.",
    "Track changes over time when weight goals, nutrition plans, or fitness routines change.",
  ],
  "unit-converter": [
    "Convert common measurements for schoolwork, cooking, shipping, DIY projects, and everyday calculations.",
    "Switch between metric and imperial units quickly without memorizing formulas.",
    "Check length, weight, speed, temperature, and volume values in one browser-based tool.",
  ],
};

const tipsOverrides: Record<string, string[]> = {
  "merge-pdf": [
    "Place files in the final reading order before merging so the finished PDF makes sense immediately.",
    "Open the merged file once before sending it to confirm page order and completeness.",
    "Use Split PDF or Delete PDF Pages first if you need to trim large documents before combining them.",
  ],
  "compress-image": [
    "Start with a moderate compression setting so the file gets smaller without obvious visual damage.",
    "Check the final file size against upload limits for forms, email, or websites before downloading.",
    "Resize the image first when large dimensions are the real reason the file is heavy.",
  ],
  "loan-calculator": [
    "Compare at least two or three term lengths to see the tradeoff between lower payments and higher total interest.",
    "Use realistic rates based on your credit and lender type so the estimate stays useful.",
    "Treat the result as a planning estimate, then confirm fees and exact terms with the lender.",
  ],
  "bmi-calculator": [
    "Use accurate height and current weight values because small input errors can change the BMI result.",
    "Treat BMI as a screening estimate rather than a full health assessment on its own.",
    "Review long-term trends over time instead of overreacting to a single reading.",
  ],
  "unit-converter": [
    "Confirm you selected the right unit family before converting, especially for weight versus volume.",
    "Round only at the end if you need a cleaner number for homework, forms, or quotes.",
    "Keep related conversions together when comparing supplier specs, recipes, or project measurements.",
  ],
};

const relatedToolOverrides: Record<string, { href: string; label: string }[]> = {
  "merge-pdf": [
    { href: "/tools/split-pdf", label: "Split PDF" },
    { href: "/tools/delete-pdf-pages", label: "Delete PDF Pages" },
    { href: "/tools/reorder-pdf-pages", label: "Reorder PDF Pages" },
    { href: "/tools/image-to-pdf", label: "Image to PDF" },
    { href: "/tools/rotate-pdf", label: "Rotate PDF" },
  ],
  "compress-image": [
    { href: "/tools/resize-image", label: "Resize Image Online" },
    { href: "/tools/image-resizer-by-kb", label: "Image Resizer by KB" },
    { href: "/tools/crop-image", label: "Crop Image Online" },
    { href: "/tools/jpg-to-png", label: "JPG to PNG Converter" },
    { href: "/tools/png-to-jpg", label: "PNG to JPG Converter" },
  ],
  "loan-calculator": [
    { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
    { href: "/tools/car-payment-calculator", label: "Car Payment Calculator" },
    { href: "/tools/credit-card-payoff-calculator", label: "Credit Card Payoff Calculator" },
    { href: "/tools/roi-calculator", label: "ROI Calculator" },
    { href: "/tools/savings-calculator", label: "Savings Calculator" },
  ],
  "bmi-calculator": [
    { href: "/tools/calorie-calculator", label: "Calorie Calculator" },
    { href: "/tools/protein-calculator", label: "Protein Calculator" },
    { href: "/tools/water-intake-calculator", label: "Water Intake Calculator" },
    { href: "/tools/age-calculator", label: "Age Calculator" },
    { href: "/tools/unit-converter", label: "Unit Converter" },
  ],
  "unit-converter": [
    { href: "/tools/feet-to-meters", label: "Feet to Meters Converter" },
    { href: "/tools/kg-to-lbs", label: "KG to LBS Converter" },
    { href: "/tools/business-days-calculator", label: "Business Days Calculator" },
    { href: "/tools/percentage-calculator", label: "Percentage Calculator" },
    { href: "/tools/age-calculator", label: "Age Calculator" },
  ],
};

const seoOverrides: Record<
  string,
  {
    title: string;
    description: string;
    intro?: string;
    h1?: string;
  }
> = {
  "word-counter": {
    title:
      "Free Word Counter Online – Count Words, Characters & Sentences | UtilHubX",
    description:
      "Count words, characters, sentences, and paragraphs instantly with our free online word counter. Fast, accurate, and easy to use for essays, blogs, schoolwork, and documents.",
    h1: "Free Word Counter Online",
    intro:
      "Count words, characters, sentences, and paragraphs instantly with this free online word counter. It is useful for essays, articles, blog posts, school assignments, and any writing that needs a quick and accurate word count.",
  },
  "case-converter": {
    title:
      "Case Converter Online – Uppercase, Lowercase, Title Case & More | UtilHubX",
    description:
      "Convert text to uppercase, lowercase, title case, sentence case, and more with our free online case converter. Fast, simple, and easy to use in any browser.",
    h1: "Case Converter Online",
    intro:
      "Convert text between uppercase, lowercase, title case, sentence case, and other formats with this free online case converter. Great for editing documents, headlines, notes, and content drafts.",
  },
  "remove-line-breaks": {
    title: "Remove Line Breaks Online – Clean Up Text Instantly | UtilHubX",
    description:
      "Remove line breaks, hard returns, and unwanted spacing from text instantly with our free online tool. Perfect for cleaning copied text from PDFs, emails, and documents.",
    h1: "Remove Line Breaks Online",
    intro:
      "Remove line breaks and hard returns from text instantly with this free online tool. It is useful for cleaning up copied text from PDFs, email drafts, documents, and web pages.",
  },
  "merge-pdf": {
    title: "Merge PDF Online – Combine PDF Files Free | UtilHubX",
    description:
      "Merge PDF files online for free. Combine statements, forms, reports, school files, and signed pages into one PDF in your browser.",
    h1: "Merge PDF Online",
    intro:
      "Merge PDF files online to combine contracts, forms, statements, reports, and supporting documents into one cleaner file. This browser-based PDF merger is useful when you need one organized upload instead of several separate attachments.",
  },
  "compress-image": {
    title: "Compress Image Online – Reduce Image File Size Free | UtilHubX",
    description:
      "Compress images online to reduce file size for websites, forms, email, and faster uploads. Free browser-based image compression tool.",
    h1: "Compress Image Online",
    intro:
      "Compress images online to reduce file size for email, website uploads, online forms, resumes, and mobile sharing. It is a fast way to shrink large photos and screenshots without installing extra software.",
  },
  "loan-calculator": {
    title: "Loan Calculator Online – Estimate Monthly Payments | UtilHubX",
    description:
      "Estimate monthly loan payments online using loan amount, interest rate, and term. Free loan calculator for personal loans, auto loans, and more.",
    h1: "Loan Calculator Online",
    intro:
      "Estimate monthly loan payments online using the loan amount, interest rate, and repayment term. This free loan calculator helps compare borrowing scenarios before you apply or accept an offer.",
  },
  "bmi-calculator": {
    title: "BMI Calculator Online – Body Mass Index Calculator | UtilHubX",
    description:
      "Calculate body mass index online using height and weight. Free BMI calculator for a quick body mass index estimate in your browser.",
    h1: "BMI Calculator Online",
    intro:
      "Calculate body mass index online using height and weight for a quick BMI estimate. This free BMI calculator is useful for basic health tracking, fitness planning, and everyday check-ins.",
  },
  "unit-converter": {
    title: "Unit Converter Online – Length, Weight, Temperature & More | UtilHubX",
    description:
      "Convert units online for length, weight, temperature, speed, volume, and more. Free browser-based unit converter for everyday use.",
    h1: "Unit Converter Online",
    intro:
      "Convert units online for length, weight, temperature, speed, volume, and other common measurements. This free unit converter is useful for schoolwork, recipes, shipping, DIY projects, and everyday comparisons.",
  },
};

function getPage(slug: string) {
  return toolPages.find((item) => item.slug === slug);
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

  const override = seoOverrides[item.slug];
  const url = `${SITE_URL}/tools/${item.slug}`;

  const title = override?.title ?? `${item.title} | UtilHubX`;
  const description =
    override?.description ??
    `Use the ${item.title.toLowerCase()} online for free with UtilHubX. Fast, simple, browser-based, and easy to use on desktop or mobile.`;

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
  const override = seoOverrides[item.slug];
  const displayTitle = override?.h1 ?? item.title;
  const displayIntro = override?.intro ?? item.description;

  const relatedGuides = programmaticPages
    .filter((p) => p.relatedTool === item.slug)
    .slice(0, 4);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: item.title,
    applicationCategory: item.category,
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
    url: `${SITE_URL}/tools/${item.slug}`,
    description: override?.description ?? item.description,
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
          {displayTitle}
        </h1>
        <p className="page-intro">{displayIntro}</p>

        <AdBanner />

        {isSpecial ? (
          <SpecialToolRenderer slug={item.slug} />
        ) : item.kind === "suite" ? (
          <CoreToolRenderer slug={item.slug} />
        ) : (
          <div className="card">
            <h2>Use the {item.title} online</h2>
            <p>
              Open the {item.title.toLowerCase()} in your browser, enter the
              values or content you need, and get a result without downloads,
              account setup, or switching devices.
            </p>
          </div>
        )}

        {item.slug === "word-counter" ? (
          <section className="section">
            <div className="card">
              <h2>Count words, characters, sentences, and paragraphs online</h2>
              <p>
                This free word counter helps you quickly measure word count,
                character count, sentence count, and paragraph count in one
                place. It is useful for students writing essays, bloggers
                editing articles, marketers checking copy length, and anyone
                working with text in a browser.
              </p>
              <p>
                A word count tool is helpful when you need to stay within
                writing limits, improve readability, or compare short and long
                versions of content. You can paste text into the tool and
                instantly see how long it is without using extra software.
              </p>
              <p>
                Many people use an online word counter for assignments, product
                descriptions, social posts, email drafts, resumes, and blog
                posts. Because it works in the browser, it is fast to use on
                desktop and mobile.
              </p>
            </div>
          </section>
        ) : null}

        {item.slug === "case-converter" ? (
          <section className="section">
            <div className="card">
              <h2>Convert text case online in seconds</h2>
              <p>
                This free case converter makes it easy to switch text to
                uppercase, lowercase, title case, sentence case, and other
                common text formats. It is useful for editing headlines, fixing
                formatting, cleaning up copied text, and preparing content for
                emails, documents, and blog posts.
              </p>
              <p>
                Instead of manually retyping text, you can paste it into the
                tool and convert it instantly. That makes it useful for writers,
                students, marketers, and anyone who works with text regularly.
              </p>
            </div>
          </section>
        ) : null}

        {item.slug === "remove-line-breaks" ? (
          <section className="section">
            <div className="card">
              <h2>Remove line breaks and hard returns from text</h2>
              <p>
                This free remove line breaks tool helps you clean up text copied
                from PDFs, emails, documents, and websites. It removes unwanted
                hard returns so your text is easier to paste into editors,
                forms, articles, and content management systems.
              </p>
              <p>
                It is especially useful when copied text looks broken across
                multiple lines. Instead of fixing each line manually, you can
                clean the text instantly in your browser.
              </p>
            </div>
          </section>
        ) : null}

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
            {whyPeopleUseOverrides[item.slug] ? (
              <ul>
                {whyPeopleUseOverrides[item.slug].map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            ) : (
              <p>
                People usually use the {item.title.toLowerCase()} when they want a
                fast, focused workflow for a specific {item.category.toLowerCase()}{" "}
                task. It is useful for everyday jobs, schoolwork, business tasks,
                and quick one-off checks where speed matters more than complex
                software.
              </p>
            )}
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2>Tips for better results</h2>
            <ul>
              {(tipsOverrides[item.slug] ?? [
                "Double-check the values, file, or text you enter before generating a result.",
                "Use the related section link below if you need a nearby tool for the same workflow.",
                "On mobile, review the final output before downloading or copying it.",
              ]).map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        {item.slug === "word-counter" ? (
          <section className="section">
            <div className="card">
              <h2>Related text tools</h2>
              <div className="popular-links">
                <Link href="/tools/case-converter">Case Converter</Link>
                <Link href="/tools/remove-line-breaks">Remove Line Breaks</Link>
                <Link href="/tools/line-counter">Line Counter</Link>
                <Link href="/tools/word-frequency-counter">
                  Word Frequency Counter
                </Link>
                <Link href="/tools/remove-extra-spaces">
                  Remove Extra Spaces
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        {item.slug === "case-converter" ? (
          <section className="section">
            <div className="card">
              <h2>Related text tools</h2>
              <div className="popular-links">
                <Link href="/tools/word-counter">Word Counter</Link>
                <Link href="/tools/remove-line-breaks">Remove Line Breaks</Link>
                <Link href="/tools/text-reverser">Text Reverser</Link>
                <Link href="/tools/remove-extra-spaces">
                  Remove Extra Spaces
                </Link>
                <Link href="/tools/slug-generator">Slug Generator</Link>
              </div>
            </div>
          </section>
        ) : null}

        {item.slug === "remove-line-breaks" ? (
          <section className="section">
            <div className="card">
              <h2>Related text tools</h2>
              <div className="popular-links">
                <Link href="/tools/word-counter">Word Counter</Link>
                <Link href="/tools/case-converter">Case Converter</Link>
                <Link href="/tools/remove-extra-spaces">
                  Remove Extra Spaces
                </Link>
                <Link href="/tools/duplicate-line-remover">
                  Duplicate Line Remover
                </Link>
                <Link href="/tools/text-sorter">Text Sorter</Link>
              </div>
            </div>
          </section>
        ) : null}

        {relatedToolOverrides[item.slug] ? (
          <section className="section">
            <div className="card">
              <h2>Related tools</h2>
              <div className="popular-links">
                {relatedToolOverrides[item.slug].map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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