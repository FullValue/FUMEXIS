import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false, follow: true } };

export default function LegalPage() {
  return (
    <section className="legal-page section-pad">
      <div className="container-text">
        <div className="eyebrow"><span />INFORMATIONS LÉGALES</div>
        <h1>Mentions légales</h1>
        <p className="legal-intro">Cette page est prête à être finalisée avec les informations juridiques réelles de FUMEXIS avant la mise en production.</p>
        <h2>Éditeur du site</h2>
        <p>Raison sociale&nbsp;: {siteConfig.legalName}<br />Adresse&nbsp;: {siteConfig.address}<br />Email&nbsp;: {siteConfig.email}<br />Téléphone&nbsp;: {siteConfig.phone}</p>
        <h2>Informations à compléter</h2>
        <p>Forme juridique, capital social, numéro SIREN/SIRET, RCS, numéro de TVA intracommunautaire et identité du directeur de la publication.</p>
        <h2>Hébergement</h2>
        <p>Les coordonnées de l’hébergeur doivent être ajoutées une fois la solution d’hébergement choisie.</p>
        <h2>Propriété intellectuelle</h2>
        <p>Les contenus, signes distinctifs et éléments graphiques présents sur ce site sont protégés par les dispositions applicables en matière de propriété intellectuelle.</p>
      </div>
    </section>
  );
}
