import { toolPages } from "@/lib/site";

export type ToolContent = {
  examples: string[];
  intro: string;
  howItWorks: string[];
  faq: { q: string; a: string }[];
};

const overrides: Record<string, ToolContent> = {

  "compress-image": {
    intro:
      "Compress Image Online reduces image file size in your browser so photos, screenshots, and graphics are easier to upload, email, and publish. It is useful for job applications, website images, contact forms with file limits, and everyday sharing when the original file is too large.",
    examples: [
      "Shrink a phone photo before attaching it to an email",
      "Reduce image size for website uploads and faster page speed",
      "Get under a form or portal file-size limit without using editing software",
    ],
    howItWorks: [
      "Upload the image you want to compress",
      "Choose or test a compression level if the tool gives you options",
      "Review the new file size and visual quality",
      "Download the smaller image once the balance between size and quality looks right",
    ],
    faq: [
      {
        q: "What is the best time to compress an image?",
        a: "Compress an image before email, web upload, form submission, or any workflow where file-size limits and load speed matter.",
      },
      {
        q: "Does image compression reduce quality?",
        a: "Some compression settings can reduce visible quality, so it is best to check the result and use the lightest compression that gets the file under your target size.",
      },
      {
        q: "Should I resize before compressing?",
        a: "If the image dimensions are much larger than needed, resizing first often gives you better results than compression alone.",
      },
    ],
  },

  "age-calculator": {
    intro:
      "Age Calculator shows exact age in years, months, and days from a birth date or start date. It is useful for forms, age checks, birthdays, school paperwork, insurance questions, and any situation where you need a precise age instead of a rough estimate.",
    examples: [
      "Check someone's current age today for a form or enrollment step",
      "Work out how old a person will be on a future date",
      "See the full gap in years, months, and days between a birth date and today",
    ],
    howItWorks: [
      "Enter the birth date or start date",
      "Choose the comparison date if the tool offers one, or use today",
      "Review the result in years, months, and days",
      "Use related date tools if you need a simple day count or business-day count instead",
    ],
    faq: [
      {
        q: "Does the age calculator account for leap years?",
        a: "Yes. The age result is based on real calendar math, including leap years and different month lengths.",
      },
      {
        q: "Can I calculate age on a future date?",
        a: "Yes. Many people use an age calculator to see how old someone will be on a future deadline, event date, or eligibility date.",
      },
      {
        q: "What is the difference between age calculator and days between dates?",
        a: "Age Calculator is best for a human age result in years, months, and days. Days Between Dates is better when you only need a raw date gap.",
      },
    ],
  },

  "days-between-dates": {
    intro:
      "Days Between Dates Calculator counts the calendar-day gap between two dates so you can plan trips, projects, subscriptions, contracts, deadlines, and personal milestones without counting by hand. It is best when you need a straight date difference and want a fast answer.",
    examples: [
      "Count the number of days between a start date and a project deadline",
      "Measure the gap between travel dates, subscription renewals, or billing periods",
      "Compare an exclusive day count to an inclusive count when the start day should also be included",
    ],
    howItWorks: [
      "Choose a start date and end date",
      "Review the raw day difference between the two dates",
      "Use inclusive counting only when your workflow needs the start and end days both counted",
      "Switch to Business Days Calculator if you need weekdays only or Weeks Between Dates if you want the result grouped into weeks",
    ],
    faq: [
      {
        q: "Does this count weekends?",
        a: "Yes. This tool counts calendar days, so weekends are included unless you switch to a business-days workflow.",
      },
      {
        q: "What is inclusive counting?",
        a: "Inclusive counting adds the start day to the total. For example, January 1 through January 31 is 30 days between dates, but 31 days inclusive.",
      },
      {
        q: "Should I use this or a business days calculator?",
        a: "Use Days Between Dates for a full calendar count. Use Business Days Calculator when you want to skip weekends for work schedules and deadlines.",
      },
    ],
  },

  "word-counter": {
    intro:
      "Word Counter helps you count words, characters, sentences, and paragraphs instantly in your browser. It is useful for essays, blog posts, school assignments, email drafts, product descriptions, and any writing where you need a fast and accurate word count before submitting or publishing.",
    examples: [
      "Check whether an essay, article, or assignment meets a target word count",
      "Count characters, sentences, and paragraphs while editing a draft",
      "Compare different versions of a blog post, email, or speech to see which one is shorter or easier to scan",
    ],
    howItWorks: [
      "Paste or type your text into the input area",
      "Review the word count, character count, sentence count, and paragraph count instantly",
      "Edit the text and watch the totals update as you write",
      "Use related text tools if you need cleanup, case conversion, or formatting help",
    ],
    faq: [
      {
        q: "Can I use this word counter for essays and blog posts?",
        a: "Yes. This word counter is useful for essays, blog posts, ad copy, product descriptions, email drafts, speeches, and general writing.",
      },
      {
        q: "Does the word counter also show character count?",
        a: "Yes. Many people use a word counter to check character count, sentence count, and paragraph count at the same time so they can judge total text length more clearly.",
      },
      {
        q: "How many words is a five-minute speech?",
        a: "A rough speaking pace is often around 600 to 750 words for five minutes, depending on the speaker, pace, and pauses.",
      },
    ],
  },

  "case-converter": {
    intro:
      "Case Converter changes text into uppercase, lowercase, title case, sentence case, and other common capitalization styles. It is useful for cleaning up copied text, formatting headlines, editing documents, and preparing content for emails, articles, forms, and social posts.",
    examples: [
      "Convert text to uppercase or lowercase instantly",
      "Change a rough headline into title case or sentence case",
      "Clean up pasted text before using it in a document, blog post, or email draft",
    ],
    howItWorks: [
      "Paste or type your text into the input area",
      "Choose the case format you want to apply",
      "Review the converted text instantly",
      "Copy the result or keep editing until the format looks right",
    ],
    faq: [
      {
        q: "What can a case converter do?",
        a: "A case converter can change text to uppercase, lowercase, title case, sentence case, and other capitalization formats without retyping the content manually.",
      },
      {
        q: "When should I use title case?",
        a: "Title case is often useful for headlines, page titles, article titles, email subject lines, and other display text where major words should be capitalized.",
      },
      {
        q: "Can I use a case converter on mobile?",
        a: "Yes. A browser-based case converter works on phones, tablets, and desktop devices.",
      },
    ],
  },

  "remove-line-breaks": {
    intro:
      "Remove Line Breaks helps you clean up text copied from PDFs, emails, scanned documents, websites, and reports by removing unwanted hard returns and broken lines. It is useful when pasted text looks choppy or split across many short lines and you want a cleaner paragraph format.",
    examples: [
      "Clean up text copied from a PDF before pasting it into a document",
      "Remove hard returns from email text or scanned notes",
      "Fix broken lines in copied web content, reports, or form text",
    ],
    howItWorks: [
      "Paste the text with unwanted line breaks into the input area",
      "Run the tool to remove hard returns and broken lines",
      "Review the cleaned text output",
      "Copy the result into your editor, form, CMS, or document",
    ],
    faq: [
      {
        q: "What does remove line breaks do?",
        a: "It removes unwanted hard returns and broken lines so text copied from PDFs, emails, or documents is easier to reuse in a normal paragraph format.",
      },
      {
        q: "When is this tool most useful?",
        a: "It is especially useful when copied text looks broken into many short lines and you want to clean it up quickly before editing or publishing.",
      },
      {
        q: "Can I use this for text copied from PDFs?",
        a: "Yes. Remove Line Breaks is commonly used for PDF text cleanup, email drafts, scanned notes, and pasted website content.",
      },
    ],
  },

  "tip-calculator": {
    intro:
      "Tip Calculator helps you work out the tip amount, final total, and per-person share for restaurant bills, delivery orders, takeout, and group dining. It is useful when you want to settle a bill quickly without guessing at percentages in your head.",
    examples: [
      "Calculate a 15%, 18%, or 20% tip on a restaurant bill",
      "Split a dinner total evenly between two, four, or six people",
      "Check how tax and tip change the final amount before you pay",
    ],
    howItWorks: [
      "Enter the bill amount",
      "Choose a tip percentage or enter a custom rate",
      "Review the tip amount and full total",
      "Split the final amount by group size if more than one person is paying",
    ],
    faq: [
      {
        q: "How much should I tip at a restaurant?",
        a: "Common tip ranges are often around 15% to 20%, but local customs and service level can change the final choice.",
      },
      {
        q: "Can I split the total between multiple people?",
        a: "Yes. A tip calculator is especially useful for splitting restaurant bills and making sure everyone pays an even share.",
      },
      {
        q: "Should I tip on the pre-tax or post-tax total?",
        a: "People do both, but many diners prefer to calculate tip from the pre-tax amount for a cleaner comparison.",
      },
    ],
  },

  "password-generator": {
    intro:
      "Password Generator creates strong random passwords for email, banking, work accounts, gaming logins, and Wi-Fi setup. It helps you avoid weak, repeated passwords and makes it easier to create something long enough to resist simple guessing or reuse attacks.",
    examples: [
      "Generate a strong password for a new email or banking account",
      "Create a longer password with symbols for work logins",
      "Compare different password lengths before saving one in a password manager",
    ],
    howItWorks: [
      "Choose the password length and character options",
      "Generate one or more random passwords instantly",
      "Copy the result you want to use",
      "Store the final password in a trusted password manager if possible",
    ],
    faq: [
      {
        q: "How long should a strong password be?",
        a: "Longer passwords are usually stronger. A password generator is most useful when it lets you create a random password that is longer than the short, reused passwords people often choose by hand.",
      },
      {
        q: "Should I include symbols and numbers?",
        a: "Yes. Mixing letters, numbers, and symbols usually improves password strength, especially when the password is also long.",
      },
      {
        q: "Is a generated password safer than making one myself?",
        a: "In most cases, yes. Randomly generated passwords are usually harder to guess than familiar words, birthdays, or reused patterns.",
      },
    ],
  },

  "jpg-to-png": {
    intro:
      "JPG to PNG converts JPG images into PNG files in your browser. It is useful for screenshots, logos, graphics, editing workflows, and situations where you want a PNG file type for compatibility or easier reuse in design tools.",
    examples: [
      "Convert a JPG screenshot to PNG for editing or markup",
      "Save a graphic in PNG format for a site or design handoff",
      "Create a PNG version of an image before using it in another workflow",
    ],
    howItWorks: [
      "Upload a JPG image from your device",
      "Convert the file to PNG in your browser",
      "Preview or download the result",
      "Open related image tools if you also need compression, resizing, or cropping",
    ],
    faq: [
      {
        q: "Does JPG to PNG improve image quality?",
        a: "It changes the file format, but it does not restore detail already lost in the original JPG compression.",
      },
      {
        q: "When should I use PNG instead of JPG?",
        a: "PNG is often useful for screenshots, graphics, interface elements, and workflows where a PNG file is preferred for compatibility or editing.",
      },
      {
        q: "Can I convert JPG to PNG on mobile?",
        a: "Yes. Browser-based conversion works well on phones, tablets, and desktop browsers.",
      },
    ],
  },

  "image-to-pdf": {
    intro:
      "Image to PDF turns photos, screenshots, scans, and other image files into a PDF you can share, upload, or archive more easily. It is useful for receipts, forms, homework pages, scanned IDs, notes, and any situation where separate images need to become one document.",
    examples: [
      "Combine phone photos of receipts into one PDF for expense reports",
      "Turn scanned pages or homework photos into a single file for upload",
      "Package screenshots into a cleaner document for sharing or printing",
    ],
    howItWorks: [
      "Upload one or more images",
      "Arrange them in the order you want",
      "Generate a PDF in your browser",
      "Download the finished file and review the page order before sending",
    ],
    faq: [
      {
        q: "What kinds of images work with image to PDF?",
        a: "This workflow is commonly used for photos, screenshots, scans, and other standard image files that need to be bundled into one document.",
      },
      {
        q: "Why convert images into a PDF?",
        a: "PDF is easier to upload, print, and share when several pages or photos belong together.",
      },
      {
        q: "Can I use image to PDF for receipts and forms?",
        a: "Yes. It is a common way to package receipt photos, signed pages, scanned forms, and similar files.",
      },
    ],
  },

  "merge-pdf": {
    intro:
      "Merge PDF combines multiple PDF files into one document so you can send a cleaner final file instead of several attachments. It is useful for invoices, school submissions, contracts, reports, statements, and any document set that should stay together.",
    examples: [
      "Combine signed pages, attachments, and backup documents into one PDF",
      "Merge monthly statements or invoices before sending them to a client",
      "Create one school or office submission instead of uploading several separate files",
    ],
    howItWorks: [
      "Upload the PDF files you want to combine",
      "Place them in the order you want the final document to follow",
      "Run the merge tool in your browser",
      "Download the finished PDF and review the page order before sharing",
    ],
    faq: [
      {
        q: "Can I merge more than two PDFs?",
        a: "Yes. Merge PDF is designed for combining several documents into one finished file.",
      },
      {
        q: "Does file order matter?",
        a: "Yes. The final PDF follows the order you choose before the merge happens.",
      },
      {
        q: "Why merge PDF files instead of sending them separately?",
        a: "One combined document is easier to upload, print, archive, and review than several loose attachments.",
      },
    ],
  },

  "split-pdf": {
    intro:
      "Split PDF extracts selected pages from a larger PDF so you can share only the sections that matter. It is useful for contracts, packet cleanups, long reports, school submissions, statements, and any file where the full document is larger than what you actually need.",
    examples: [
      "Pull a few relevant pages out of a long contract or packet",
      "Separate one chapter or section from a larger PDF",
      "Extract only the pages a client, teacher, or coworker asked for",
    ],
    howItWorks: [
      "Upload the PDF file",
      "Choose the page or page range you want to extract",
      "Create a new smaller PDF with only those pages",
      "Download the extracted file and confirm the page range is correct",
    ],
    faq: [
      {
        q: "When should I use split PDF?",
        a: "Use it when you only need part of a document and do not want to send or upload the full file.",
      },
      {
        q: "Can I extract multiple pages at once?",
        a: "Yes. Split PDF is commonly used for single pages, page ranges, or selected groups of pages.",
      },
      {
        q: "Is split PDF helpful for forms and packets?",
        a: "Yes. It is useful for trimming large packets down to only the pages that matter for the current task.",
      },
    ],
  },

  "loan-calculator": {
    intro:
      "Loan Calculator estimates monthly payments for personal loans, fixed-rate borrowing, and other common loan scenarios. It is useful when you want a quick payment estimate before applying, comparing offers, or deciding whether a loan fits your budget.",
    examples: [
      "Estimate the payment on a $10,000 loan over 36 months",
      "Compare a shorter term to a longer term before borrowing",
      "See how rate changes affect the monthly payment on the same principal amount",
    ],
    howItWorks: [
      "Enter the loan amount",
      "Add the interest rate and term length",
      "Review the estimated monthly payment",
      "Adjust the values to compare several borrowing scenarios side by side",
    ],
    faq: [
      {
        q: "What changes the monthly payment the most?",
        a: "The principal amount, interest rate, and loan term all matter, but interest rate and term length can change the monthly payment a lot even when the borrowed amount stays the same.",
      },
      {
        q: "Does a longer term lower the monthly payment?",
        a: "Usually yes, but it can also increase the total interest paid over the life of the loan.",
      },
      {
        q: "Is this an official lender quote?",
        a: "No. It is a planning estimate that helps you compare scenarios before you talk to a lender.",
      },
    ],
  },

  "bmi-calculator": {
    intro:
      "BMI Calculator gives you a quick body mass index estimate from height and weight. It is useful for basic health screening, fitness tracking, and everyday check-ins when you want a fast BMI result without doing the formula yourself.",
    examples: [
      "Check your current BMI from height and weight in seconds",
      "Compare BMI results after a change in weight or fitness goals",
      "Use a quick estimate before discussing broader health questions with a professional",
    ],
    howItWorks: [
      "Enter your height and weight in the units the tool accepts",
      "Generate the BMI result instantly",
      "Review the category or range if the tool provides one",
      "Use the result as a quick screening number rather than a full health assessment on its own",
    ],
    faq: [
      {
        q: "What does BMI measure?",
        a: "BMI estimates body mass index from height and weight. It is often used as a simple screening metric, not a full measurement of health or body composition.",
      },
      {
        q: "Is BMI enough by itself?",
        a: "No. BMI is a basic estimate and should be considered alongside other health information, especially for athletic builds, age-related changes, and individual medical context.",
      },
      {
        q: "Why use a BMI calculator online?",
        a: "A browser-based BMI calculator gives you a quick estimate without manual math and makes it easy to compare changes over time.",
      },
    ],
  },

  "unit-converter": {
    intro:
      "Unit Converter changes common measurements between metric and imperial units for length, weight, temperature, speed, volume, and more. It is useful for schoolwork, recipes, shipping, travel, product specs, and DIY projects when you need a fast accurate conversion.",
    examples: [
      "Convert feet to meters or kilograms to pounds for forms and specs",
      "Switch temperatures when reading recipes or weather values from different regions",
      "Convert common measurements for homework, shipping, or project planning",
    ],
    howItWorks: [
      "Choose the measurement type you want to convert",
      "Enter the value in the starting unit",
      "Select the output unit you need",
      "Review the converted result and round it only if your workflow needs a cleaner number",
    ],
    faq: [
      {
        q: "What can a unit converter handle?",
        a: "A unit converter is useful for common measurement families like length, weight, speed, temperature, data, and volume depending on the tool's supported options.",
      },
      {
        q: "Why use an online unit converter instead of doing the math manually?",
        a: "It is faster, reduces formula mistakes, and makes it easier to compare several conversions in one place.",
      },
      {
        q: "Is it useful for school and DIY work?",
        a: "Yes. Unit converters are commonly used for assignments, recipes, shipping labels, travel planning, and home projects where measurement systems differ.",
      },
    ],
  },

  "mortgage-calculator": {
    intro:
      "Mortgage Calculator estimates monthly home-loan payments based on home price, down payment, interest rate, and term. It is useful for comparing buying scenarios, checking affordability, and seeing how rate or down-payment changes affect the payment.",
    examples: [
      "Compare a 15-year mortgage to a 30-year mortgage",
      "Estimate how a bigger down payment changes the monthly payment",
      "Check a payment scenario before you apply or shop for homes",
    ],
    howItWorks: [
      "Enter the home price and down payment",
      "Add the mortgage rate and loan term",
      "Review the estimated monthly payment",
      "Change the inputs to compare different buying scenarios",
    ],
    faq: [
      {
        q: "Does this include taxes and insurance?",
        a: "Some mortgage tools focus on principal and interest first, so always check what is included in the result when comparing it to a full lender estimate.",
      },
      {
        q: "How much does the interest rate matter?",
        a: "Even a small rate change can make a noticeable difference in a long mortgage payment.",
      },
      {
        q: "Why compare 15-year and 30-year loans?",
        a: "Comparing terms helps you see the tradeoff between a higher monthly payment now and lower long-term interest overall.",
      },
    ],
  },

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

  "rotate-pdf": {
    intro:
      "Rotate PDF lets you turn pages 90, 180, or 270 degrees and download the updated file in your browser. It is useful for scanned documents, sideways phone uploads, and PDF pages that need a quick orientation fix before sharing.",
    examples: [
      "Rotate a sideways scan before sending it to a client or school portal",
      "Fix a PDF exported with the wrong page orientation",
      "Turn all pages the same direction before printing or archiving",
    ],
    howItWorks: [
      "Upload a PDF file from your device",
      "Choose how much to rotate the pages",
      "Generate the updated PDF in your browser",
      "Download the rotated file and check the final layout",
    ],
    faq: [
      {
        q: "Can I rotate every page at once?",
        a: "Yes. This workflow is meant for quickly rotating the full document to a cleaner reading orientation.",
      },
      {
        q: "Why use a rotate PDF tool?",
        a: "It is useful when scans, camera captures, or exported pages open sideways or upside down.",
      },
      {
        q: "Does it work in the browser?",
        a: "Yes. UtilHubX handles this rotation workflow in the browser so you can fix orientation without installing extra software.",
      },
    ],
  },

  "delete-pdf-pages": {
    intro:
      "Delete PDF Pages removes unwanted pages from a PDF and creates a cleaner finished file. It is useful for trimming long packets, removing blank scans, dropping cover pages, and sending only the pages that matter.",
    examples: [
      "Remove blank pages from a scanned document",
      "Delete a cover page or appendix before sharing a PDF",
      "Trim a long packet down to the pages a teacher or client actually needs",
    ],
    howItWorks: [
      "Upload your PDF file",
      "Enter the page numbers or ranges you want to remove",
      "Generate a cleaned PDF in your browser",
      "Download the updated file and confirm the remaining pages are correct",
    ],
    faq: [
      {
        q: "Can I remove more than one page?",
        a: "Yes. You can remove individual pages or page ranges when cleaning up a larger document.",
      },
      {
        q: "When is deleting PDF pages helpful?",
        a: "It is helpful when the original file includes extras, blank pages, duplicate scans, or sections you do not want to upload.",
      },
      {
        q: "Do I need desktop software?",
        a: "No. This browser-based workflow is designed for quick PDF cleanup without a full editor.",
      },
    ],
  },

  "reorder-pdf-pages": {
    intro:
      "Reorder PDF Pages changes page order in a PDF so the final file follows the sequence you want. It is useful for scanned packets, combined documents, reports, and forms where the pages are correct but the order is wrong.",
    examples: [
      "Move a signature page to the end of a packet",
      "Reorder scanned pages that were captured out of sequence",
      "Clean up a merged PDF before sending it to someone else",
    ],
    howItWorks: [
      "Upload a PDF file",
      "Enter the new page order as a simple list of page numbers",
      "Generate the reordered PDF in your browser",
      "Download the final file and review the sequence before sharing",
    ],
    faq: [
      {
        q: "What order format should I use?",
        a: "Use a list of page numbers in the sequence you want, such as 3,1,2,4.",
      },
      {
        q: "Why reorder PDF pages?",
        a: "It is useful when pages were scanned, merged, or exported in the wrong order.",
      },
      {
        q: "Can I reorganize a PDF without editing the text?",
        a: "Yes. This tool focuses on page order, not document text editing.",
      },
    ],
  },

  "pdf-page-counter": {
    intro:
      "PDF Page Counter tells you how many pages are in a PDF file before you upload, send, split, or reorganize it. It is useful for document checks, intake forms, portal limits, and any workflow where page count matters.",
    examples: [
      "Check page count before uploading a file to a portal",
      "Confirm how long a report or packet is before sharing it",
      "Review a document before splitting, rotating, or reorganizing pages",
    ],
    howItWorks: [
      "Upload a PDF file from your device",
      "Read the page count result instantly",
      "Use the result to plan the next PDF step if needed",
      "Open related tools for rotating, splitting, or deleting pages",
    ],
    faq: [
      {
        q: "Why count PDF pages online?",
        a: "It saves time when you need a quick document check before upload, printing, or editing.",
      },
      {
        q: "Does this change the file?",
        a: "No. It simply reads the PDF and reports the page count.",
      },
      {
        q: "What should I use after counting pages?",
        a: "If you need edits afterward, related tools like split PDF, rotate PDF, and reorder PDF pages can help.",
      },
    ],
  },

  "image-resizer-by-kb": {
    intro:
      "Image Resizer by KB helps you shrink an image toward a target file size in kilobytes. It is useful for forms, job applications, profile uploads, exam portals, and government systems that reject files over a specific size limit.",
    examples: [
      "Reduce a photo to fit under a portal upload limit",
      "Resize an image for job, school, or ID form submissions",
      "Create a smaller file for email without opening design software",
    ],
    howItWorks: [
      "Choose a target size in KB",
      "Upload a JPG, PNG, WEBP, or similar image",
      "Let the tool adjust compression and dimensions toward your target",
      "Download the reduced image and verify it meets your upload rule",
    ],
    faq: [
      {
        q: "Will it hit the exact KB target every time?",
        a: "It aims for the target size as closely as possible, but exact results can vary depending on the image and output format.",
      },
      {
        q: "Why resize an image by KB instead of pixels?",
        a: "Many forms and portals care more about file size than dimensions, so a KB-focused workflow is often the fastest way to pass upload limits.",
      },
      {
        q: "When is this most useful?",
        a: "It is especially useful for official forms, profile uploads, exam portals, and email attachments with strict file limits.",
      },
    ],
  },

  "jpg-to-webp": {
    intro:
      "JPG to WEBP converts JPG images into WEBP format for smaller web-ready files. It is useful for websites, page-speed work, blog images, and situations where you want to reduce image size while keeping a modern format.",
    examples: [
      "Convert website images to a smaller web-friendly format",
      "Create lighter blog or landing-page assets for faster loading",
      "Generate a WEBP version of a JPG before publishing online",
    ],
    howItWorks: [
      "Upload a JPG image",
      "Convert it to WEBP in your browser",
      "Preview or download the result",
      "Use related image tools if you also need resizing or further compression",
    ],
    faq: [
      {
        q: "Why convert JPG to WEBP?",
        a: "WEBP is often used for smaller web image files and can help with site speed and bandwidth.",
      },
      {
        q: "Is JPG to WEBP useful for websites?",
        a: "Yes. It is commonly used when optimizing images for blogs, landing pages, and online stores.",
      },
      {
        q: "Can I still keep the original JPG?",
        a: "Yes. Converting to WEBP creates a new version and does not replace your original file unless you choose to overwrite it yourself.",
      },
    ],
  },

  "png-to-webp": {
    intro:
      "PNG to WEBP converts PNG images into WEBP format for lighter files and faster web delivery. It is useful for product images, screenshots, UI assets, and graphics that need a modern web format.",
    examples: [
      "Convert PNG assets before adding them to a website",
      "Create lighter versions of screenshots or interface graphics",
      "Prepare image files for faster web publishing",
    ],
    howItWorks: [
      "Upload a PNG image",
      "Convert the file to WEBP in your browser",
      "Review the converted output",
      "Download the new file and compare size or quality if needed",
    ],
    faq: [
      {
        q: "Why use PNG to WEBP?",
        a: "It can help reduce file size for web use while keeping a practical modern image format.",
      },
      {
        q: "Is PNG to WEBP good for websites?",
        a: "Yes. It is useful for publishing lighter images that still look clean on modern sites.",
      },
      {
        q: "Should I keep a PNG backup?",
        a: "Usually yes. Many people keep the original source file and use WEBP as a web delivery version.",
      },
    ],
  },

  "jpeg-to-jpg": {
    intro:
      "JPEG to JPG converts JPEG images into JPG format for easier compatibility with forms, upload fields, and image workflows that expect a .jpg file name. It is useful when a system treats JPEG and JPG differently in practice, even though the formats are closely related.",
    examples: [
      "Create a .jpg version for a portal or uploader that expects JPG",
      "Rename and re-export a JPEG image with a JPG extension",
      "Standardize image files before sending them to a client or platform",
    ],
    howItWorks: [
      "Upload a JPEG image",
      "Convert it to JPG in your browser",
      "Preview the output if needed",
      "Download the new JPG file for upload or sharing",
    ],
    faq: [
      {
        q: "Are JPEG and JPG basically the same?",
        a: "Yes. They are closely related, but some systems and workflows still prefer a .jpg file extension.",
      },
      {
        q: "Why convert JPEG to JPG?",
        a: "It can help when a platform, uploader, or naming convention expects JPG specifically.",
      },
      {
        q: "Does this work on mobile?",
        a: "Yes. This kind of browser-based image conversion works well on mobile and desktop browsers.",
      },
    ],
  },

  "gif-to-jpg": {
    intro:
      "GIF to JPG converts a GIF image into a JPG file for simpler sharing, uploads, and compatibility. It is useful when you only need a static image version of a GIF instead of the original format.",
    examples: [
      "Create a static JPG version of a GIF for an upload form",
      "Turn a simple graphic or banner into a more common image format",
      "Make an easier-to-share still image from a GIF file",
    ],
    howItWorks: [
      "Upload a GIF image",
      "Convert it to JPG in your browser",
      "Review the still image output",
      "Download the JPG for sharing or upload",
    ],
    faq: [
      {
        q: "Will an animated GIF stay animated?",
        a: "No. Converting GIF to JPG creates a still image rather than keeping animation.",
      },
      {
        q: "Why use GIF to JPG?",
        a: "It is useful when a platform needs a standard still image instead of a GIF.",
      },
      {
        q: "When is this helpful?",
        a: "It is helpful for quick uploads, email attachments, and simple image workflows that do not need animation.",
      },
    ],
  },

  "svg-to-png": {
    intro:
      "SVG to PNG converts vector graphics into a PNG image you can upload, share, or hand off more easily. It is useful for logos, icons, simple graphics, website assets, and situations where a platform does not accept SVG directly.",
    examples: [
      "Convert an SVG logo to PNG for a website or email signature",
      "Create a PNG version of an icon for a form or upload field",
      "Export vector artwork into a simpler image format for sharing",
    ],
    howItWorks: [
      "Upload an SVG file from your device",
      "Render the SVG into a PNG image in your browser",
      "Preview the result at the generated size",
      "Download the PNG for upload, print, or handoff",
    ],
    faq: [
      {
        q: "Why convert SVG to PNG?",
        a: "PNG is widely accepted by upload systems and design workflows that do not support SVG directly.",
      },
      {
        q: "Is SVG to PNG useful for logos and icons?",
        a: "Yes. It is a common way to prepare vector graphics for platforms that want standard image files.",
      },
      {
        q: "Can I use this on mobile?",
        a: "Yes. Browser-based SVG conversion works on modern mobile and desktop browsers.",
      },
    ],
  },
};

function buildGenericContent(
  title: string,
  category: string,
  description: string
): ToolContent {
  const lowerTitle = title.toLowerCase();
  const lowerCategory = category.toLowerCase();

  return {
    intro: `${title} helps people complete a common ${lowerCategory} task quickly in the browser without extra software. It is useful when you want a focused workflow for a simple job and do not need a heavier desktop app.`,
    examples: [
      `Use the ${lowerTitle} for quick everyday ${lowerCategory} work`,
      `Handle a one-off ${lowerCategory} task before sharing, publishing, or saving the result`,
      "Get a fast answer in your browser without extra setup",
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
    overrides[item.slug] ??
      buildGenericContent(item.title, item.category, item.description),
  ])
);