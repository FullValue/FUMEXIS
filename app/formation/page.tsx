import type { Metadata } from "next";
import { ExpertisePage } from "@/components/expertise-page";

export const metadata: Metadata = {
  title: "Formation incendie",
  description: "Formation à la manipulation des extincteurs, à l’évacuation et à la prévention du risque incendie en entreprise.",
  alternates: { canonical: "/formation" },
};

export default function FormationPage() {
  return <ExpertisePage
    eyebrow="EXPERTISE / FORMATION"
    title="Comprendre le risque."
    italic="Savoir réagir."
    intro="Des formats concrets pour donner aux équipes des repères simples, utiles et mobilisables."
    image="/images/formation-incendie.jpg"
    statement="Face à un départ de feu, les premiers gestes reposent sur des repères compris et régulièrement réactivés."
    body="Les formations FUMEXIS privilégient une approche directe : comprendre les risques, reconnaître les équipements, adopter la bonne posture et suivre une procédure claire. Le contenu peut être ajusté aux locaux, aux activités et aux rôles des participants."
    solutions={[
      { title: "Manipulation des extincteurs", text: "Identifier l’appareil adapté et comprendre les gestes de première intervention." },
      { title: "Sensibilisation incendie", text: "Repérer les situations à risque et adopter les bons réflexes de prévention." },
      { title: "Évacuation", text: "Comprendre l’alerte, les cheminements et les rôles nécessaires à l’évacuation." },
      { title: "Prévention", text: "Relier les consignes aux situations réellement rencontrées sur le site." },
      { title: "Procédures d’urgence", text: "Clarifier les étapes et responsabilités pour limiter l’improvisation." },
      { title: "Formation des équipes", text: "Construire un format cohérent avec le public et l’environnement de travail." },
    ]}
    stepsTitle="Observer, comprendre, pratiquer, retenir."
    points={["Contenu contextualisé", "Démonstrations", "Mise en pratique", "Repères actionnables"]}
    faq={[
      { question: "À qui s’adressent les formations ?", answer: "Aux équipes de bâtiments professionnels, avec un contenu adapté aux rôles, aux locaux et au niveau de sensibilisation attendu." },
      { question: "Peut-on adapter le programme au site ?", answer: "Oui. Le contexte du bâtiment et les procédures existantes peuvent servir de base pour rendre la formation plus concrète." },
      { question: "Proposez-vous la manipulation d’extincteurs ?", answer: "Oui, ce module fait partie des thèmes pouvant être abordés avec les équipes." },
      { question: "Comment définir le bon format ?", answer: "Précisez le nombre de participants, le site et les objectifs via le formulaire de contact afin de cadrer la proposition." },
    ]}
  />;
}
