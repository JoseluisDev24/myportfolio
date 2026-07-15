import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const locales = ["en", "es"] as const;
const routes = ["", "/projects", "/services"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/en${route}`,
          es: `${siteUrl}/es${route}`,
        },
      },
    }))
  );
}
