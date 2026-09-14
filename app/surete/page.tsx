import type { Metadata } from "next";
import { ExpertisePage } from "@/components/expertise-page";

export const metadata: Metadata = {
  title: "Sûreté des bâtiments",
  description: "Vidéosurveillance, protection des accès et solutions de sûreté pour les bâtiments professionnels.",
  alternates: { canonical: "/surete" },
};

export default function SuretePage() {
  return <ExpertisePage
    eyebrow="EXPERTISE / SÛRETÉ"
    title="Voir les points sensibles."
    italic="Maîtriser les accès."
    intro="Des solutions de surveillance et de protection intégrées à l’usage quotidien du bâtiment."
    image="/images/surete-batiment.jpg"
    statement="Une sûreté utile commence par une compréhension concrète des flux, des accès et des zones sensibles."
    body="FUMEXIS construit des solutions de sûreté lisibles, proportionnées et compatibles avec les contraintes du site. L’objectif n’est pas de multiplier les équipements, mais de les positionner là où ils apportent une information ou une protection réellement exploitable."
    solutions={[
      { title: "Vidéosurveillance", text: "Implantation et suivi des caméras sur les zones utiles.", href: "/services/videosurveillance" },
      { title: "Surveillance", text: "Vision cohérente des accès, circulations et points sensibles." },
      { title: "Protection des accès", text: "Organisation des équipements autour des flux du bâtiment." },
      { title: "Intrusion", text: "Solutions de détection pensées selon les usages et périodes d’activité." },
      { title: "Sécurisation des bâtiments", text: "Approche globale pour articuler les différents dispositifs." },
    ]}
    stepsTitle="Protéger sans compliquer l’usage du bâtiment."
    points={["Analyse des flux", "Implantation utile", "Mise en service", "Maintenance"]}
    faq={[
      { question: "Pouvez-vous compléter une installation existante ?", answer: "Oui. L’existant est étudié pour identifier les besoins, la compatibilité des équipements et les zones à mieux couvrir." },
      { question: "Comment définissez-vous l’emplacement des caméras ?", answer: "À partir des accès, des flux, des angles réellement utiles, des contraintes architecturales et du cadre d’usage applicable au site." },
      { question: "La solution peut-elle évoluer ?", answer: "L’architecture peut être pensée pour accompagner l’évolution du bâtiment ou des zones à surveiller." },
      { question: "Assurez-vous la maintenance ?", answer: "Oui, notamment pour contrôler le fonctionnement, la qualité d’image et la continuité de l’installation." },
    ]}
  />;
}
