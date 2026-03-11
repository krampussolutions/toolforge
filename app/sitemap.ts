import type { MetadataRoute } from "next";
import { SITE_URL, suites, toolPages, categories } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/calculators", "/tools", "/categories", "/popular-tools", "/about", "/contact", "/privacy-policy", "/terms"].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() }));
  const suitePages = suites.map((item) => ({ url: `${SITE_URL}/calculators/${item.slug}`, lastModified: new Date() }));
  const toolUrls = toolPages.map((item) => ({ url: `${SITE_URL}/tools/${item.slug}`, lastModified: new Date() }));
  const categoryUrls = categories.map((c) => ({ url: `${SITE_URL}/categories/${c.toLowerCase().replace(/\s+/g, "-")}`, lastModified: new Date() }));
  return [...staticPages, ...suitePages, ...categoryUrls, ...toolUrls];
}
