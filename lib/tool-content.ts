export type ToolContent = {
  examples: string[];
  intro: string;
  howItWorks: string[];
  faq: { q: string; a: string }[];
};

export const toolContent: Record<string, ToolContent> = {
  "compress-image": {
    intro:
      "Compress Image helps reduce image file size quickly so images are easier to upload, email, and publish on websites.",
    examples: [
      "Compress a photo before uploading it to a form",
      "Reduce screenshot file size for faster sharing",
      "Shrink product images for a faster website",
    ],
    howItWorks: [
      "Upload your image",
      "Choose the compression level",
      "Preview the result",
      "Download the smaller file",
    ],
    faq: [
      {
        q: "Does image compression reduce quality?",
        a: "Sometimes. Lower file size usually means some quality loss depending on the format and compression level.",
      },
      {
        q: "Can I use compressed images on my website?",
        a: "Yes. Smaller images usually help pages load faster.",
      },
      {
        q: "Does this work in the browser?",
        a: "Yes. This tool is designed to run directly in the browser.",
      },
    ],
  },

  "merge-pdf": {
    intro:
      "Merge PDF lets you combine multiple PDF files into one document without complicated software.",
    examples: [
      "Combine invoices into one PDF",
      "Merge scanned pages into a single document",
      "Join multiple reports before sending them",
    ],
    howItWorks: [
      "Upload your PDF files",
      "Arrange them in the order you want",
      "Merge the files",
      "Download the new PDF",
    ],
    faq: [
      {
        q: "Can I merge more than two PDFs?",
        a: "Yes, you can combine multiple PDF files into one document.",
      },
      {
        q: "Will the page order stay the same?",
        a: "Yes, unless you rearrange the files before merging.",
      },
      {
        q: "Do I need to install anything?",
        a: "No, the tool is meant to work online.",
      },
    ],
  },

  "jpg-to-png": {
    intro:
      "JPG to PNG converts image files into PNG format for editing, transparency support, or different upload requirements.",
    examples: [
      "Convert a JPG logo into PNG",
      "Prepare a PNG for design software",
      "Change file format for a website requirement",
    ],
    howItWorks: [
      "Upload a JPG image",
      "Run the conversion",
      "Preview the output",
      "Download the PNG file",
    ],
    faq: [
      {
        q: "Why convert JPG to PNG?",
        a: "PNG can be better for graphics, editing, or when a different format is required.",
      },
      {
        q: "Will PNG always be smaller?",
        a: "No. PNG files are often larger than JPG files.",
      },
      {
        q: "Can I convert photos too?",
        a: "Yes, but file size may increase.",
      },
    ],
  },

  "loan-calculator": {
    intro:
      "Loan Calculator helps estimate monthly loan payments based on amount, interest rate, and term.",
    examples: [
      "Estimate a personal loan payment",
      "Compare two loan offers",
      "Check how term length affects monthly cost",
    ],
    howItWorks: [
      "Enter loan amount",
      "Enter interest rate",
      "Enter loan term",
      "Review the estimated payment",
    ],
    faq: [
      {
        q: "Is this an exact lender quote?",
        a: "No. It is an estimate and real lender terms may differ.",
      },
      {
        q: "Can I compare different loan amounts?",
        a: "Yes. Change the values to compare payment scenarios.",
      },
      {
        q: "Does interest rate matter a lot?",
        a: "Yes. Even a small rate difference can change the monthly payment.",
      },
    ],
  },

  "mortgage-calculator": {
    intro:
      "Mortgage Calculator gives a quick estimate of monthly home loan payments so users can compare affordability.",
    examples: [
      "Estimate payment before house shopping",
      "Compare down payment options",
      "Check how rate changes affect affordability",
    ],
    howItWorks: [
      "Enter the loan amount",
      "Add interest rate",
      "Choose the term length",
      "Review the estimated monthly payment",
    ],
    faq: [
      {
        q: "Does this include taxes and insurance?",
        a: "Usually not unless you specifically add them in your version.",
      },
      {
        q: "Can I compare 15-year and 30-year terms?",
        a: "Yes. Change the term and compare the result.",
      },
      {
        q: "Is this enough for preapproval?",
        a: "No. It is for planning, not lender approval.",
      },
    ],
  },

  "bmi-calculator": {
    intro:
      "BMI Calculator estimates body mass index using height and weight to provide a quick body measurement reference.",
    examples: [
      "Check BMI after entering a new weight goal",
      "Estimate BMI during a fitness plan",
      "Compare BMI using updated measurements",
    ],
    howItWorks: [
      "Enter height",
      "Enter weight",
      "Run the calculation",
      "Review the BMI estimate",
    ],
    faq: [
      {
        q: "Is BMI a diagnosis?",
        a: "No. It is a rough screening measure, not a medical diagnosis.",
      },
      {
        q: "Can athletes have misleading BMI results?",
        a: "Yes. High muscle mass can affect BMI interpretation.",
      },
      {
        q: "Is BMI useful for general estimates?",
        a: "Yes, as a simple reference point.",
      },
    ],
  },

  "word-counter": {
    intro:
      "Word Counter helps count words and characters instantly for essays, blog posts, and other writing.",
    examples: [
      "Check article word count before publishing",
      "Count words for school assignments",
      "Measure product description length",
    ],
    howItWorks: [
      "Paste your text",
      "The tool counts words and characters",
      "Review the totals instantly",
    ],
    faq: [
      {
        q: "Does it count characters too?",
        a: "Yes, most versions count both words and characters.",
      },
      {
        q: "Can I use it for long articles?",
        a: "Yes. It works well for short and long text.",
      },
      {
        q: "Does it update live?",
        a: "Usually yes, depending on your implementation.",
      },
    ],
  },

  "unit-converter": {
    intro:
      "Unit Converter helps switch between common measurements like feet and meters, pounds and kilograms, and more.",
    examples: [
      "Convert feet to meters",
      "Convert pounds to kilograms",
      "Switch between temperature units",
    ],
    howItWorks: [
      "Choose the measurement type",
      "Select the starting unit",
      "Select the target unit",
      "Enter the value to convert",
    ],
    faq: [
      {
        q: "What types of units can I convert?",
        a: "Common options include length, weight, and temperature.",
      },
      {
        q: "Is the conversion instant?",
        a: "Yes, the result should update immediately.",
      },
      {
        q: "Can I use decimals?",
        a: "Yes.",
      },
    ],
  },

  "tip-calculator": {
    intro:
      "Tip Calculator helps estimate gratuity and total bill amount quickly at restaurants and service businesses.",
    examples: [
      "Calculate a 15 percent tip",
      "Compare 18 percent and 20 percent tipping",
      "Estimate final total after tip",
    ],
    howItWorks: [
      "Enter bill amount",
      "Choose tip percentage",
      "Review tip amount and final total",
    ],
    faq: [
      {
        q: "Can I calculate custom tip percentages?",
        a: "Yes, most versions allow custom percentages.",
      },
      {
        q: "Does it include tax automatically?",
        a: "Only if your version is built that way.",
      },
      {
        q: "Can I split the bill?",
        a: "That can be added as a future enhancement if not included now.",
      },
    ],
  },

  "password-generator": {
    intro:
      "Password Generator creates stronger passwords quickly for personal accounts, work logins, and general security.",
    examples: [
      "Generate a strong password for email",
      "Create a new password for a banking login",
      "Build a password for a new online account",
    ],
    howItWorks: [
      "Choose password length",
      "Generate a random password",
      "Copy and save it securely",
    ],
    faq: [
      {
        q: "Are longer passwords better?",
        a: "Generally yes, longer passwords are usually stronger.",
      },
      {
        q: "Should I reuse passwords?",
        a: "No. Unique passwords are safer.",
      },
      {
        q: "Can I generate multiple passwords?",
        a: "Yes, by regenerating the result.",
       },
    ],
  },
    
  "json-formatter": {
    intro:
      "JSON Formatter helps clean up raw JSON so it is easier to read, debug, and copy into apps, APIs, and config files.",
    examples: [
      "Format API response data",
      "Beautify JSON before debugging",
      "Clean up JSON for documentation or sharing",
    ],
    howItWorks: [
      "Paste raw JSON into the input box",
      "Run the formatter",
      "Review the structured output",
      "Copy the cleaned JSON",
    ],
    faq: [
      {
        q: "What is JSON formatting?",
        a: "JSON formatting turns compact or messy JSON into a cleaner structure with indentation and line breaks.",
      },
      {
        q: "Will this fix invalid JSON?",
        a: "No. It can format valid JSON, but invalid JSON must be corrected first.",
      },
      {
        q: "Who uses a JSON formatter?",
        a: "Developers, testers, and anyone working with APIs or structured data.",
      },
    ],
  },

  "base64-encoder": {
    intro:
      "Base64 Encoder converts plain text into Base64 format for data transfer, embedding, and testing tasks.",
    examples: [
      "Encode text for API testing",
      "Convert a value before storing or sharing it",
      "Prepare content for systems that expect Base64 input",
    ],
    howItWorks: [
      "Enter the text you want to encode",
      "Run the encoder",
      "Copy the Base64 result",
    ],
    faq: [
      {
        q: "Is Base64 encryption?",
        a: "No. Base64 is an encoding format, not a secure encryption method.",
      },
      {
        q: "Why use Base64 encoding?",
        a: "It is commonly used when systems need text-safe transmission of data.",
      },
      {
        q: "Can I decode the result later?",
        a: "Yes. Base64 output can be converted back using a decoder.",
      },
    ],
  },

  "base64-decoder": {
    intro:
      "Base64 Decoder converts Base64 text back into readable plain text for testing, debugging, and data inspection.",
    examples: [
      "Decode an API value",
      "Inspect encoded text from a system",
      "Convert Base64 back into readable content",
    ],
    howItWorks: [
      "Paste the Base64 input",
      "Run the decoder",
      "Review the decoded text",
    ],
    faq: [
      {
        q: "What happens if the input is invalid?",
        a: "If the Base64 text is malformed, the decoder may return an error or unreadable result.",
      },
      {
        q: "Can this decode any Base64 string?",
        a: "It can decode standard valid Base64 text.",
      },
      {
        q: "Is decoding Base64 the same as decrypting data?",
        a: "No. Base64 decoding only reverses encoding, not encryption.",
      },
    ],
  },

  "url-encoder": {
    intro:
      "URL Encoder converts text into a URL-safe format so special characters can be passed correctly in links and query strings.",
    examples: [
      "Encode search parameters in a URL",
      "Prepare text for a query string",
      "Convert spaces and symbols for safe URL use",
    ],
    howItWorks: [
      "Enter the text you want to encode",
      "Run the URL encoder",
      "Copy the encoded result",
    ],
    faq: [
      {
        q: "Why do I need URL encoding?",
        a: "Some characters like spaces, ampersands, and symbols can break URLs if they are not encoded properly.",
      },
      {
        q: "Does this help with query strings?",
        a: "Yes. URL encoding is commonly used for query parameters.",
      },
      {
        q: "Can I reverse it later?",
        a: "Yes. Encoded text can be converted back with a URL decoder.",
      },
    ],
  },

  "url-decoder": {
    intro:
      "URL Decoder converts encoded URL text back into readable characters so links, query strings, and parameters are easier to inspect.",
    examples: [
      "Read encoded search parameters",
      "Inspect a query string",
      "Turn percent-encoded text back into normal text",
    ],
    howItWorks: [
      "Paste the encoded text",
      "Run the decoder",
      "Review the readable output",
    ],
    faq: [
      {
        q: "What does URL decoding do?",
        a: "It converts encoded symbols like %20 back into their original characters.",
      },
      {
        q: "Can I use this for full URLs?",
        a: "Yes, especially when you need to inspect encoded portions of a URL.",
      },
      {
        q: "Will it help with debugging links?",
        a: "Yes. It makes encoded parameters easier to read.",
      },
    ],
  },

  "uuid-generator": {
    intro:
      "UUID Generator creates unique identifiers in the browser for development, testing, data records, and general utility use.",
    examples: [
      "Create IDs for test data",
      "Generate unique record identifiers",
      "Use UUIDs in development workflows",
    ],
    howItWorks: [
      "Open the generator",
      "Create a new UUID",
      "Copy the generated value",
    ],
    faq: [
      {
        q: "What is a UUID?",
        a: "A UUID is a universally unique identifier often used for records, sessions, and objects.",
      },
      {
        q: "Why use a UUID instead of a simple number?",
        a: "UUIDs reduce the chance of collisions when unique values are needed across systems.",
      },
      {
        q: "Can I generate more than one?",
        a: "Yes. You can generate a new UUID any time.",
      },
    ],
  },

  "slug-generator": {
    intro:
      "Slug Generator turns normal text into a cleaner URL-friendly slug for pages, blog posts, product links, and SEO work.",
    examples: [
      "Create a slug for a blog article",
      "Build a cleaner product page URL",
      "Turn a page title into an SEO-friendly path",
    ],
    howItWorks: [
      "Enter your text or title",
      "Run the slug generator",
      "Copy the clean slug",
    ],
    faq: [
      {
        q: "What is a slug?",
        a: "A slug is the readable part of a URL, usually made from lowercase words separated by hyphens.",
      },
      {
        q: "Why are slugs important?",
        a: "They make URLs cleaner, easier to read, and often better for SEO.",
      },
      {
        q: "Should slugs use spaces?",
        a: "No. Slugs usually replace spaces with hyphens.",
      },
    ],
  },

  "remove-line-breaks": {
    intro:
      "Remove Line Breaks cleans multiline text into a single line or tighter block, which is useful for forms, code snippets, and imports.",
    examples: [
      "Clean copied text before pasting into a form",
      "Turn multiline content into one line",
      "Prepare text for systems that reject line breaks",
    ],
    howItWorks: [
      "Paste your text",
      "Run the cleaner",
      "Copy the cleaned output",
    ],
    faq: [
      {
        q: "What does removing line breaks do?",
        a: "It removes new lines and usually joins the text into a single continuous block.",
      },
      {
        q: "Can this help with form inputs?",
        a: "Yes. It is useful when a system expects one-line text only.",
      },
      {
        q: "Will it remove extra spaces too?",
        a: "That depends on the implementation, but many versions also normalize spacing.",
      },
    ],
  },

  "text-sorter": {
    intro:
      "Text Sorter arranges lines of text alphabetically so lists, names, keywords, and notes are easier to organize.",
    examples: [
      "Sort a list of keywords",
      "Organize names alphabetically",
      "Clean up unordered notes or tags",
    ],
    howItWorks: [
      "Paste your lines of text",
      "Run the sorter",
      "Review the sorted output",
    ],
    faq: [
      {
        q: "What does a text sorter do?",
        a: "It reorders lines of text alphabetically or by another sorting rule.",
      },
      {
        q: "Can I sort one item per line?",
        a: "Yes. That is the most common use case.",
      },
      {
        q: "Is this useful for keyword lists?",
        a: "Yes. It helps organize SEO terms, tags, and other lists quickly.",
      },
    ],
  },

  "duplicate-line-remover": {
    intro:
      "Duplicate Line Remover finds repeated lines and keeps only unique entries, which is useful for lists, tags, names, and cleanup tasks.",
    examples: [
      "Remove repeated keywords",
      "Clean up a list of emails or names",
      "Deduplicate copied lines from notes or exports",
    ],
    howItWorks: [
      "Paste the text lines",
      "Run the duplicate remover",
      "Copy the cleaned list",
    ],
    faq: [
      {
        q: "What counts as a duplicate line?",
        a: "A duplicate line is a repeated line with the same text as another line in the list.",
      },
      {
        q: "Will the original order stay the same?",
        a: "That depends on the implementation, but many tools keep the first appearance and remove repeats after it.",
      },
      {
        q: "Is this good for keyword cleanup?",
        a: "Yes. It is useful for cleaning repeated keywords, tags, or entries.",
      },
    ],
  },
}
  