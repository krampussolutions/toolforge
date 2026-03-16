export const suites = [
  {
    slug: "image-tools",
    title: "Image Tools",
    shortTitle: "Image Tools",
    category: "Image",
    description:
      "Compress, resize, crop, and convert images online with free browser-based tools for websites, email, forms, and everyday uploads.",
  },
  {
    slug: "pdf-tools",
    title: "PDF Tools",
    shortTitle: "PDF Tools",
    category: "PDF",
    description:
      "Merge, split, rotate, reorder, and edit PDF files online with simple browser-based PDF tools.",
  },
  {
    slug: "finance-calculators",
    title: "Finance Calculators",
    shortTitle: "Finance",
    category: "Finance",
    description:
      "Use free finance calculators for loans, mortgages, car payments, savings, ROI, and credit card payoff planning.",
  },
  {
    slug: "health-calculators",
    title: "Health Calculators",
    shortTitle: "Health",
    category: "Health",
    description:
      "Use health calculators for BMI, calories, water intake, protein targets, and other everyday wellness estimates.",
  },
  {
    slug: "date-time-tools",
    title: "Date & Time Tools",
    shortTitle: "Date and Time",
    category: "Date and Time",
    description:
      "Calculate age, days between dates, business days, countdowns, hours worked, and time differences online.",
  },
  {
    slug: "text-tools",
    title: "Text Tools",
    shortTitle: "Text Tools",
    category: "Writing",
    description:
      "Use free text tools for word count, case conversion, readability checks, text cleanup, and writing workflows.",
  },
  {
    slug: "conversion-tools",
    title: "Conversion Tools",
    shortTitle: "Converters",
    category: "Conversion",
    description:
      "Convert length, weight, temperature, speed, data, and other everyday units with simple online conversion tools.",
  },
  {
    slug: "business-tools",
    title: "Business Tools",
    shortTitle: "Business",
    category: "Business",
    description:
      "Use business tools for sales tax, break-even, profit, markup, margin, commission, and pricing calculations.",
  },
  {
    slug: "everyday-tools",
    title: "Everyday Tools",
    shortTitle: "Everyday Tools",
    category: "Utility",
    description:
      "Use free everyday tools like password generators, encoders, decoders, validators, randomizers, and quick browser utilities.",
  },
] as const;

