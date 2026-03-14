import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UtilHubX | Free Online Tools, Calculators, PDF and Image Tools",
    template: "%s | UtilHubX",
  },
  description:
    "Free online tools for PDFs, images, calculators, writing, conversions, and everyday browser-based tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8G91BRF59K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8G91BRF59K');
          `}
        </Script>

        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main className="main">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}