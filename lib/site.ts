export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.utilhubx.com";
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5957528671321920";
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
    "shortTitle": "Date & Time",
    "category": "Date & Time",
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
    "description": "Password generators, random pickers, calculators, and quick tools people use every day."
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
    "category": "Date & Time",
    "description": "Calculate your exact age online.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "days-between-dates",
    "title": "Days Between Dates Calculator",
    "category": "Date & Time",
    "description": "Find the number of days between two dates.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "countdown-calculator",
    "title": "Countdown Calculator",
    "category": "Date & Time",
    "description": "Count down to a future date.",
    "parent": "date-time-tools",
    "kind": "suite"
  },
  {
    "slug": "hours-worked-calculator",
    "title": "Hours Worked Calculator",
    "category": "Date & Time",
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
  slug: "json-formatter",
  title: "JSON Formatter",
  category: "Utility",
  description: "Format and beautify JSON online.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "base64-encoder",
  title: "Base64 Encoder",
  category: "Utility",
  description: "Encode text to Base64 instantly.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "base64-decoder",
  title: "Base64 Decoder",
  category: "Utility",
  description: "Decode Base64 text instantly.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "url-encoder",
  title: "URL Encoder",
  category: "Utility",
  description: "Encode text for safe use in URLs.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "url-decoder",
  title: "URL Decoder",
  category: "Utility",
  description: "Decode URL-encoded text instantly.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "uuid-generator",
  title: "UUID Generator",
  category: "Utility",
  description: "Generate UUIDs in your browser.",
  parent: "everyday-tools",
  kind: "special",
},
{
  slug: "slug-generator",
  title: "Slug Generator",
  category: "Writing",
  description: "Turn text into a clean URL slug.",
  parent: "text-tools",
  kind: "special",
},
{
  slug: "remove-line-breaks",
  title: "Remove Line Breaks",
  category: "Writing",
  description: "Remove line breaks from text quickly.",
  parent: "text-tools",
  kind: "special",
},
{
  slug: "text-sorter",
  title: "Text Sorter",
  category: "Writing",
  description: "Sort lines of text alphabetically.",
  parent: "text-tools",
  kind: "special",
},
{
  slug: "duplicate-line-remover",
  title: "Duplicate Line Remover",
  category: "Writing",
  description: "Remove duplicate lines from text.",
  parent: "text-tools",
  kind: "special",
},
] as const;
export const categories = [
  "Business",
  "Conversion",
  "Date & Time",
  "Finance",
  "Health",
  "Image",
  "PDF",
  "Utility",
  "Writing"
] as const;
export const categoryDescriptions: Record<string, string> = {
  "Image": "Image tools help people compress, resize, crop, and convert images for websites, email, and uploads.",
  "PDF": "PDF tools make it easy to merge, split, and create PDF files directly in the browser.",
  "Finance": "Finance tools help people estimate payments, savings growth, and ROI.",
  "Health": "Health tools give fast estimates for BMI, calories, protein, and water intake.",
  "Date & Time": "Date and time tools help with age checks, date difference, countdowns, and work hours.",
  "Writing": "Writing tools help with word counts, case conversion, reading time, and placeholder content.",
  "Conversion": "Conversion tools cover common everyday conversions like feet to meters and kg to lbs.",
  "Business": "Business tools help with pricing, margins, commissions, and break-even estimates.",
  "Utility": "Utility tools cover quick tasks like percentages, tips, and password generation."
};
