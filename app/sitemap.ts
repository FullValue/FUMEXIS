import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/securite-incendie", "/desenfumage", "/formation", "/blog", "/a-propos", "/contact"];
  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/blog/${article.slug}`, lastModified: article.publishedAt, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
