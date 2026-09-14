import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { FinalCta } from "@/components/final-cta";
import { articles, getArticle } from "@/data/articles";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    image: `${siteConfig.url}${article.image}`,
    author: { "@type": "Organization", name: "FUMEXIS" },
    publisher: { "@type": "Organization", name: "FUMEXIS" },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
  };

  return (
    <>
      <article className="article-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <header className="article-hero">
          <div className="article-hero-image">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" />
          </div>
          <span className="article-hero-shade" />
          <div className="container-wide article-hero-content">
            <Link href="/blog" className="article-back"><ArrowLeft /> Tous les articles</Link>
            <div className="article-kicker"><span>{article.category}</span><time dateTime={article.publishedAt}>{article.displayDate}</time><span>{article.readingTime} de lecture</span></div>
            <h1>{article.title}</h1>
            <p>{article.deck}</p>
          </div>
        </header>

        <div className="article-shell container-wide">
          <aside className="article-summary">
            <span className="micro-label">À RETENIR</span>
            <ol>
              {article.takeaways.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ol>
            <Link href="/contact">Parler de mon besoin <ArrowUpRight /></Link>
          </aside>

          <div className="article-body">
            <p className="article-lead">{article.excerpt}</p>
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <span className="article-section-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul>{section.bullets.map((item) => <li key={item}><Check />{item}</li>)}</ul>
                ) : null}
              </section>
            ))}
            <div className="article-disclaimer">
              <strong>Un contexte, une réponse.</strong>
              <p>Ces repères sont généraux. L’analyse d’un professionnel permet d’adapter les équipements, la maintenance ou la formation à la configuration réelle de votre établissement.</p>
            </div>
          </div>
        </div>
      </article>

      <section className="related-articles section-pad">
        <div className="container-wide">
          <div className="blog-list-heading"><span>À LIRE AUSSI</span><Link href="/blog">VOIR TOUS LES ARTICLES <ArrowUpRight /></Link></div>
          <div className="related-grid">{related.map((item) => <BlogCard key={item.slug} article={item} />)}</div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
