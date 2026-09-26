import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { HomeHeroSlider } from "@/components/home-hero-slider";
import { ExpertiseCarousel } from "@/components/expertise-carousel";
import { SectionHeading } from "@/components/section-heading";
import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";
import { AdditionalServiceCard, ServiceCard } from "@/components/service-card";
import { Process } from "@/components/process";
import { ReviewCarousel } from "@/components/review-carousel";
import { Faq } from "@/components/faq";
import { BlogCard } from "@/components/blog-card";
import { defaultFaq, sectors } from "@/data/site";
import { additionalServices, services } from "@/data/services";
import { additionalServiceVisuals, serviceVisuals } from "@/data/service-visuals";
import { articles } from "@/data/articles";
import { securityTopics } from "@/data/security-topics";

export const metadata: Metadata = {
  title: "Sécurité incendie, désenfumage et formation",
  description: "FUMEXIS accompagne les professionnels pour leurs équipements de sécurité incendie, leur désenfumage et la formation de leurs équipes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHeroSlider />

      <section className="home-intro section-pad" id="content">
        <div className="container-wide editorial-intro">
          <Reveal className="editorial-kicker"><span>UNE VISION GLOBALE</span></Reveal>
          <Reveal className="editorial-title" delay={0.08}>
            <h2>Un seul partenaire.<br />Plusieurs expertises.<br /><em>Un même niveau d’exigence.</em></h2>
          </Reveal>
          <Reveal className="editorial-copy" delay={0.16}>
            <p>De l’analyse du site au suivi des installations, nous articulons les compétences nécessaires autour d’un objectif simple&nbsp;: des équipements lisibles, suivis et adaptés à la réalité de vos bâtiments.</p>
            <ArrowLink href="/a-propos" variant="text">Notre approche</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="expertise-section section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="NOS EXPERTISES" title={<>Trois champs d’action.<br /><em>Une réponse coordonnée.</em></>} />
          <ExpertiseCarousel />
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container-wide">
          <div className="heading-row">
            <SectionHeading eyebrow="SOLUTIONS" title={<>Des équipements choisis<br /><em>pour le terrain.</em></>} intro="Chaque réponse part d’un usage, d’une configuration et d’un niveau de risque à comprendre." />
            <ArrowLink href="/services" variant="dark">Voir tous les services</ArrowLink>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const visual = serviceVisuals[service.slug];
              return <ServiceCard key={service.slug} service={service} index={index} image={visual.src} imagePosition={visual.position} />;
            })}
            {additionalServices.map((service, index) => {
              const visual = additionalServiceVisuals[index];
              return <AdditionalServiceCard key={service.title} service={service} index={services.length + index} image={visual.src} imagePosition={visual.position} />;
            })}
          </div>
        </div>
      </section>

      <section className="fire-feature section-pad">
        <div className="container-wide fire-grid">
          <Reveal className="fire-index"><span>01 — 06</span><strong>SÉCURITÉ<br />INCENDIE</strong></Reveal>
          <div className="fire-copy">
            <SectionHeading eyebrow="PROTECTION" title={<>Détecter. Contenir.<br /><em>Faciliter l’intervention.</em></>} intro="De l’alarme aux moyens d’intervention, chaque dispositif a un rôle précis dans la sécurité du bâtiment." />
            <div className="fire-links">
              {securityTopics.map((topic, index) => (
                <Link href={topic.href} key={topic.slug}><span>{String(index + 1).padStart(2, "0")}</span>{topic.menuLabel}<MoveRight aria-hidden="true" /></Link>
              ))}
            </div>
            <ArrowLink href="/securite-incendie" variant="dark">Explorer la sécurité incendie</ArrowLink>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container-wide">
          <SectionHeading light eyebrow="NOTRE MÉTHODE" title={<>Un accompagnement<br /><em>de A à Z.</em></>} />
          <Process />
        </div>
      </section>

      <section className="sectors-section section-pad">
        <div className="container-wide sectors-grid">
          <SectionHeading eyebrow="VOS ENVIRONNEMENTS" title={<>Une méthode qui s’adapte<br /><em>à chaque bâtiment.</em></>} intro="Les contraintes diffèrent. La rigueur d’analyse reste la même." />
          <div className="sector-list">
            {sectors.map((sector, index) => <Reveal key={sector} delay={(index % 3) * 0.04}><span>{String(index + 1).padStart(2, "0")}</span>{sector}</Reveal>)}
          </div>
        </div>
      </section>

      <section className="reviews-section section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="AVIS CLIENTS" title={<>La confiance se construit<br /><em>sur le terrain.</em></>} intro="Composant prêt à être relié à votre source d’avis. Les contenus ci-dessous sont explicitement des démonstrations." />
          <ReviewCarousel />
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="container-wide faq-layout">
          <div><SectionHeading eyebrow="QUESTIONS FRÉQUENTES" title={<>Aller droit<br /><em>à l’essentiel.</em></>} /><p className="faq-side-copy">Vous avez un contexte particulier&nbsp;? Décrivez-le nous pour obtenir une réponse adaptée à votre site.</p></div>
          <Faq items={defaultFaq} />
        </div>
      </section>

      <section className="home-blog section-pad">
        <div className="container-wide">
          <div className="heading-row">
            <SectionHeading eyebrow="CONSEILS FUMEXIS" title={<>Mieux comprendre.<br /><em>Mieux anticiper.</em></>} intro="Des repères pratiques sur la sécurité incendie, le désenfumage, la maintenance et la formation des équipes." />
            <ArrowLink href="/blog" variant="dark">Voir les {articles.length} articles</ArrowLink>
          </div>
          <div className="home-blog-grid">
            {articles.filter((article) => article.category === "Sécurité incendie" || article.category === "Désenfumage").slice(0, 3).map((article) => <BlogCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
    </>
  );
}
