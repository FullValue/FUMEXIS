import { ClipboardCheck, ClipboardList, GraduationCap, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

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
      { href: "/desenfumage", label: "Désenfumage" },
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
    title: "Formation et exercices",
    summary: "Préparer les équipes aux gestes, aux consignes et aux mises en situation.",
    icon: GraduationCap,
    links: [
      { href: "/formation", label: "Formation incendie" },
      { href: "/prevention/exercices-evacuation-confinement", label: "Exercices d’évacuation" },
    ],
  },
  {
    id: "conseil",
    title: "Audit et conseil",
    summary: "Faire le point sur l’existant et définir les actions prioritaires.",
    icon: ClipboardList,
    links: [{ href: "/prevention/audit-conseil-prevention", label: "Audit en prévention" }],
  },
];
