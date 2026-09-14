import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";

export function BlogCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link href={`/blog/${article.slug}`} className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <span className="blog-card-image" aria-hidden="true">
        <Image
          src={article.image}
          alt=""
          fill
          sizes={featured ? "(max-width: 900px) 100vw, 62vw" : "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"}
        />
      </span>
      <span className="blog-card-shade" />
      <span className="blog-card-meta">
        <small>{article.category}</small>
        <small>{article.readingTime}</small>
      </span>
      <span className="blog-card-copy">
        <time dateTime={article.publishedAt}>{article.displayDate}</time>
        <strong>{article.title}</strong>
        <span>{article.excerpt}</span>
      </span>
      <ArrowUpRight className="blog-card-arrow" aria-hidden="true" />
    </Link>
  );
}
