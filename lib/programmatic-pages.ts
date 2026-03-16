export type ProgrammaticPage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  relatedTool: string;
  parentLanding: string;
  indexable?: boolean;
};

const rawProgrammaticPages: ProgrammaticPage[] = [
  {
    slug: "jpg-to-png-online",
    title: "JPG to PNG Online",
    description:
      "Convert JPG to PNG online for screenshots, graphics, design handoffs, and file-format compatibility without installing extra software.",
    category: "Image",
    relatedTool: "jpg-to-png",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "png-to-jpg-online",
    title: "PNG to JPG Online",
    description:
      "Convert PNG to JPG online for smaller file sizes, email attachments, website uploads, and general image sharing.",
    category: "Image",
    relatedTool: "png-to-jpg",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "compress-image-for-email",
    title: "Compress Image for Email",
    description:
      "Reduce image file size before sending photos or attachments by email so files are easier to upload, send, and open.",
    category: "Image",
    relatedTool: "compress-image",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "compress-image-for-website",
    title: "Compress Image for Website",
    description:
      "Compress images for websites to reduce file size, improve page speed, and make uploads faster without heavy software.",
    category: "Image",
    relatedTool: "compress-image",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "merge-pdf-online",
    title: "Merge PDF Online",
    description:
      "Merge PDF files online to combine contracts, forms, statements, reports, and other documents into one file.",
    category: "PDF",
    relatedTool: "merge-pdf",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "split-pdf-online",
    title: "Split PDF Online",
    description:
      "Split PDF files online to extract selected pages, separate sections, or create a smaller document for sharing.",
    category: "PDF",
    relatedTool: "split-pdf",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "loan-calculator-monthly-payment",
    title: "Loan Calculator Monthly Payment",
    description:
      "Estimate monthly loan payments online by comparing loan amount, interest rate, and term before you borrow.",
    category: "Finance",
    relatedTool: "loan-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "mortgage-calculator-payment",
    title: "Mortgage Calculator Payment",
    description:
      "Estimate mortgage payments using home price, down payment, loan term, and interest rate before applying or shopping.",
    category: "Finance",
    relatedTool: "mortgage-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "bmi-calculator-for-men",
    title: "BMI Calculator for Men",
    description:
      "Estimate BMI for men using height and weight to get a quick body mass index result for general reference.",
    category: "Health",
    relatedTool: "bmi-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "bmi-calculator-for-women",
    title: "BMI Calculator for Women",
    description:
      "Estimate BMI for women using height and weight to get a quick body mass index result for general reference.",
    category: "Health",
    relatedTool: "bmi-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "tip-calculator-by-bill-amount",
    title: "Tip Calculator by Bill Amount",
    description:
      "Calculate tip amount, final total, and per-person share from a restaurant bill or service total in seconds.",
    category: "Utility",
    relatedTool: "tip-calculator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "percentage-calculator-online",
    title: "Percentage Calculator Online",
    description:
      "Solve percentage increase, decrease, difference, and basic percentage questions online without manual math.",
    category: "Utility",
    relatedTool: "percentage-calculator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "json-formatter-online",
    title: "JSON Formatter Online",
    description:
      "Format and beautify JSON online to make API responses, config data, and structured text easier to read and debug.",
    category: "Utility",
    relatedTool: "json-formatter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "base64-encoder-online",
    title: "Base64 Encoder Online",
    description:
      "Encode text to Base64 online for development, debugging, integrations, and quick browser-based conversions.",
    category: "Utility",
    relatedTool: "base64-encoder",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "base64-decoder-online",
    title: "Base64 Decoder Online",
    description:
      "Decode Base64 text online to reveal the original string for testing, debugging, and quick browser-based checks.",
    category: "Utility",
    relatedTool: "base64-decoder",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "url-encoder-online",
    title: "URL Encoder Online",
    description:
      "Encode text for safe URL use online by converting spaces and special characters into URL-friendly values.",
    category: "Utility",
    relatedTool: "url-encoder",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "url-decoder-online",
    title: "URL Decoder Online",
    description:
      "Decode URL-encoded text online so links, query strings, and encoded characters are easier to read and reuse.",
    category: "Utility",
    relatedTool: "url-decoder",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "uuid-generator-online",
    title: "UUID Generator Online",
    description:
      "Generate UUIDs online for software projects, testing, databases, and browser-based development workflows.",
    category: "Utility",
    relatedTool: "uuid-generator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "slug-generator-online",
    title: "Slug Generator Online",
    description:
      "Generate clean URL slugs from text online for blog posts, page titles, product URLs, and SEO-friendly links.",
    category: "Writing",
    relatedTool: "slug-generator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "remove-line-breaks-online",
    title: "Remove Line Breaks Online",
    description:
      "Remove line breaks online to clean up text copied from PDFs, emails, websites, and scanned documents.",
    category: "Writing",
    relatedTool: "remove-line-breaks",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "text-sorter-online",
    title: "Text Sorter Online",
    description:
      "Sort lines of text alphabetically online for lists, names, keywords, and simple text cleanup tasks.",
    category: "Writing",
    relatedTool: "text-sorter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "duplicate-line-remover-online",
    title: "Duplicate Line Remover Online",
    description:
      "Remove duplicate lines from text online to clean lists, repeated entries, copied notes, and bulk text output.",
    category: "Writing",
    relatedTool: "duplicate-line-remover",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "png-compressor-online",
    title: "PNG Compressor Online",
    description:
      "Compress PNG images online to reduce file size for websites, email, uploads, and faster page loading.",
    category: "Image",
    relatedTool: "png-compressor",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "webp-to-png-online",
    title: "WEBP to PNG Online",
    description:
      "Convert WEBP to PNG online for editing, uploads, screenshots, and workflows that need PNG compatibility.",
    category: "Image",
    relatedTool: "webp-to-png",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "text-reverser-online",
    title: "Text Reverser Online",
    description:
      "Reverse text online instantly for simple formatting, novelty text, testing, and quick browser-based text changes.",
    category: "Writing",
    relatedTool: "text-reverser",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "remove-extra-spaces-online",
    title: "Remove Extra Spaces Online",
    description:
      "Remove extra spaces from text online to clean pasted content, documents, forms, and messy text blocks.",
    category: "Writing",
    relatedTool: "remove-extra-spaces",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "line-counter-online",
    title: "Line Counter Online",
    description:
      "Count lines in text online for code, logs, lists, notes, and quick text-length checks in the browser.",
    category: "Writing",
    relatedTool: "line-counter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "word-frequency-counter-online",
    title: "Word Frequency Counter Online",
    description:
      "Count the most common words in text online for keyword analysis, writing review, and repeated-term checks.",
    category: "Writing",
    relatedTool: "word-frequency-counter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "text-repeater-online",
    title: "Text Repeater Online",
    description:
      "Repeat text online quickly for formatting, test data, placeholder content, and simple bulk text generation.",
    category: "Writing",
    relatedTool: "text-repeater",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "text-to-binary-online",
    title: "Text to Binary Online",
    description:
      "Convert text to binary online for quick encoding checks, classroom examples, and browser-based conversions.",
    category: "Utility",
    relatedTool: "text-to-binary",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "binary-to-text-online",
    title: "Binary to Text Online",
    description:
      "Convert binary to text online to decode binary strings into readable output for quick checks and learning.",
    category: "Utility",
    relatedTool: "binary-to-text",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "rgb-to-hex-online",
    title: "RGB to HEX Online",
    description:
      "Convert RGB color values to HEX online for web design, CSS, branding, and color-matching workflows.",
    category: "Utility",
    relatedTool: "rgb-to-hex",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "hex-to-rgb-online",
    title: "HEX to RGB Online",
    description:
      "Convert HEX color codes to RGB online for design systems, CSS work, and digital color reference tasks.",
    category: "Utility",
    relatedTool: "hex-to-rgb",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "unix-timestamp-converter-online",
    title: "Unix Timestamp Converter Online",
    description:
      "Convert Unix timestamps online into readable dates and times for development, logs, and quick debugging.",
    category: "Date and Time",
    relatedTool: "unix-timestamp-converter",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "random-letter-generator-online",
    title: "Random Letter Generator Online",
    description:
      "Generate random letters online for games, classroom activities, testing, and simple browser-based selection.",
    category: "Utility",
    relatedTool: "random-letter-generator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "password-strength-checker-online",
    title: "Password Strength Checker Online",
    description:
      "Check password strength online to see whether a password looks weak, moderate, or strong before using it.",
    category: "Utility",
    relatedTool: "password-strength-checker",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "uuid-bulk-generator-online",
    title: "UUID Bulk Generator Online",
    description:
      "Generate many UUIDs online at once for development, testing, datasets, and bulk browser-based workflows.",
    category: "Utility",
    relatedTool: "uuid-bulk-generator",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "meta-description-counter-online",
    title: "Meta Description Counter Online",
    description:
      "Count meta description characters online so you can review SEO snippet length before publishing a page.",
    category: "Writing",
    relatedTool: "meta-description-counter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "html-escape-online",
    title: "HTML Escape Online",
    description:
      "Escape HTML entities online to safely convert special characters for code snippets, markup, and web content.",
    category: "Utility",
    relatedTool: "html-escape",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "html-unescape-online",
    title: "HTML Unescape Online",
    description:
      "Unescape HTML entities online to convert encoded markup back into readable text for testing and cleanup.",
    category: "Utility",
    relatedTool: "html-unescape",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "list-randomizer-online",
    title: "List Randomizer Online",
    description:
      "Shuffle lists into random order online for drawings, games, group selection, and simple list mixing.",
    category: "Utility",
    relatedTool: "list-randomizer",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "roman-numeral-converter-online",
    title: "Roman Numeral Converter Online",
    description:
      "Convert numbers and Roman numerals online for schoolwork, outlines, clocks, and quick reference tasks.",
    category: "Utility",
    relatedTool: "roman-numeral-converter",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "how-to-use-a-sales-tax-calculator",
    title: "How to Use a Sales Tax Calculator",
    description:
      "Learn how to calculate sales tax, subtotal, and final total for quotes, invoices, purchases, and estimates.",
    category: "Business",
    relatedTool: "sales-tax-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "credit-card-payoff-how-long-will-it-take",
    title: "Credit Card Payoff: How Long Will It Take?",
    description:
      "Estimate how many months it may take to pay off a credit card balance with fixed monthly payments and ongoing interest.",
    category: "Finance",
    relatedTool: "credit-card-payoff-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "business-days-between-dates",
    title: "Business Days Between Dates",
    description:
      "Count weekdays between two dates for deadlines, shipping windows, scheduling, and project planning.",
    category: "Date and Time",
    relatedTool: "business-days-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "weeks-between-two-dates",
    title: "Weeks Between Two Dates",
    description:
      "See how many full weeks and extra days fall between two dates for schedules, projects, and planning.",
    category: "Date and Time",
    relatedTool: "weeks-between-dates",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "reading-level-checker-for-blog-posts",
    title: "Reading Level Checker for Blog Posts",
    description:
      "Review readability before publishing blog posts, landing pages, product copy, newsletters, and emails.",
    category: "Writing",
    relatedTool: "reading-level-checker",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "headline-title-case-checker",
    title: "Headline Title Case Checker",
    description:
      "Convert headlines to title case and review headline length before publishing articles, pages, or emails.",
    category: "Writing",
    relatedTool: "title-case-headline-analyzer",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "webp-to-jpg-online",
    title: "WEBP to JPG Online",
    description:
      "Convert WEBP images to JPG online for easier sharing, uploads, printing, and editing in common apps.",
    category: "Image",
    relatedTool: "webp-to-jpg",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "how-to-check-reading-level",
    title: "How to Check Reading Level",
    description:
      "See how readability tools estimate grade level and how to simplify text for everyday readers and web visitors.",
    category: "Writing",
    relatedTool: "reading-level-checker",
    parentLanding: "/free-tools",
    indexable: true,
  },
  {
    slug: "sales-tax-before-and-after-price",
    title: "Sales Tax Before and After Price",
    description:
      "Work out the sales tax amount and final total from a pre-tax price for shopping, quotes, and invoices.",
    category: "Business",
    relatedTool: "sales-tax-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "credit-card-interest-vs-payment",
    title: "Credit Card Interest vs Payment",
    description:
      "Compare monthly payment size to payoff time and total interest cost on a revolving credit card balance.",
    category: "Finance",
    relatedTool: "credit-card-payoff-calculator",
    parentLanding: "/online-calculators",
    indexable: true,
  },
  {
    slug: "rotate-pdf-online",
    title: "Rotate PDF Online",
    description:
      "Rotate PDF pages online to fix sideways scans, upside-down pages, and document orientation issues.",
    category: "PDF",
    relatedTool: "rotate-pdf",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "delete-pdf-pages-online",
    title: "Delete PDF Pages Online",
    description:
      "Delete selected PDF pages online to remove blanks, extras, cover pages, or unwanted sections from a document.",
    category: "PDF",
    relatedTool: "delete-pdf-pages",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "reorder-pdf-pages-online",
    title: "Reorder PDF Pages Online",
    description:
      "Reorder PDF pages online to fix document sequence before sharing, printing, or uploading the file.",
    category: "PDF",
    relatedTool: "reorder-pdf-pages",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "pdf-page-counter-online",
    title: "PDF Page Counter Online",
    description:
      "Count PDF pages online before uploading, sharing, splitting, rotating, or organizing a file.",
    category: "PDF",
    relatedTool: "pdf-page-counter",
    parentLanding: "/pdf-tools",
    indexable: true,
  },
  {
    slug: "resize-image-to-kb",
    title: "Resize Image to KB",
    description:
      "Reduce an image toward a target KB size for forms, school portals, job applications, and upload limits.",
    category: "Image",
    relatedTool: "image-resizer-by-kb",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "jpg-to-webp-online",
    title: "JPG to WEBP Online",
    description:
      "Convert JPG to WEBP online for smaller web-ready image files and faster page loading on modern websites.",
    category: "Image",
    relatedTool: "jpg-to-webp",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "png-to-webp-online",
    title: "PNG to WEBP Online",
    description:
      "Convert PNG to WEBP online for lighter website images, faster delivery, and modern browser compatibility.",
    category: "Image",
    relatedTool: "png-to-webp",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "jpeg-to-jpg-online",
    title: "JPEG to JPG Online",
    description:
      "Convert JPEG to JPG online for easier uploads, file naming consistency, and broader compatibility.",
    category: "Image",
    relatedTool: "jpeg-to-jpg",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "gif-to-jpg-online",
    title: "GIF to JPG Online",
    description:
      "Convert a GIF image to JPG online when you need a still image for uploads, sharing, or standard image use.",
    category: "Image",
    relatedTool: "gif-to-jpg",
    parentLanding: "/image-tools",
    indexable: true,
  },
  {
    slug: "svg-to-png-online",
    title: "SVG to PNG Online",
    description:
      "Convert SVG files to PNG online for uploads, websites, email signatures, and design handoffs.",
    category: "Image",
    relatedTool: "svg-to-png",
    parentLanding: "/image-tools",
    indexable: true,
  },
];

export const programmaticPages: ProgrammaticPage[] = rawProgrammaticPages.filter(
  (item): item is ProgrammaticPage => Boolean(item && item.slug)
);