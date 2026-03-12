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
};