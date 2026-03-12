import type { MetadataRoute } from "next";
import { suites, toolPages, categories, SITE_URL } from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/free-tools",
    "/image-tools",
    "/pdf-tools",
    "/online-calculators",
    "/file-converters",
    "/popular-tools",
    "/categories",
    "/tools",
    "/calculators",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const suitePages = suites.map((item) => ({
    url: `${SITE_URL}/calculators/${item.slug}`,
    lastModified: now,
  }));

  const toolUrls = toolPages.map((item) => ({
    url: `${SITE_URL}/tools/${item.slug}`,
    lastModified: now,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${SITE_URL}/categories/${category.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
  }));

  const guideUrls = programmaticPages.map((item) => ({
    url: `${SITE_URL}/guides/${item.slug}`,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...suitePages,
    ...toolUrls,
    ...categoryUrls,
    ...guideUrls,
  ];
}