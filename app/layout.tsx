import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ToolForge - Simple Tools for Everyday Tasks", template: "%s | ToolForge" },
  description: "Free online tools for everyday tasks, including image tools, PDF tools, calculators, converters, and text tools."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5957528671321920"
crossorigin="anonymous"></script>
      </head>
      <body>
        <Header />
        <main className="main"><div className="container">{children}</div></main>
        <Footer />
      </body>
    </html>
  );
}
