import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/securite-incendie", "/desenfumage", "/surete", "/formation", "/a-propos", "/contact"];
  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
