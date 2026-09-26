import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceFilter } from "@/components/service-filter";
import { FinalCta } from "@/components/final-cta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceActions } from "@/data/service-actions";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Installation, vérification, maintenance, audit et formation : découvrez les prestations FUMEXIS.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES / NOS PRESTATIONS" title={<>Des actions concrètes.<br /><em>Un suivi dans la durée.</em></>} text="De l’installation au conseil, choisissez l’intervention qui correspond au besoin de votre bâtiment et de vos équipes." image="/images/hero-fumexis.jpg" compact />
      <section className="service-actions-section section-pad" id="content">
        <div className="container-wide">
          <SectionHeading eyebrow="CE QUE NOUS FAISONS" title={<>Une intervention<br /><em>à chaque étape.</em></>} intro="Chaque prestation part de la configuration du site, des équipements présents et des objectifs à atteindre." />
          <div className="service-action-list">
            {serviceActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <article className="service-action-item" id={action.id} key={action.id}>
                  {action.id === "formation" ? <span id="conseil" className="service-anchor" aria-hidden="true" /> : null}
                  <span className="service-action-number">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="service-action-icon" size={34} strokeWidth={1.35} aria-hidden="true" />
                  <h3>{action.title}</h3>
                  <p>{action.summary}</p>
                  <div className="service-action-links">
                    {action.links.map((link) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="all-services section-pad" id="catalogue">
        <div className="container-wide">
          <SectionHeading eyebrow="SOLUTIONS ET ÉQUIPEMENTS" title={<>Explorer les solutions<br /><em>concernées.</em></>} intro="Retrouvez les équipements et domaines sur lesquels ces interventions peuvent porter." />
          <ServiceFilter />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
