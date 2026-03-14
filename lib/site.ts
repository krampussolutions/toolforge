export const suites = [
  {
    "slug": "image-tools",
    "title": "Image Tools",
    "shortTitle": "Image Tools",
    "category": "Image",
    "description": "Compress, resize, crop, and convert images with simple browser-based tools."
  },
  {
    "slug": "pdf-tools",
    "title": "PDF Tools",
    "shortTitle": "PDF Tools",
    "category": "PDF",
    "description": "Merge, split, and build PDFs in the browser with a cleaner customer-facing workflow."
  },
  {
    "slug": "finance-calculators",
    "title": "Finance Calculators",
    "shortTitle": "Finance",
    "category": "Finance",
    "description": "Loan, mortgage, car payment, savings, ROI, and payoff tools for everyday money tasks."
  },
  {
    "slug": "health-calculators",
    "title": "Health Calculators",
    "shortTitle": "Health",
    "category": "Health",
    "description": "BMI, calories, water intake, protein, ideal weight, and related wellness calculators."
  },
  {
    "slug": "date-time-tools",
    "title": "Date & Time Tools",
    "shortTitle": "Date and Time",
    "category": "Date and Time",
    "description": "Age, countdowns, date difference, work hours, and time duration tools."
  },
  {
    "slug": "text-tools",
    "title": "Text Tools",
    "shortTitle": "Text Tools",
    "category": "Writing",
    "description": "Word counter, case converter, reading time, cleanup, and placeholder text generators."
  },
  {
    "slug": "conversion-tools",
    "title": "Conversion Tools",
    "shortTitle": "Converters",
    "category": "Conversion",
    "description": "Length, weight, temperature, speed, data, and volume conversions in one place."
  },
  {
    "slug": "business-tools",
    "title": "Business Tools",
    "shortTitle": "Business",
    "category": "Business",
    "description": "Break-even, margin, markup, commission, and profit tools for small business use."
  },
  {
    "slug": "everyday-tools",
    "title": "Everyday Tools",
    "shortTitle": "Everyday Tools",
    "category": "Utility",
    "description": "Password generators, text helpers, validators, generators, and quick browser tools people use every day."
  }
] as const;
export const toolPages = [
  {
    "slug": "compress-image",
    "title": "Compress Image Online",
    "category": "Image",
    "description": "Reduce image file size directly in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "resize-image",
    "title": "Resize Image Online",
    "category": "Image",
    "description": "Resize images in your browser without uploading to a server.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "jpg-to-png",
    "title": "JPG to PNG Converter",
    "category": "Image",
    "description": "Convert JPG images to PNG in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "png-to-jpg",
    "title": "PNG to JPG Converter",
    "category": "Image",
    "description": "Convert PNG images to JPG in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "crop-image",
    "title": "Crop Image Online",
    "category": "Image",
    "description": "Crop an image quickly in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "image-to-pdf",
    "title": "Image to PDF",
    "category": "PDF",
    "description": "Turn one or more images into a PDF.",
    "parent": "pdf-tools",
    "kind": "special"
  },
  {
    "slug": "merge-pdf",
    "title": "Merge PDF",
    "category": "PDF",
    "description": "Combine multiple PDFs into one file.",
    "parent": "pdf-tools",
    "kind": "special"
  },
  {
    "slug": "split-pdf",
    "title": "Split PDF",
    "category": "PDF",
    "description": "Extract selected PDF pages into a new file.",
    "parent": "pdf-tools",
    "kind": "special"
  },
  {
    "slug": "loan-calculator",
    "title": "Loan Calculator",
    "category": "Finance",
    "description": "Estimate monthly loan payments online.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "mortgage-calculator",
    "title": "Mortgage Calculator",
    "category": "Finance",
    "description": "Estimate mortgage payments online.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "car-payment-calculator",
    "title": "Car Payment Calculator",
    "category": "Finance",
    "description": "Estimate monthly car payments online.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "compound-interest-calculator",
    "title": "Compound Interest Calculator",
    "category": "Finance",
    "description": "Estimate investment growth over time.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "savings-calculator",
    "title": "Savings Calculator",
    "category": "Finance",
    "description": "Estimate future savings growth.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "roi-calculator",
    "title": "ROI Calculator",
    "category": "Finance",
    "description": "Calculate return on investment quickly.",
    "parent": "finance-calculators",
    "kind": "suite"
  },
  {
    "slug": "bmi-calculator",
    "title": "BMI Calculator",
    "category": "Health",
    "description": "Calculate body mass index instantly.",
    "parent": "health-calculators",
    "kind": "suite"
  },
  {
    "slug": "calorie-calculator",
    "title": "Calorie Calculator",
    "category": "Health",
    "description": "Estimate daily calorie needs.",
    "parent": "health-calculators",
    "kind": "suite"
  },
  {
    "slug": "protein-calculator",
    "title": "Protein Calculator",
    "category": "Health",
    "description": "Estimate daily protein target.",
    "parent": "health-calculators",
    "kind": "suite"
  },
  {
    "slug": "water-intake-calculator",
    "title": "Water Intake Calculator",
    "category": "Health",
    "description": "Estimate daily water intake.",
    "parent": "health-calculators",
    "kind": "suite"
  },
  {
    "slug": "age-calculator",
    "title": "Age Calculator",
    "category": "Date and Time",
    "description": "Calculate your exact age online.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "days-between-dates",
    "title": "Days Between Dates",
    "category": "Date and Time",
    "description": "Find the number of days between two dates.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "countdown-calculator",
    "title": "Countdown Calculator",
    "category": "Date and Time",
    "description": "Count down to a future date.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "hours-worked-calculator",
    "title": "Hours Worked Calculator",
    "category": "Date and Time",
    "description": "Calculate total hours worked quickly.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "word-counter",
    "title": "Word Counter",
    "category": "Writing",
    "description": "Count words and characters online.",
    "parent": "text-tools",
    "kind": "suite"
  },
  {
    "slug": "case-converter",
    "title": "Case Converter",
    "category": "Writing",
    "description": "Convert uppercase, lowercase, and title case.",
    "parent": "text-tools",
    "kind": "suite"
  },
  {
    "slug": "unit-converter",
    "title": "Unit Converter",
    "category": "Conversion",
    "description": "Convert units online.",
    "parent": "conversion-tools",
    "kind": "suite"
  },
  {
    "slug": "feet-to-meters",
    "title": "Feet to Meters Converter",
    "category": "Conversion",
    "description": "Convert feet to meters instantly.",
    "parent": "conversion-tools",
    "kind": "suite"
  },
  {
    "slug": "kg-to-lbs",
    "title": "KG to LBS Converter",
    "category": "Conversion",
    "description": "Convert kilograms to pounds instantly.",
    "parent": "conversion-tools",
    "kind": "suite"
  },
  {
    "slug": "discount-calculator",
    "title": "Discount Calculator",
    "category": "Business",
    "description": "Calculate final price after discount.",
    "parent": "business-tools",
    "kind": "suite"
  },
  {
    "slug": "break-even-calculator",
    "title": "Break-Even Calculator",
    "category": "Business",
    "description": "Calculate break-even point.",
    "parent": "business-tools",
    "kind": "suite"
  },
  {
    "slug": "percentage-calculator",
    "title": "Percentage Calculator",
    "category": "Utility",
    "description": "Calculate percentages quickly.",
    "parent": "everyday-tools",
    "kind": "suite"
  },
  {
    "slug": "tip-calculator",
    "title": "Tip Calculator",
    "category": "Utility",
    "description": "Calculate tip and total instantly.",
    "parent": "everyday-tools",
    "kind": "suite"
  },
  {
    "slug": "password-generator",
    "title": "Password Generator",
    "category": "Utility",
    "description": "Generate strong passwords.",
    "parent": "everyday-tools",
    "kind": "suite"
  },
  {
    "slug": "json-formatter",
    "title": "JSON Formatter",
    "category": "Utility",
    "description": "Format and beautify JSON online.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "base64-encoder",
    "title": "Base64 Encoder",
    "category": "Utility",
    "description": "Encode text to Base64 instantly.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "base64-decoder",
    "title": "Base64 Decoder",
    "category": "Utility",
    "description": "Decode Base64 text instantly.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "url-encoder",
    "title": "URL Encoder",
    "category": "Utility",
    "description": "Encode text for safe use in URLs.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "url-decoder",
    "title": "URL Decoder",
    "category": "Utility",
    "description": "Decode URL-encoded text instantly.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "uuid-generator",
    "title": "UUID Generator",
    "category": "Utility",
    "description": "Generate UUIDs in your browser.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "slug-generator",
    "title": "Slug Generator",
    "category": "Writing",
    "description": "Turn text into a clean URL slug.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "remove-line-breaks",
    "title": "Remove Line Breaks",
    "category": "Writing",
    "description": "Remove line breaks from text quickly.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "text-sorter",
    "title": "Text Sorter",
    "category": "Writing",
    "description": "Sort lines of text alphabetically.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "duplicate-line-remover",
    "title": "Duplicate Line Remover",
    "category": "Writing",
    "description": "Remove duplicate lines from text.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "png-compressor",
    "title": "PNG Compressor",
    "category": "Image",
    "description": "Compress PNG images in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "webp-to-png",
    "title": "WEBP to PNG",
    "category": "Image",
    "description": "Convert WEBP images to PNG in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "text-reverser",
    "title": "Text Reverser",
    "category": "Writing",
    "description": "Reverse text instantly in your browser.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "remove-extra-spaces",
    "title": "Remove Extra Spaces",
    "category": "Writing",
    "description": "Clean repeated spaces and blank gaps from text.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "line-counter",
    "title": "Line Counter",
    "category": "Writing",
    "description": "Count lines in text instantly.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "word-frequency-counter",
    "title": "Word Frequency Counter",
    "category": "Writing",
    "description": "Count the most common words in text.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "text-repeater",
    "title": "Text Repeater",
    "category": "Writing",
    "description": "Repeat text multiple times quickly.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "text-to-binary",
    "title": "Text to Binary",
    "category": "Utility",
    "description": "Convert plain text into binary.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "binary-to-text",
    "title": "Binary to Text",
    "category": "Utility",
    "description": "Convert binary back into readable text.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "rgb-to-hex",
    "title": "RGB to HEX",
    "category": "Utility",
    "description": "Convert RGB color values to HEX.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "hex-to-rgb",
    "title": "HEX to RGB",
    "category": "Utility",
    "description": "Convert HEX colors to RGB values.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "unix-timestamp-converter",
    "title": "Unix Timestamp Converter",
    "category": "Date and Time",
    "description": "Convert Unix timestamps and readable dates.",
    "parent": "date-time-tools",
    "kind": "special"
  },
  {
    "slug": "random-letter-generator",
    "title": "Random Letter Generator",
    "category": "Utility",
    "description": "Generate random letters instantly.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "password-strength-checker",
    "title": "Password Strength Checker",
    "category": "Utility",
    "description": "Check password strength in the browser.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "uuid-bulk-generator",
    "title": "UUID Bulk Generator",
    "category": "Utility",
    "description": "Generate multiple UUIDs at once.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "meta-description-counter",
    "title": "Meta Description Counter",
    "category": "Writing",
    "description": "Count characters for SEO meta descriptions.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "html-escape",
    "title": "HTML Escape",
    "category": "Utility",
    "description": "Escape special HTML characters safely.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "html-unescape",
    "title": "HTML Unescape",
    "category": "Utility",
    "description": "Convert escaped HTML text back to normal.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "list-randomizer",
    "title": "List Randomizer",
    "category": "Utility",
    "description": "Shuffle list items into a random order.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "roman-numeral-converter",
    "title": "Roman Numeral Converter",
    "category": "Utility",
    "description": "Convert numbers to and from Roman numerals.",
    "parent": "everyday-tools",
    "kind": "special"
  },
  {
    "slug": "webp-to-jpg",
    "title": "WEBP to JPG",
    "category": "Image",
    "description": "Convert WEBP images to JPG in your browser.",
    "parent": "image-tools",
    "kind": "special"
  },
  {
    "slug": "sales-tax-calculator",
    "title": "Sales Tax Calculator",
    "category": "Business",
    "description": "Calculate sales tax, subtotal, and final price instantly.",
    "parent": "business-tools",
    "kind": "special"
  },
  {
    "slug": "credit-card-payoff-calculator",
    "title": "Credit Card Payoff Calculator",
    "category": "Finance",
    "description": "Estimate how long it will take to pay off credit card debt.",
    "parent": "finance-calculators",
    "kind": "special"
  },
  {
    "slug": "business-days-calculator",
    "title": "Business Days Calculator",
    "category": "Date and Time",
    "description": "Count weekdays and business days between two dates.",
    "parent": "date-time-tools",
    "kind": "special"
  },
  {
    "slug": "weeks-between-dates",
    "title": "Weeks Between Dates Calculator",
    "category": "Date and Time",
    "description": "Calculate the number of weeks and days between two dates.",
    "parent": "date-time-tools",
    "kind": "special"
  },
  {
    "slug": "reading-level-checker",
    "title": "Reading Level Checker",
    "category": "Writing",
    "description": "Estimate reading grade level and readability for pasted text.",
    "parent": "text-tools",
    "kind": "special"
  },
  {
    "slug": "title-case-headline-analyzer",
    "title": "Title Case Headline Analyzer",
    "category": "Writing",
    "description": "Convert headlines to title case and review headline quality.",
    "parent": "text-tools",
    "kind": "special"
  }
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
  "Writing"
] as const;

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://utilhubx.com";
export const SITE_URL = rawSiteUrl.replace(/\/$/, "");
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5957528671321920";

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
  "Image": "Image tools help people compress, resize, crop, convert, and optimize images for websites, email, and uploads.",
  "PDF": "PDF tools make it easy to merge, split, and convert files directly in the browser.",
  "Finance": "Finance tools help people estimate payments, savings growth, ROI, and debt-related scenarios.",
  "Health": "Health tools give fast estimates for BMI, calories, protein, water intake, and similar everyday health questions.",
  "Date and Time": "Date and time tools help with age checks, date difference, countdowns, work hours, and timestamp conversions.",
  "Writing": "Writing tools help with word counts, case conversion, text cleanup, and common content editing tasks.",
  "Conversion": "Conversion tools cover common everyday conversions like feet to meters and kilograms to pounds.",
  "Business": "Business tools help with pricing, margins, commissions, and break-even estimates.",
  "Utility": "Utility tools cover quick tasks like generators, validators, encoders, decoders, and color converters."
};
