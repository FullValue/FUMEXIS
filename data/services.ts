import { Activity, Cctv, Flame, Gauge, ScanLine, ShieldCheck, Siren, SprayCan, Wind } from "lucide-react";
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
    slug: "ria",
    title: "RIA",
    short: "Installation et maintenance des Robinets d’Incendie Armés.",
    category: "Incendie",
    icon: Gauge,
    purpose: "Mettre à disposition un moyen d’intervention alimenté en eau, mobilisable rapidement par les occupants formés.",
    installation: "Implantation, raccordement et mise en service sont étudiés en fonction de la couverture utile et du réseau disponible.",
    maintenance: "Le suivi porte sur l’état des composants, le fonctionnement, l’étanchéité et les conditions d’utilisation de l’équipement.",
    attention: ["Couverture des volumes", "Disponibilité du réseau", "Dévidoir, robinetterie et tuyau"],
    buildings: ["ERP", "Entrepôts", "Sites industriels", "Grands commerces"],
  },
  {
    slug: "colonnes-seches",
    title: "Colonnes sèches",
    short: "Équipements d’alimentation dédiés à l’intervention des secours.",
    category: "Incendie",
    icon: Activity,
    purpose: "Faciliter l’acheminement rapide de l’eau dans les bâtiments comportant plusieurs niveaux ou des accès complexes.",
    installation: "Le tracé, les prises et l’accessibilité sont coordonnés avec la configuration du bâtiment et les accès d’intervention.",
    maintenance: "Les contrôles visent l’intégrité, l’identification, l’accessibilité et la tenue fonctionnelle de l’ensemble.",
    attention: ["Accessibilité des raccords", "Protection du réseau", "Repérage des prises"],
    buildings: ["Immeubles", "Parkings", "ERP", "Sites complexes"],
  },
  {
    slug: "colonnes-en-charge",
    title: "Colonnes en charge",
    short: "Réseaux maintenus en eau pour une disponibilité immédiate.",
    category: "Incendie",
    icon: Activity,
    purpose: "Assurer une ressource en eau disponible en permanence pour soutenir une intervention rapide dans les ouvrages concernés.",
    installation: "La solution est dimensionnée autour des contraintes hydrauliques, des volumes desservis et de la continuité de service attendue.",
    maintenance: "La surveillance coordonne les organes du réseau, l’alimentation, la pression et les points d’accès.",
    attention: ["Pression disponible", "Continuité d’alimentation", "État des organes"],
    buildings: ["Immeubles de grande hauteur", "Sites industriels", "Bâtiments complexes"],
  },
  {
    slug: "extinction-automatique",
    title: "Extinction automatique",
    short: "Solutions fixes adaptées à des zones et risques précisément identifiés.",
    category: "Incendie",
    icon: Siren,
    purpose: "Détecter et contenir automatiquement un départ de feu dans un volume ou sur un équipement sensible.",
    installation: "L’étude relie le risque, l’agent extincteur, le volume protégé et les contraintes d’exploitation avant mise en œuvre.",
    maintenance: "Les contrôles réguliers préservent la disponibilité du système et permettent de traiter les écarts observés.",
    attention: ["Nature du risque", "Compatibilité avec l’activité", "Disponibilité du système"],
    buildings: ["Locaux techniques", "Entrepôts", "Sites industriels", "Cuisines professionnelles"],
  },
  {
    slug: "extinction-exterieure",
    title: "Extinction extérieure",
    short: "Protection des zones techniques et installations exposées.",
    category: "Incendie",
    icon: Flame,
    purpose: "Apporter une réponse adaptée aux risques situés hors des volumes intérieurs ou dans des environnements exposés.",
    installation: "Les équipements sont sélectionnés selon l’environnement, les conditions climatiques et les contraintes d’accès.",
    maintenance: "Le suivi prend en compte l’exposition, l’état des protections et la disponibilité effective des équipements.",
    attention: ["Exposition aux intempéries", "Accès en situation d’urgence", "Protection mécanique"],
    buildings: ["Sites industriels", "Plateformes logistiques", "Zones de stockage", "Cours techniques"],
  },
  {
    slug: "camera-infrarouge",
    title: "Caméra infrarouge",
    short: "Contrôle thermographique ciblé lorsque le diagnostic le justifie.",
    category: "Maintenance",
    icon: ScanLine,
    purpose: "Mettre en évidence des écarts thermiques utiles à l’analyse d’un équipement ou d’une installation.",
    installation: "La thermographie est mobilisée comme outil d’inspection, avec un périmètre défini selon la situation observée.",
    maintenance: "Les constats sont contextualisés afin d’orienter, lorsque nécessaire, les vérifications ou actions complémentaires.",
    attention: ["Conditions de mesure", "Interprétation contextualisée", "Traçabilité des constats"],
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

export const additionalServices = [
  { title: "Désenfumage naturel", category: "Désenfumage" as const, icon: Wind, href: "/desenfumage" },
  { title: "Désenfumage mécanique", category: "Désenfumage" as const, icon: Wind, href: "/desenfumage" },
  { title: "Formation incendie", category: "Formation" as const, icon: ShieldCheck, href: "/formation" },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
