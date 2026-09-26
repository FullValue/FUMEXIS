import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PreventionTopicNav } from "@/components/security-topic-nav";
import { SectionHeading } from "@/components/section-heading";
import { FinalCta } from "@/components/final-cta";
import { preventionTopics } from "@/data/prevention-topics";

export const metadata: Metadata = {
  title: "Prévention — audit et formation",
  description: "Formation incendie, santé et sécurité au travail, plans, audit et exercices : explorez les thèmes de prévention FUMEXIS.",
  alternates: { canonical: "/prevention" },
};

export default function PreventionPage() {
  return (
    <>
      <PreventionTopicNav currentPath="/prevention" />
      <div className="security-overview-hero">
        <PageHero
          eyebrow="EXPERTISE / PRÉVENTION"
          title={<>Prévoir.<br /><em>Savoir agir.</em></>}
          text="Audit et formation : évaluer les risques, préparer les équipes et éprouver les procédures pour agir avec méthode."
          image="/images/formation-incendie.jpg"
          compact
        />
      </div>
      <section className="security-landing-intro section-pad" id="content">
        <div className="container-wide security-landing-intro-grid">
          <div className="eyebrow"><span />UNE PRÉVENTION VIVANTE</div>
          <h2>La sécurité se prépare au quotidien.</h2>
          <p>Former, rendre l’information lisible et éprouver les procédures : ces démarches donnent aux équipes des gestes plus sûrs. Explorez chaque thème pour comprendre son rôle et les points à adapter à votre site.</p>
        </div>
      </section>
      <section className="security-landing-topics section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="LES THÈMES" title={<>Du savoir<br /><em>à la pratique.</em></>} />
          <div className="security-topic-grid">
            {preventionTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Link href={topic.href} key={topic.slug} className="security-topic-card">
                  <Image src={topic.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className="security-topic-card-shade" aria-hidden="true" />
                  <div className="security-topic-card-top"><span>{String(index + 1).padStart(2, "0")} / 05</span><Icon size={24} strokeWidth={1.5} /></div>
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
          <span className="micro-label">UNE DÉMARCHE ADAPTÉE AU SITE</span>
          <p>Un exercice, une formation ou un plan n’est utile que s’il parle des lieux et des personnes qui les occupent.</p>
          <Link href="/contact">Échanger sur votre besoin <ArrowUpRight size={18} /></Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
