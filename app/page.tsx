import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";
import { AdditionalServiceCard, ServiceCard } from "@/components/service-card";
import { Process } from "@/components/process";
import { ReviewCarousel } from "@/components/review-carousel";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { defaultFaq, expertiseLinks, sectors } from "@/data/site";
import { additionalServices, services } from "@/data/services";
import { additionalServiceVisuals, serviceVisuals } from "@/data/service-visuals";

const fireServiceLinks = [
  { label: "Extincteurs", href: "/services/extincteurs" },
  { label: "Installation", href: "/securite-incendie" },
  { label: "Entretien & vérification", href: "/securite-incendie" },
  { label: "Maintenance préventive", href: "/services/maintenance" },
  { label: "Maintenance corrective", href: "/services/maintenance" },
];

export const metadata: Metadata = {
  title: "Sécurité incendie, désenfumage et formation",
  description: "FUMEXIS accompagne les professionnels pour leurs équipements de sécurité incendie, leur désenfumage et la formation de leurs équipes.",
  alternates: { canonical: "/" },
};

const expertiseImages = [
  "/images/hero-fumexis.jpg",
  "/images/desenfumage-toiture.jpg",
  "/images/formation-incendie.jpg",
];

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="SÉCURITÉ INCENDIE · DÉSENFUMAGE · FORMATION"
        title={<>Anticiper les risques.<br /><em>Protéger les lieux.</em></>}
        text="FUMEXIS accompagne les professionnels dans l’installation, la maintenance et le suivi de leurs équipements de sécurité."
        image="/images/hero-fumexis.jpg"
      />

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
          <div className="expertise-grid">
            {expertiseLinks.map((item, index) => (
              <Reveal className={`expertise-card expertise-card--${index + 1}`} key={item.href} delay={index * 0.06}>
                <Link href={item.href}>
                  <Image src={expertiseImages[index]} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <span className="expertise-overlay" />
                  <div className="expertise-card-top"><small>{item.code}</small><ArrowUpRight /></div>
                  <div className="expertise-card-copy"><h3>{item.label}</h3><p>{item.description}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
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

      <section className="smoke-feature">
        <div className="smoke-image"><Image src="/images/desenfumage-toiture.jpg" alt="Ouvrants de désenfumage en toiture d’un bâtiment professionnel" fill sizes="100vw" /></div>
        <div className="smoke-overlay" />
        <div className="container-wide smoke-content">
          <Reveal><div className="eyebrow eyebrow--light"><span />DÉSENFUMAGE</div><h2>Maîtriser les fumées.<br /><em>Faciliter l’évacuation.</em></h2></Reveal>
          <Reveal className="smoke-side" delay={0.1}>
            <p>Solutions naturelles ou mécaniques, installation, contrôle et maintenance&nbsp;: nous intervenons sur l’ensemble du cycle de vie du système.</p>
            <ul><li><Check />Désenfumage naturel</li><li><Check />Désenfumage mécanique</li><li><Check />Maintenance & vérification</li></ul>
            <ArrowLink href="/desenfumage" variant="primary">Découvrir l’expertise</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="fire-feature section-pad">
        <div className="container-wide fire-grid">
          <Reveal className="fire-index"><span>01 — 05</span><strong>SÉCURITÉ<br />INCENDIE</strong></Reveal>
          <div className="fire-copy">
            <SectionHeading eyebrow="PROTECTION" title={<>Installer. Contrôler.<br /><em>Maintenir.</em></>} intro="De l’installation des extincteurs aux opérations de maintenance, FUMEXIS construit un suivi cohérent pour vos équipements." />
            <div className="fire-links">
              {fireServiceLinks.map((service, index) => (
                <Link href={service.href} key={service.label}><span>{String(index + 1).padStart(2, "0")}</span>{service.label}<MoveRight /></Link>
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

      <section className="why-section section-pad">
        <div className="container-wide">
          <SectionHeading light eyebrow="POURQUOI FUMEXIS" title={<>La technique utile.<br /><em>Le suivi en plus.</em></>} />
          <div className="why-grid">
            {[
              ["01", "Expertise technique", "Une lecture précise des équipements et de leur environnement."],
              ["02", "Accompagnement", "Un interlocuteur qui structure les étapes et explique les choix."],
              ["03", "Réactivité", "Des échanges directs pour qualifier rapidement les priorités."],
              ["04", "Suivi", "Une vision claire des opérations menées et des actions à prévoir."],
              ["05", "Solutions adaptées", "Des préconisations pensées à partir du bâtiment, pas d’un catalogue."],
              ["06", "Maintenance", "Une continuité technique pour conserver des installations suivies."],
            ].map(([number, title, text]) => <Reveal className="why-card" key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></Reveal>)}
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

      <FinalCta />
    </>
  );
}
