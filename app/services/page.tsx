import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceFilter } from "@/components/service-filter";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Découvrez les services FUMEXIS : extincteurs, désenfumage, vidéosurveillance, formation et maintenance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES / VUE D’ENSEMBLE" title={<>Une réponse pour chaque<br /><em>point de vigilance.</em></>} text="Parcourez les solutions FUMEXIS par expertise et accédez au détail des prestations." image="/images/hero-fumexis.jpg" compact />
      <section className="all-services section-pad" id="content">
        <div className="container-wide">
          <SectionHeading eyebrow="CATALOGUE DE SERVICES" title={<>Comprendre le besoin.<br /><em>Activer la bonne expertise.</em></>} intro="Filtrez les interventions par domaine. Chaque page détaille le rôle de la solution, son installation et son suivi." />
          <ServiceFilter />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
