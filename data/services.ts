import { ShieldCheck, SprayCan, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "Incendie" | "Désenfumage naturel et mécanique" | "Audit et formation" | "Maintenance";

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: ServiceCategory;
  icon: LucideIcon;
  purpose: string;
  installation: string;
  maintenance: string;
  attention: string[];
  buildings: string[];
};

export type AdditionalService = {
  title: string;
  short: string;
  category: ServiceCategory;
  icon: LucideIcon;
  href: string;
};

const commonBuildings = ["ERP", "Bureaux", "Commerces", "Copropriétés", "Entrepôts", "Sites industriels"];

export const services: Service[] = [
  {
    slug: "extincteurs",
    title: "Extincteurs",
    short: "Choix, pose, signalisation et suivi des appareils selon les risques présents.",
    category: "Incendie",
    icon: SprayCan,
    purpose: "Fournir un moyen de première intervention immédiatement identifiable et adapté à la nature du risque.",
    installation: "Le positionnement tient compte des circulations, de la visibilité, des risques spécifiques et des conditions d’accès.",
    maintenance: "Les appareils sont contrôlés avec méthode afin d’identifier leur état, leur accessibilité et les opérations nécessaires.",
    attention: ["Adéquation au type de risque", "Accessibilité et signalisation", "État général et traçabilité"],
    buildings: commonBuildings,
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    short: "Prévenir les écarts, corriger les défauts et garder une vision claire du parc.",
    category: "Maintenance",
    icon: ShieldCheck,
    purpose: "Maintenir les équipements disponibles et donner au responsable de site une lecture claire des actions réalisées ou à prévoir.",
    installation: "La reprise d’un parc existant commence par son identification et par la définition d’un périmètre de suivi cohérent.",
    maintenance: "Préventive ou corrective, l’intervention s’appuie sur des contrôles structurés et une restitution exploitable.",
    attention: ["Planification des visites", "Identification des écarts", "Suivi des actions correctives"],
    buildings: commonBuildings,
  },
];

export const additionalServices: AdditionalService[] = [
  { title: "Désenfumage naturel et mécanique", short: "Étude, installation et entretien des ouvrants, extracteurs et commandes du bâtiment.", category: "Désenfumage naturel et mécanique", icon: Wind, href: "/desenfumage" },
  { title: "Audit et formation", short: "Évaluer les risques, définir les priorités et former les équipes aux bons réflexes.", category: "Audit et formation", icon: ShieldCheck, href: "/prevention" },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
