import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SecurityTopicNav } from "@/components/security-topic-nav";
import { SectionHeading } from "@/components/section-heading";
import { FinalCta } from "@/components/final-cta";
import { securityTopics } from "@/data/security-topics";

export const metadata: Metadata = {
  title: "Sécurité incendie",
  description: "Parcourez les solutions de sécurité incendie : SSI, désenfumage, compartimentage, éclairage de sécurité et réseaux d’eau incendie.",
  alternates: { canonical: "/securite-incendie" },
};

export default function SecuriteIncendiePage() {
  return (
    <>
      <SecurityTopicNav currentPath="/securite-incendie" />
      <PageHero
        eyebrow="EXPERTISE / SÉCURITÉ INCENDIE"
        title={<>Chaque maillon<br /><em>compte.</em></>}
        text="Détecter, guider, contenir et faciliter l’intervention : explorez les dispositifs qui forment la sécurité d’un bâtiment."
        image="/images/securite/ssi.jpg"
        compact
      />
      <section className="security-landing-intro section-pad" id="content">
        <div className="container-wide security-landing-intro-grid">
          <div className="eyebrow"><span />UNE VISION D’ENSEMBLE</div>
          <h2>Un dispositif seul ne raconte jamais toute l’histoire.</h2>
          <p>La sécurité incendie dépend de la façon dont les équipements fonctionnent ensemble et des personnes qui les utilisent. Choisissez un sujet pour comprendre son rôle, ses composants et les points à suivre dans le temps.</p>
        </div>
      </section>
      <section className="security-landing-topics section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="LES THÈMES" title={<>Explorer chaque<br /><em>fonction essentielle.</em></>} />
          <div className="security-topic-grid">
            {securityTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Link href={topic.href} key={topic.slug} className="security-topic-card">
                  <Image src={topic.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className="security-topic-card-shade" aria-hidden="true" />
                  <div className="security-topic-card-top"><span>{String(index + 1).padStart(2, "0")} / 06</span><Icon size={24} strokeWidth={1.5} /></div>
                  <div className="security-topic-card-copy"><h3>{topic.menuLabel}</h3><p>{topic.intro}</p></div>
                  <ArrowUpRight className="security-topic-card-arrow" size={23} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="security-landing-close section-pad">
        <div className="container-wide">
          <span className="micro-label">DE LA LECTURE DU SITE AU SUIVI</span>
          <p>Un bâtiment a ses propres circulations, contraintes techniques et usages. C’est cette réalité qui guide le choix des solutions et l’organisation des vérifications.</p>
          <Link href="/contact">Parler de votre projet <ArrowUpRight size={18} /></Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
