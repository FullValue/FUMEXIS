import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { FinalCta } from "@/components/final-cta";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog — sécurité incendie et prévention",
  description: "Les articles FUMEXIS pour mieux comprendre la sécurité incendie, le désenfumage, la sûreté, la maintenance et la formation des équipes.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...otherArticles] = articles;

  return (
    <>
      <PageHero
        eyebrow="BLOG / RESSOURCES"
        title={<>Comprendre les risques.<br /><em>Agir avec méthode.</em></>}
        text="Des repères concrets pour mieux protéger vos bâtiments, suivre vos équipements et préparer vos équipes."
        image="/images/formation-incendie.jpg"
        compact
      />
      <section className="blog-index section-pad" id="content">
        <div className="container-wide">
          <SectionHeading
            eyebrow="À LA UNE"
            title={<>L’expérience du terrain.<br /><em>Partagée clairement.</em></>}
            intro="Incendie, désenfumage, sûreté et prévention : des réponses concrètes aux questions des responsables de sites et de leurs équipes."
          />
          <div className="blog-featured">
            <BlogCard article={featured} featured />
            <div className="blog-featured-note">
              <span>01 / {String(articles.length).padStart(2, "0")}</span>
              <p>Des contenus conçus pour aider à observer un bâtiment, préparer une intervention et faire vivre la prévention au quotidien.</p>
            </div>
          </div>
          <div className="blog-list-heading">
            <span>TOUS LES ARTICLES</span>
            <span>{String(articles.length).padStart(2, "0")} PUBLICATIONS</span>
          </div>
          <div className="blog-grid">
            {otherArticles.map((article) => <BlogCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
      <FinalCta title={<>Une question sur votre site&nbsp;?<br />Parlons-en concrètement.</>} />
    </>
  );
}
