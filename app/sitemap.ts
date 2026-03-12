import type { MetadataRoute } from "next";
import { suites, toolPages, categories } from "@/lib/site";
import { programmaticPages } from "@/lib/programmatic-pages";

const BASE_URL = "https://utilhubx.com";

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
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }));

  const suitePages = suites.map((item) => ({
    url: `${BASE_URL}/calculators/${item.slug}`,
    lastModified: now,
  }));

  const toolUrls = toolPages.map((item) => ({
    url: `${BASE_URL}/tools/${item.slug}`,
    lastModified: now,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
  }));

  const guideUrls = programmaticPages.map((item) => ({
    url: `${BASE_URL}/guides/${item.slug}`,
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