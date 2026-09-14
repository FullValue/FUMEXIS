import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Process } from "@/components/process";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l’approche terrain de FUMEXIS pour la sécurité incendie, le désenfumage et la sûreté des bâtiments professionnels.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="FUMEXIS / À PROPOS" title={<>Une approche terrain<br /><em>de la sécurité.</em></>} text="Une expertise technique pensée pour rester claire, accessible et utile à l’exploitation de vos bâtiments." image="/images/hero-fumexis.jpg" compact />
      <section className="manifesto section-pad" id="content">
        <div className="container-wide manifesto-grid">
          <Reveal><span className="micro-label">NOTRE VISION</span></Reveal>
          <Reveal delay={0.08}><h2>La qualité d’une installation ne se mesure pas seulement le jour de sa mise en service. Elle se confirme dans le temps.</h2></Reveal>
          <Reveal className="manifesto-copy" delay={0.15}><p>FUMEXIS relie installation, contrôle, maintenance et accompagnement dans une même logique. Le bâtiment est observé comme un système vivant&nbsp;: ses usages évoluent, ses contraintes aussi.</p></Reveal>
        </div>
      </section>
      <section className="about-image-section">
        <div className="about-image"><Image src="/images/desenfumage-toiture.jpg" alt="Inspection d’un système de désenfumage en toiture" fill sizes="100vw" /></div>
        <div className="about-principles">
          {[["01", "Observer", "Comprendre le site avant de prescrire."], ["02", "Expliquer", "Rendre les choix techniques directement lisibles."], ["03", "Suivre", "Garder une continuité entre les opérations."]].map(([n,t,p]) => <Reveal key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
        </div>
      </section>
      <section className="process-section section-pad"><div className="container-wide"><SectionHeading light eyebrow="MÉTHODE" title={<>De l’analyse<br /><em>à la continuité.</em></>} /><Process /></div></section>
      <section className="commitments section-pad">
        <div className="container-wide commitments-grid">
          <SectionHeading eyebrow="NOS ENGAGEMENTS" title={<>Une relation construite<br /><em>sur des faits.</em></>} intro="Pas de promesse abstraite : des pratiques concrètes pour accompagner chaque intervention." />
          <div>{["Des préconisations contextualisées", "Des échanges clairs", "Une intervention structurée", "Un suivi exploitable", "Aucune donnée technique inventée"].map((item) => <p key={item}><Check />{item}</p>)}</div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
