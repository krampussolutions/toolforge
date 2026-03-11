export type ProgrammaticPage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  relatedTool: string;
  parentLanding: string;
};

export const programmaticPages: ProgrammaticPage[] = [
  {
    slug: "jpg-to-png-online",
    title: "JPG to PNG Online",
    description: "Convert JPG to PNG online in your browser without installing extra software.",
    category: "Image",
    relatedTool: "jpg-to-png",
    parentLanding: "/image-tools",
  },
  {
    slug: "png-to-jpg-online",
    title: "PNG to JPG Online",
    description: "Convert PNG to JPG online for uploads, email, and websites.",
    category: "Image",
    relatedTool: "png-to-jpg",
    parentLanding: "/image-tools",
  },
  {
    slug: "compress-image-for-email",
    title: "Compress Image for Email",
    description: "Reduce image size before sending files by email.",
    category: "Image",
    relatedTool: "compress-image",
    parentLanding: "/image-tools",
  },
  {
    slug: "compress-image-for-website",
    title: "Compress Image for Website",
    description: "Shrink image size for faster pages and cleaner uploads.",
    category: "Image",
    relatedTool: "compress-image",
    parentLanding: "/image-tools",
  },
  {
    slug: "merge-pdf-online",
    title: "Merge PDF Online",
    description: "Combine PDF files online in a simple browser-based workflow.",
    category: "PDF",
    relatedTool: "merge-pdf",
    parentLanding: "/pdf-tools",
  },
  {
    slug: "split-pdf-online",
    title: "Split PDF Online",
    description: "Extract selected pages from a PDF online.",
    category: "PDF",
    relatedTool: "split-pdf",
    parentLanding: "/pdf-tools",
  },
  {
    slug: "loan-calculator-monthly-payment",
    title: "Loan Calculator Monthly Payment",
    description: "Estimate monthly loan payments using a simple online calculator.",
    category: "Finance",
    relatedTool: "loan-calculator",
    parentLanding: "/online-calculators",
  },
  {
    slug: "mortgage-calculator-payment",
    title: "Mortgage Calculator Payment",
    description: "Estimate mortgage payment amounts before you apply.",
    category: "Finance",
    relatedTool: "mortgage-calculator",
    parentLanding: "/online-calculators",
  },
  {
    slug: "bmi-calculator-for-men",
    title: "BMI Calculator for Men",
    description: "Estimate BMI quickly with a simple BMI calculator for men.",
    category: "Health",
    relatedTool: "bmi-calculator",
    parentLanding: "/online-calculators",
  },
  {
    slug: "bmi-calculator-for-women",
    title: "BMI Calculator for Women",
    description: "Estimate BMI quickly with a simple BMI calculator for women.",
    category: "Health",
    relatedTool: "bmi-calculator",
    parentLanding: "/online-calculators",
  },
  {
    slug: "tip-calculator-by-bill-amount",
    title: "Tip Calculator by Bill Amount",
    description: "Calculate tip and total by bill amount in a few seconds.",
    category: "Utility",
    relatedTool: "tip-calculator",
    parentLanding: "/free-tools",
  },
  {
    slug: "percentage-calculator-online",
    title: "Percentage Calculator Online",
    description: "Solve percentage questions online without doing the math by hand.",
    category: "Utility",
    relatedTool: "percentage-calculator",
    parentLanding: "/free-tools",
  },
];