export const toolPages = [
  {
    slug: "compress-image",
    title: "Compress Image Online",
    category: "Image",
    description:
      "Compress images online to reduce file size for websites, email, forms, and faster uploads.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "resize-image",
    title: "Resize Image Online",
    category: "Image",
    description:
      "Resize images online for websites, social media, forms, email, and everyday uploads.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "jpg-to-png",
    title: "JPG to PNG Converter",
    category: "Image",
    description:
      "Convert JPG images to PNG online for screenshots, graphics, editing, and file-format compatibility.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "png-to-jpg",
    title: "PNG to JPG Converter",
    category: "Image",
    description:
      "Convert PNG images to JPG online for smaller files, email attachments, and easier sharing.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "crop-image",
    title: "Crop Image Online",
    category: "Image",
    description:
      "Crop images online to remove unwanted edges and prepare photos or graphics for upload and sharing.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF",
    category: "PDF",
    description:
      "Convert images to PDF online to combine photos, scans, screenshots, and pages into one document.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "merge-pdf",
    title: "Merge PDF",
    category: "PDF",
    description:
      "Merge PDF files online to combine documents, forms, statements, and reports into one file.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "split-pdf",
    title: "Split PDF",
    category: "PDF",
    description:
      "Split PDF files online to extract pages, separate sections, and create smaller documents.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator",
    category: "Finance",
    description:
      "Estimate monthly loan payments online using loan amount, interest rate, and repayment term.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    category: "Finance",
    description:
      "Estimate mortgage payments online using home price, down payment, loan term, and interest rate.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "car-payment-calculator",
    title: "Car Payment Calculator",
    category: "Finance",
    description:
      "Estimate monthly car payments online using vehicle price, loan term, trade-in, and interest rate.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    category: "Finance",
    description:
      "Estimate compound interest growth over time for savings, investments, and recurring contributions.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "savings-calculator",
    title: "Savings Calculator",
    category: "Finance",
    description:
      "Estimate future savings growth online using deposits, interest, and time.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    category: "Finance",
    description:
      "Calculate return on investment online to compare profit, cost, and overall performance.",
    parent: "finance-calculators",
    kind: "suite",
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    category: "Health",
    description:
      "Calculate body mass index online using height and weight for a quick BMI estimate.",
    parent: "health-calculators",
    kind: "suite",
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator",
    category: "Health",
    description:
      "Estimate daily calorie needs online based on age, size, activity, and goals.",
    parent: "health-calculators",
    kind: "suite",
  },
  {
    slug: "protein-calculator",
    title: "Protein Calculator",
    category: "Health",
    description:
      "Estimate daily protein intake online based on body weight, activity level, and goals.",
    parent: "health-calculators",
    kind: "suite",
  },
  {
    slug: "water-intake-calculator",
    title: "Water Intake Calculator",
    category: "Health",
    description:
      "Estimate daily water intake online based on body size, climate, and activity level.",
    parent: "health-calculators",
    kind: "suite",
  },
  {
    slug: "age-calculator",
    title: "Age Calculator",
    category: "Date and Time",
    description:
      "Calculate exact age online in years, months, and days from a birth date or start date.",
    parent: "date-time-tools",
    kind: "suite",
  },
  {
    slug: "days-between-dates",
    title: "Days Between Dates",
    category: "Date and Time",
    description:
      "Find the number of calendar days between two dates for deadlines, travel, and planning.",
    parent: "date-time-tools",
    kind: "suite",
  },
  {
    slug: "countdown-calculator",
    title: "Countdown Calculator",
    category: "Date and Time",
    description:
      "Count down to a future date and see the remaining days, hours, and time left.",
    parent: "date-time-tools",
    kind: "suite",
  },
  {
    slug: "hours-worked-calculator",
    title: "Hours Worked Calculator",
    category: "Date and Time",
    description:
      "Calculate total hours worked online for shifts, timesheets, and payroll estimates.",
    parent: "date-time-tools",
    kind: "suite",
  },
  {
    slug: "word-counter",
    title: "Word Counter",
    category: "Writing",
    description:
      "Count words, characters, sentences, and paragraphs online for essays, blogs, and documents.",
    parent: "text-tools",
    kind: "suite",
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    category: "Writing",
    description:
      "Convert text to uppercase, lowercase, title case, and sentence case online.",
    parent: "text-tools",
    kind: "suite",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    category: "Conversion",
    description:
      "Convert units online for length, weight, temperature, speed, volume, and more.",
    parent: "conversion-tools",
    kind: "suite",
  },
  {
    slug: "feet-to-meters",
    title: "Feet to Meters Converter",
    category: "Conversion",
    description:
      "Convert feet to meters online instantly for distance, height, and measurement tasks.",
    parent: "conversion-tools",
    kind: "suite",
  },
  {
    slug: "kg-to-lbs",
    title: "KG to LBS Converter",
    category: "Conversion",
    description:
      "Convert kilograms to pounds online instantly for weight and everyday measurement tasks.",
    parent: "conversion-tools",
    kind: "suite",
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    category: "Business",
    description:
      "Calculate discount amounts and final prices online for sales, pricing, and retail math.",
    parent: "business-tools",
    kind: "suite",
  },
  {
    slug: "break-even-calculator",
    title: "Break-Even Calculator",
    category: "Business",
    description:
      "Calculate break-even point online using fixed costs, variable costs, and selling price.",
    parent: "business-tools",
    kind: "suite",
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    category: "Utility",
    description:
      "Calculate percentages online for increases, decreases, differences, and everyday math.",
    parent: "everyday-tools",
    kind: "suite",
  },
  {
    slug: "tip-calculator",
    title: "Tip Calculator",
    category: "Utility",
    description:
      "Calculate tip amount, final total, and split bill costs online in seconds.",
    parent: "everyday-tools",
    kind: "suite",
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Utility",
    description:
      "Generate strong random passwords online for email, banking, Wi-Fi, and work accounts.",
    parent: "everyday-tools",
    kind: "suite",
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    category: "Utility",
    description:
      "Format and beautify JSON online for easier reading, debugging, and development work.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "base64-encoder",
    title: "Base64 Encoder",
    category: "Utility",
    description:
      "Encode text to Base64 online instantly for testing, debugging, and quick conversions.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "base64-decoder",
    title: "Base64 Decoder",
    category: "Utility",
    description:
      "Decode Base64 text online instantly to reveal the original text or data.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "url-encoder",
    title: "URL Encoder",
    category: "Utility",
    description:
      "Encode text for safe use in URLs online by converting spaces and special characters.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "url-decoder",
    title: "URL Decoder",
    category: "Utility",
    description:
      "Decode URL-encoded text online to make links and query strings easier to read.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "uuid-generator",
    title: "UUID Generator",
    category: "Utility",
    description:
      "Generate UUIDs online in your browser for software projects, testing, and databases.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "slug-generator",
    title: "Slug Generator",
    category: "Writing",
    description:
      "Generate clean URL slugs from text online for blog posts, pages, and SEO-friendly links.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "remove-line-breaks",
    title: "Remove Line Breaks",
    category: "Writing",
    description:
      "Remove line breaks from text online to clean up copied content from PDFs, emails, and websites.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "text-sorter",
    title: "Text Sorter",
    category: "Writing",
    description:
      "Sort lines of text alphabetically online for lists, names, keywords, and cleanup tasks.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "duplicate-line-remover",
    title: "Duplicate Line Remover",
    category: "Writing",
    description:
      "Remove duplicate lines from text online to clean lists, repeated entries, and copied content.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "png-compressor",
    title: "PNG Compressor",
    category: "Image",
    description:
      "Compress PNG images online to reduce file size for websites, email, and uploads.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "webp-to-png",
    title: "WEBP to PNG",
    category: "Image",
    description:
      "Convert WEBP images to PNG online for editing, sharing, uploads, and PNG compatibility.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "text-reverser",
    title: "Text Reverser",
    category: "Writing",
    description:
      "Reverse text online instantly for formatting, novelty text, and quick text testing.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "remove-extra-spaces",
    title: "Remove Extra Spaces",
    category: "Writing",
    description:
      "Remove extra spaces from text online to clean pasted content, forms, and messy drafts.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "line-counter",
    title: "Line Counter",
    category: "Writing",
    description:
      "Count lines in text online for code, notes, lists, and quick text-length checks.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "word-frequency-counter",
    title: "Word Frequency Counter",
    category: "Writing",
    description:
      "Count the most common words in text online for keyword analysis and writing review.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "text-repeater",
    title: "Text Repeater",
    category: "Writing",
    description:
      "Repeat text multiple times online for formatting, placeholders, and quick bulk text generation.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "text-to-binary",
    title: "Text to Binary",
    category: "Utility",
    description:
      "Convert plain text to binary online for quick encoding checks and learning.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "binary-to-text",
    title: "Binary to Text",
    category: "Utility",
    description:
      "Convert binary to readable text online for decoding and quick browser-based checks.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "rgb-to-hex",
    title: "RGB to HEX",
    category: "Utility",
    description:
      "Convert RGB color values to HEX online for web design, CSS, and color matching.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "hex-to-rgb",
    title: "HEX to RGB",
    category: "Utility",
    description:
      "Convert HEX color codes to RGB online for design, CSS, and digital color reference.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "unix-timestamp-converter",
    title: "Unix Timestamp Converter",
    category: "Date and Time",
    description:
      "Convert Unix timestamps to readable dates and times online for logs and development work.",
    parent: "date-time-tools",
    kind: "special",
  },
  {
    slug: "random-letter-generator",
    title: "Random Letter Generator",
    category: "Utility",
    description:
      "Generate random letters online for games, classroom activities, and quick selections.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "password-strength-checker",
    title: "Password Strength Checker",
    category: "Utility",
    description:
      "Check password strength online to see whether a password looks weak, moderate, or strong.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "uuid-bulk-generator",
    title: "UUID Bulk Generator",
    category: "Utility",
    description:
      "Generate multiple UUIDs online at once for testing, datasets, and development workflows.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "meta-description-counter",
    title: "Meta Description Counter",
    category: "Writing",
    description:
      "Count SEO meta description characters online before publishing a page or article.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "html-escape",
    title: "HTML Escape",
    category: "Utility",
    description:
      "Escape special HTML characters online for safer markup, code snippets, and web content.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "html-unescape",
    title: "HTML Unescape",
    category: "Utility",
    description:
      "Convert escaped HTML back to normal text online for testing and content cleanup.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "list-randomizer",
    title: "List Randomizer",
    category: "Utility",
    description:
      "Shuffle list items into random order online for drawings, games, and group selection.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "roman-numeral-converter",
    title: "Roman Numeral Converter",
    category: "Utility",
    description:
      "Convert numbers to and from Roman numerals online for schoolwork and quick reference.",
    parent: "everyday-tools",
    kind: "special",
  },
  {
    slug: "webp-to-jpg",
    title: "WEBP to JPG",
    category: "Image",
    description:
      "Convert WEBP images to JPG online for easier sharing, printing, and editing.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "sales-tax-calculator",
    title: "Sales Tax Calculator",
    category: "Business",
    description:
      "Calculate sales tax, subtotal, and final price online for quotes, invoices, and purchases.",
    parent: "business-tools",
    kind: "special",
  },
  {
    slug: "credit-card-payoff-calculator",
    title: "Credit Card Payoff Calculator",
    category: "Finance",
    description:
      "Estimate how long it may take to pay off credit card debt based on balance, APR, and payment amount.",
    parent: "finance-calculators",
    kind: "special",
  },
  {
    slug: "business-days-calculator",
    title: "Business Days Calculator",
    category: "Date and Time",
    description:
      "Count business days and weekdays between two dates online for deadlines and scheduling.",
    parent: "date-time-tools",
    kind: "special",
  },
  {
    slug: "weeks-between-dates",
    title: "Weeks Between Dates Calculator",
    category: "Date and Time",
    description:
      "Calculate the number of full weeks and extra days between two dates online.",
    parent: "date-time-tools",
    kind: "special",
  },
  {
    slug: "reading-level-checker",
    title: "Reading Level Checker",
    category: "Writing",
    description:
      "Estimate reading grade level and readability online for pasted text, blog posts, and documents.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "title-case-headline-analyzer",
    title: "Title Case Headline Analyzer",
    category: "Writing",
    description:
      "Convert headlines to title case and review headline length and readability online.",
    parent: "text-tools",
    kind: "special",
  },
  {
    slug: "rotate-pdf",
    title: "Rotate PDF",
    category: "PDF",
    description:
      "Rotate PDF pages online and download the updated file to fix sideways or upside-down documents.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "delete-pdf-pages",
    title: "Delete PDF Pages",
    category: "PDF",
    description:
      "Delete selected pages from a PDF online to remove blank, extra, or unwanted sections.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "reorder-pdf-pages",
    title: "Reorder PDF Pages",
    category: "PDF",
    description:
      "Reorder PDF pages online and download a reorganized file with the correct page sequence.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "pdf-page-counter",
    title: "PDF Page Counter",
    category: "PDF",
    description:
      "Count how many pages are in a PDF file online before uploading, sharing, or editing it.",
    parent: "pdf-tools",
    kind: "special",
  },
  {
    slug: "image-resizer-by-kb",
    title: "Image Resizer by KB",
    category: "Image",
    description:
      "Resize and compress an image toward a target KB size for forms, portals, and upload limits.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "jpg-to-webp",
    title: "JPG to WEBP",
    category: "Image",
    description:
      "Convert JPG images to WEBP online for smaller web-ready files and faster page loading.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "png-to-webp",
    title: "PNG to WEBP",
    category: "Image",
    description:
      "Convert PNG images to WEBP online for lighter files and modern web delivery.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "jpeg-to-jpg",
    title: "JPEG to JPG",
    category: "Image",
    description:
      "Convert JPEG images to JPG online for easier uploads, sharing, and compatibility.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "gif-to-jpg",
    title: "GIF to JPG",
    category: "Image",
    description:
      "Convert a GIF image to JPG online when you need a still image for sharing or uploads.",
    parent: "image-tools",
    kind: "special",
  },
  {
    slug: "svg-to-png",
    title: "SVG to PNG",
    category: "Image",
    description:
      "Convert SVG graphics to PNG online for websites, uploads, and design handoffs.",
    parent: "image-tools",
    kind: "special",
  },
] as const;

