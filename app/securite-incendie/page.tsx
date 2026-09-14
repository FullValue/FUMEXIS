import type { Metadata } from "next";
import { ExpertisePage } from "@/components/expertise-page";

export const metadata: Metadata = {
  title: "Sécurité incendie",
  description: "Installation, vérification et maintenance des extincteurs et équipements de protection incendie.",
  alternates: { canonical: "/securite-incendie" },
};

export default function SecuriteIncendiePage() {
  return <ExpertisePage
    eyebrow="EXPERTISE / SÉCURITÉ INCENDIE"
    title="Prévenir le risque."
    italic="Rendre l’action possible."
    intro="Des équipements cohérents avec les risques du site, installés avec précision et suivis dans la durée."
    image="/images/hero-fumexis.jpg"
    statement="La protection incendie n’est pas une collection d’équipements. C’est un ensemble qui doit rester compréhensible et disponible."
    body="FUMEXIS intervient de l’étude à la maintenance pour structurer cet ensemble autour des risques, des usages et des circulations du bâtiment. Chaque préconisation cherche l’équilibre entre efficacité technique, simplicité d’exploitation et qualité du suivi."
    solutions={[
      { title: "Extincteurs", text: "Sélection, implantation, installation et maintenance des appareils.", href: "/services/extincteurs" },
      { title: "Installation", text: "Implantation des équipements selon les risques, les usages et les circulations du bâtiment." },
      { title: "Entretien & vérification", text: "Contrôles structurés pour identifier l’état, l’accessibilité et les besoins d’intervention." },
      { title: "Maintenance préventive", text: "Opérations planifiées pour préserver la disponibilité des équipements.", href: "/services/maintenance" },
      { title: "Maintenance corrective", text: "Traitement des défauts et suivi clair des actions réalisées.", href: "/services/maintenance" },
      { title: "Protection incendie", text: "Une approche cohérente des équipements et de leur environnement d’utilisation." },
    ]}
    stepsTitle="Des équipements identifiés, accessibles et maintenus."
    points={["Installation", "Vérification", "Maintenance préventive", "Maintenance corrective"]}
    faq={[
      { question: "Pouvez-vous équiper un bâtiment existant ?", answer: "Oui. L’intervention commence par une analyse de l’existant et des usages afin de construire une proposition adaptée au site." },
      { question: "FUMEXIS reprend-il la maintenance d’un parc existant ?", answer: "Oui. Un état initial permet d’identifier le parc, les informations disponibles et les premières actions à organiser." },
      { question: "Quels types de bâtiments sont concernés ?", answer: "FUMEXIS peut accompagner des ERP, bureaux, commerces, copropriétés, entrepôts, sites industriels et autres locaux professionnels." },
      { question: "Comment organiser une visite technique ?", answer: "Transmettez les informations disponibles via la page contact. Le périmètre et les accès pourront être précisés avant l’intervention." },
    ]}
  />;
}
