import { ClipboardCheck, GraduationCap, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

export type ServiceAction = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  links: { href: string; label: string }[];
};

export const serviceActions: ServiceAction[] = [
  {
    id: "installation",
    title: "Installation",
    summary: "Choisir, positionner et mettre en place les équipements adaptés au bâtiment.",
    icon: Wrench,
    links: [
      { href: "/services/extincteurs", label: "Extincteurs" },
      { href: "/desenfumage", label: "Désenfumage naturel et mécanique" },
    ],
  },
  {
    id: "verification",
    title: "Vérification et contrôle",
    summary: "Tester le fonctionnement, repérer les écarts et consigner les résultats.",
    icon: ClipboardCheck,
    links: [
      { href: "/securite-incendie/controle-desenfumage", label: "Contrôle du désenfumage" },
      { href: "/services/maintenance", label: "Suivi des équipements" },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    summary: "Organiser l’entretien, les corrections et la traçabilité dans la durée.",
    icon: ShieldCheck,
    links: [{ href: "/services/maintenance", label: "Découvrir la maintenance" }],
  },
  {
    id: "formation",
    title: "Audit et formation",
    summary: "Évaluer les risques du site, définir les priorités et préparer les équipes aux situations d’urgence.",
    icon: GraduationCap,
    links: [
      { href: "/prevention/audit-conseil-prevention", label: "Audit en prévention" },
      { href: "/formation", label: "Formation incendie" },
      { href: "/prevention/exercices-evacuation-confinement", label: "Exercices d’évacuation" },
    ],
  },
];