export const categories = [
  "Business",
  "Conversion",
  "Date and Time",
  "Finance",
  "Health",
  "Image",
  "PDF",
  "Utility",
  "Writing",
] as const;

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://utilhubx.com";
export const SITE_URL = rawSiteUrl.replace(/\/$/, "");
export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5957528671321920";

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const categoryDescriptions: Record<string, string> = {
  Image:
    "Image tools help people compress, resize, crop, convert, and optimize images for websites, email, forms, and everyday uploads.",
  PDF: "PDF tools help people merge, split, rotate, reorder, and organize documents directly in the browser.",
  Finance:
    "Finance tools help people estimate loan payments, mortgage costs, savings growth, ROI, and debt payoff scenarios.",
  Health:
    "Health tools provide quick estimates for BMI, calories, protein targets, water intake, and other everyday wellness questions.",
  "Date and Time":
    "Date and time tools help with age calculations, date differences, countdowns, business days, work hours, and timestamp conversions.",
  Writing:
    "Writing tools help with word count, case conversion, readability, text cleanup, and other common content editing tasks.",
  Conversion:
    "Conversion tools cover common everyday conversions like feet to meters, kilograms to pounds, and other measurement changes.",
  Business:
    "Business tools help with sales tax, pricing, margins, markup, break-even analysis, and other small business calculations.",
  Utility:
    "Utility tools cover quick tasks like generators, validators, encoders, decoders, randomizers, and color converters.",
};