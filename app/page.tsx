import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { HomeHeroSlider } from "@/components/home-hero-slider";
import { ExpertiseCarousel } from "@/components/expertise-carousel";
import { SectionHeading } from "@/components/section-heading";
import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";
import { SectorShowcase } from "@/components/sector-showcase";
import { FirePanel } from "@/components/fire-panel";
import { Process } from "@/components/process";
import { ReviewCarousel } from "@/components/review-carousel";
import { Faq } from "@/components/faq";
import { defaultFaq } from "@/data/site";

const fireServiceLinks = [
  { label: "Audit", href: "/prevention/audit-conseil-prevention" },
  { label: "Entretien et vérification", href: "/services/maintenance" },
  { label: "Installation", href: "/services#installation" },
  { label: "Mise à jour des registres de sécurité", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Sécurité incendie, désenfumage naturel et mécanique, audit et formation",
  description: "FUMEXIS accompagne les professionnels en sécurité incendie, désenfumage naturel et mécanique, audit et formation des équipes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHeroSlider />

      <section className="home-intro home-intro--refined" id="content">
        <div className="container-wide intro-flow">
          <Reveal className="intro-statement">
            <span className="intro-eyebrow">UNE VISION GLOBALE</span>
            <h2>Plusieurs expertises.<br /><em>Une même exigence.</em></h2>
          </Reveal>
          <Reveal className="intro-note" delay={0.12}>
            <p>Un seul interlocuteur, de l’analyse de votre bâtiment au suivi de ses équipements. Une approche claire, pensée pour votre quotidien.</p>
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

      <section className="fire-feature section-pad">
        <div className="container-wide fire-grid">
          <FirePanel />
          <div className="fire-copy">
            <SectionHeading eyebrow="PROTECTION" title={<>Auditer. Entretenir.<br /><em>Installer. Suivre.</em></>} intro="Audit, entretien, installation et registres de sécurité : quatre interventions pour suivre votre bâtiment." />
            <div className="fire-links">
              {fireServiceLinks.map((service, index) => (
                <Link href={service.href} key={service.label}><span>{String(index + 1).padStart(2, "0")}</span>{service.label}<MoveRight aria-hidden="true" /></Link>
              ))}
            </div>
            <ArrowLink href="/securite-incendie" variant="dark">Explorer la sécurité incendie</ArrowLink>
          </div>
        </div>
      </section>

      <section className="process-section process-section--home section-pad">
        <Image className="method-background" src="/images/hero-fumexis.jpg" alt="" fill sizes="100vw" />
        <div className="container-wide">
          <SectionHeading light eyebrow="NOTRE MÉTHODE" title={<>Un accompagnement<br /><em>de A à Z.</em></>} />
          <Process />
        </div>
      </section>

      <section className="sectors-section section-pad">
        <div className="container-wide sectors-grid">
          <SectionHeading eyebrow="VOS ENVIRONNEMENTS" title={<>Une méthode qui s’adapte<br /><em>à chaque bâtiment.</em></>} intro="Les contraintes diffèrent. La rigueur d’analyse reste la même." />
          <SectorShowcase />
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

    </>
  );
}
