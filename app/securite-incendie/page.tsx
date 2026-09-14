import type { Metadata } from "next";
import { ExpertisePage } from "@/components/expertise-page";

export const metadata: Metadata = {
  title: "Sécurité incendie",
  description: "Installation, vérification et maintenance des équipements de sécurité incendie : extincteurs, RIA, colonnes et systèmes d’extinction.",
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
      { title: "RIA", text: "Réseaux de première intervention, couverture et suivi fonctionnel.", href: "/services/ria" },
      { title: "Colonnes sèches", text: "Équipements dédiés à l’acheminement de l’eau pour les secours.", href: "/services/colonnes-seches" },
      { title: "Colonnes en charge", text: "Réseaux alimentés, contrôlés pour conserver leur disponibilité.", href: "/services/colonnes-en-charge" },
      { title: "Extinction automatique", text: "Réponse fixe pensée autour des risques et des volumes protégés.", href: "/services/extinction-automatique" },
      { title: "Extinction extérieure", text: "Solutions adaptées aux équipements et zones exposées.", href: "/services/extinction-exterieure" },
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
