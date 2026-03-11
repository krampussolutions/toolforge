import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utilhubx.com"

  const routes = [
    "",
    "/popular-tools",
    "/categories",
    "/tools",
    "/calculators",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}