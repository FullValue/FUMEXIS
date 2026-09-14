import type { Metadata } from "next";
import { ExpertisePage } from "@/components/expertise-page";

export const metadata: Metadata = {
  title: "Désenfumage naturel et mécanique",
  description: "Installation, contrôle, entretien et maintenance des systèmes de désenfumage naturel et mécanique pour bâtiments professionnels.",
  alternates: { canonical: "/desenfumage" },
};

export default function DesenfumagePage() {
  return <ExpertisePage
    eyebrow="EXPERTISE / DÉSENFUMAGE"
    title="Libérer les volumes."
    italic="Maintenir les passages."
    intro="Des solutions naturelles et mécaniques pensées autour de l’architecture, des circulations et du fonctionnement réel du bâtiment."
    image="/images/desenfumage-toiture.jpg"
    statement="En cas de sinistre, la gestion des fumées participe directement aux conditions d’évacuation et d’intervention."
    body="Ouvrants, exutoires, commandes, réseaux et extracteurs forment un système qui doit fonctionner comme un tout. FUMEXIS analyse la configuration, intervient sur les équipements et organise leur maintenance avec une lecture claire des points de contrôle."
    solutions={[
      { title: "Désenfumage naturel", text: "Évacuation des fumées par ouvrants et exutoires intégrés au bâtiment." },
      { title: "Désenfumage mécanique", text: "Extraction par réseaux et équipements motorisés adaptés aux volumes." },
      { title: "Installation", text: "Intégration des équipements, commandes et liaisons utiles au système." },
      { title: "Contrôle", text: "Essais fonctionnels et lecture coordonnée des différents organes." },
      { title: "Entretien", text: "Actions planifiées pour maintenir l’accessibilité et le fonctionnement." },
      { title: "Maintenance", text: "Traitement des écarts, suivi des actions et continuité de l’installation." },
    ]}
    stepsTitle="Une intervention coordonnée, du déclenchement à l’évacuation."
    points={["Ouvrants & exutoires", "Commandes", "Extraction mécanique", "Contrôle fonctionnel"]}
    faq={[
      { question: "Quelle différence entre naturel et mécanique ?", answer: "Le désenfumage naturel exploite des ouvrants et les mouvements thermiques des fumées. Le désenfumage mécanique s’appuie sur des équipements d’extraction motorisés et des réseaux dédiés." },
      { question: "Pouvez-vous intervenir sur une installation existante ?", answer: "Oui. Un état des lieux permet d’identifier les composants, les commandes et les essais nécessaires." },
      { question: "Intervenez-vous en toiture ?", answer: "Lorsque la configuration du système le nécessite, l’intervention peut concerner les exutoires et équipements situés en toiture, avec une préparation adaptée aux accès." },
      { question: "La maintenance peut-elle être planifiée ?", answer: "Oui. Le périmètre et la fréquence sont organisés à partir du parc, du bâtiment et des besoins d’exploitation." },
    ]}
  />;
}
