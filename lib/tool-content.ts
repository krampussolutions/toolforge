import { toolPages } from "@/lib/site";

export type ToolContent = {
  examples: string[];
  intro: string;
  howItWorks: string[];
  faq: { q: string; a: string }[];
};

const overrides: Record<string, ToolContent> = {
  "webp-to-jpg": {
    intro:
      "WEBP to JPG converts modern WEBP images into widely supported JPG files directly in your browser. It is useful when you need a file format that works with older apps, upload forms, printers, or image editors that do not fully support WEBP.",
    examples: [
      "Convert WEBP images before uploading to a site that only accepts JPG",
      "Turn screenshots or downloaded assets into a more compatible file type",
      "Create smaller, easy-to-share photos for email or messaging",
    ],
    howItWorks: [
      "Upload a WEBP image from your device",
      "Convert the file to JPG in your browser",
      "Preview the result and download the converted image",
      "Repeat the process for any other WEBP files you need to change",
    ],
    faq: [
      {
        q: "Why use WEBP to JPG?",
        a: "Use WEBP to JPG when you need a more universally accepted image format for uploads, email, or older software.",
      },
      {
        q: "Can I use WEBP to JPG on mobile?",
        a: "Yes. You can convert WEBP images on desktop or mobile in a modern browser.",
      },
      {
        q: "Will the image stay private?",
        a: "This converter is designed for browser-based use so you can handle simple conversions without a complex desktop workflow.",
      },
    ],
  },
  "sales-tax-calculator": {
    intro:
      "Sales Tax Calculator helps you work out the tax amount, subtotal, and final total before you ring up an order, send an invoice, or check a receipt. It is useful for everyday shopping, contractor estimates, and small-business pricing.",
    examples: [
      "Estimate the final price of a retail purchase with local tax added",
      "Check whether a quote includes the correct tax amount",
      "See how much sales tax changes the final total on a larger order",
    ],
    howItWorks: [
      "Enter the price before tax",
      "Enter the sales tax rate as a percentage",
      "View the tax amount and final total instantly",
      "Adjust the rate or price to compare different scenarios",
    ],
    faq: [
      {
        q: "What does the sales tax calculator show?",
        a: "It shows the tax amount and the final total after tax is added to the original price.",
      },
      {
        q: "Can I use decimal tax rates?",
        a: "Yes. You can enter common rates like 7, 7.25, or 8.5 depending on your location.",
      },
      {
        q: "Is this useful for business quotes?",
        a: "Yes. It is useful for checking proposals, invoices, and point-of-sale totals.",
      },
    ],
  },
  "credit-card-payoff-calculator": {
    intro:
      "Credit Card Payoff Calculator estimates how long it may take to clear a balance based on your current balance, interest rate, and monthly payment. It helps you compare payoff strategies before you commit to a plan.",
    examples: [
      "Estimate payoff time for an existing credit card balance",
      "Compare a minimum-style payment to a more aggressive monthly payment",
      "See how much interest can build up when a balance stays open longer",
    ],
    howItWorks: [
      "Enter the current card balance",
      "Add the APR for the card",
      "Enter the amount you plan to pay each month",
      "Review the estimated months to payoff and total interest",
    ],
    faq: [
      {
        q: "Does this replace lender statements?",
        a: "No. It is an estimate designed to help with planning and comparison, not a lender-issued payoff figure.",
      },
      {
        q: "What if my payment is too low?",
        a: "If the monthly payment does not cover the interest, the calculator will show that payoff is not possible at that rate.",
      },
      {
        q: "Why is payoff time important?",
        a: "Payoff time helps you understand the cost of carrying credit card debt and how faster payments can reduce interest.",
      },
    ],
  },
  "business-days-calculator": {
    intro:
      "Business Days Calculator counts weekdays between two dates so you can estimate turnaround time, delivery windows, deadlines, and scheduling gaps without counting weekends by hand.",
    examples: [
      "Count working days between a start date and project deadline",
      "Estimate delivery windows that skip weekends",
      "Check how many weekdays are left before an invoice due date",
    ],
    howItWorks: [
      "Choose a start date and end date",
      "Let the tool count the calendar days and weekdays",
      "Review the total business days and weekend days",
      "Adjust the dates until the schedule fits your needs",
    ],
    faq: [
      {
        q: "Does it count weekends?",
        a: "It separates calendar days from weekdays so you can see both numbers clearly.",
      },
      {
        q: "Does it handle custom holidays?",
        a: "This version focuses on weekdays and weekends. For most quick planning needs, that covers the common use case.",
      },
      {
        q: "Who uses a business days calculator?",
        a: "Business owners, freelancers, contractors, office staff, and anyone planning deadlines commonly use it.",
      },
    ],
  },
  "weeks-between-dates": {
    intro:
      "Weeks Between Dates Calculator shows how many full weeks and extra days fall between two dates. It is useful for scheduling, project windows, travel planning, and reporting periods.",
    examples: [
      "Find the number of weeks between two appointments",
      "Break a project timeline into weeks and leftover days",
      "Estimate how long a date range lasts without doing the math manually",
    ],
    howItWorks: [
      "Pick a start date and end date",
      "The tool calculates the total days between them",
      "It converts that total into full weeks and remaining days",
      "Use the result for planning or comparison",
    ],
    faq: [
      {
        q: "Why use weeks instead of days?",
        a: "Weeks make longer ranges easier to understand at a glance, especially for projects, due dates, and recurring plans.",
      },
      {
        q: "Does it also show days?",
        a: "Yes. The calculator shows total days along with full weeks and remaining days.",
      },
      {
        q: "Can I use this for work schedules?",
        a: "Yes. It is useful for planning schedules, timelines, contracts, and recurring tasks.",
      },
    ],
  },
  "reading-level-checker": {
    intro:
      "Reading Level Checker estimates how difficult a block of text may be to read. It can help with blog posts, landing pages, emails, product descriptions, school writing, and general readability checks.",
    examples: [
      "Review a blog post before publishing to make it easier to scan",
      "Check whether marketing copy feels too dense for general readers",
      "Compare different rewrites to see which version is simpler",
    ],
    howItWorks: [
      "Paste your text into the tool",
      "The checker counts words, sentences, and syllable patterns",
      "It estimates a readability score and grade level",
      "Use the result to simplify or tighten the writing if needed",
    ],
    faq: [
      {
        q: "Is the reading level exact?",
        a: "No. It is an estimate that helps you compare drafts and spot overly dense writing.",
      },
      {
        q: "Who uses reading level tools?",
        a: "Writers, marketers, teachers, students, and business owners commonly use them.",
      },
      {
        q: "Can this help SEO content?",
        a: "Yes. Clearer content is often easier for visitors to read and stay engaged with.",
      },
    ],
  },
  "title-case-headline-analyzer": {
    intro:
      "Title Case Headline Analyzer converts text into title case and gives quick feedback on length, word count, and headline shape. It is useful for blog titles, product titles, page headings, email subjects, and social posts.",
    examples: [
      "Convert a rough draft headline into title case quickly",
      "Check whether a headline may be too short or too long",
      "Review word count before publishing a page title or article heading",
    ],
    howItWorks: [
      "Paste or type a headline into the input box",
      "Convert the headline to title case instantly",
      "Review length and quick feedback notes",
      "Edit and compare alternate headline versions",
    ],
    faq: [
      {
        q: "What is title case?",
        a: "Title case capitalizes major words in a headline while leaving certain short connector words lowercase depending on style.",
      },
      {
        q: "Does this replace a full SEO audit?",
        a: "No. It gives quick headline formatting and length guidance, not a full SEO optimization report.",
      },
      {
        q: "What is this useful for?",
        a: "It is useful for page titles, H1s, blog posts, video titles, and social content drafts.",
      },
    ],
  },
};

