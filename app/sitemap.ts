import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import { securityTopics } from "@/data/security-topics";
import { preventionTopics } from "@/data/prevention-topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/securite-incendie", "/desenfumage", "/prevention", "/formation", "/blog", "/a-propos", "/contact"];
  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...securityTopics.filter((topic) => topic.slug !== "desenfumage").map((topic) => ({ url: `${siteConfig.url}${topic.href}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...preventionTopics.filter((topic) => topic.slug !== "formation-risque-incendie").map((topic) => ({ url: `${siteConfig.url}${topic.href}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/blog/${article.slug}`, lastModified: article.publishedAt, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
