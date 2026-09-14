import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <section className="legal-page section-pad">
      <div className="container-text">
        <div className="eyebrow"><span />DONNÉES PERSONNELLES</div>
        <h1>Politique de confidentialité</h1>
        <p className="legal-intro">Modèle à faire valider et compléter selon les traitements réellement mis en œuvre lors de la mise en production.</p>
        <h2>Données collectées</h2>
        <p>Le formulaire peut recueillir votre identité, vos coordonnées professionnelles, votre code postal, le type de besoin et le contenu de votre message.</p>
        <h2>Finalité</h2>
        <p>Ces informations sont utilisées pour qualifier votre demande et vous recontacter au sujet des services FUMEXIS.</p>
        <h2>Durée de conservation</h2>
        <p>La durée doit être définie avant la mise en production en fonction des obligations et besoins réels de l’entreprise.</p>
        <h2>Vos droits</h2>
        <p>Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que la limitation ou l’opposition au traitement, via&nbsp;: {siteConfig.email}.</p>
        <h2>Sous-traitants et hébergement</h2>
        <p>Cette section devra identifier les prestataires effectivement utilisés pour l’hébergement, la messagerie, les statistiques et la gestion du formulaire.</p>
      </div>
    </section>
  );
}
