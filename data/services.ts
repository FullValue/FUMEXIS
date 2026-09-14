import { Cctv, ShieldCheck, SprayCan, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "Incendie" | "Désenfumage" | "Sûreté" | "Formation" | "Maintenance";

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
    slug: "videosurveillance",
    title: "Vidéosurveillance",
    short: "Surveillance adaptée aux accès, flux et zones sensibles du bâtiment.",
    category: "Sûreté",
    icon: Cctv,
    purpose: "Renforcer la visibilité sur les accès et les zones sensibles, au service de la prévention et de la levée de doute.",
    installation: "L’implantation se fonde sur les usages du site, les angles utiles, les flux et les contraintes de l’environnement.",
    maintenance: "Le contrôle porte sur le fonctionnement, la qualité d’image, les supports et la continuité de l’installation.",
    attention: ["Zones réellement utiles", "Qualité et continuité d’image", "Respect du cadre d’usage"],
    buildings: ["Bureaux", "Commerces", "Copropriétés", "Entrepôts", "Sites professionnels"],
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
  { title: "Désenfumage naturel", category: "Désenfumage", icon: Wind, href: "/desenfumage" },
  { title: "Désenfumage mécanique", category: "Désenfumage", icon: Wind, href: "/desenfumage" },
  { title: "Formation incendie", category: "Formation", icon: ShieldCheck, href: "/formation" },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