function buildGenericContent(title: string, category: string, description: string): ToolContent {
  const lowerTitle = title.toLowerCase();
  const lowerCategory = category.toLowerCase();
  return {
    intro: `${title} helps people complete a common ${lowerCategory} task quickly in the browser without extra software. It is useful when you want a focused workflow for a simple job and do not need a heavier desktop app.`,
    examples: [
      `Use the ${lowerTitle} for quick everyday ${lowerCategory} work`,
      `Handle a one-off ${lowerCategory} task before sharing, publishing, or saving the result`,
      `Get a fast answer in your browser without extra setup`,
    ],
    howItWorks: [
      "Enter, upload, or paste the required input",
      "Run the tool in your browser",
      "Review the result and make adjustments if needed",
      "Copy, save, or download the output",
    ],
    faq: [
      {
        q: `What does ${lowerTitle} do?`,
        a: description,
      },
      {
        q: "Does this work in the browser?",
        a: "Yes. UtilHubX tools are designed to work directly in the browser whenever possible.",
      },
      {
        q: "Can I use this for free?",
        a: "Yes. This tool is available as a free browser-based utility on UtilHubX.",
      },
    ],
  };
}

export const toolContent: Record<string, ToolContent> = Object.fromEntries(
  toolPages.map((item) => [
    item.slug,
    overrides[item.slug] ?? buildGenericContent(item.title, item.category, item.description),
  ])
);
