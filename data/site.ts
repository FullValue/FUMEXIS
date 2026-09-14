export const siteConfig = {
  name: "FUMEXIS",
  legalName: "{{COMPANY_LEGAL_NAME}}",
  description:
    "Installation, maintenance et vérification des équipements de sécurité incendie, de désenfumage et de sûreté.",
  phone: "07.67.67.33.01",
  email: "contact@fumexis.fr",
  address: "{{ADDRESS}}",
  serviceArea: "{{SERVICE_AREA}}",
  googleRating: "{{GOOGLE_RATING}}",
  googleReviewsCount: "{{GOOGLE_REVIEWS_COUNT}}",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/securite-incendie", mega: true },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const expertiseLinks = [
  {
    label: "Sécurité incendie",
    href: "/securite-incendie",
    description: "Installer et maintenir les équipements de protection.",
    code: "01",
  },
  {
    label: "Désenfumage",
    href: "/desenfumage",
    description: "Préserver des volumes praticables en cas de sinistre.",
    code: "02",
  },
  {
    label: "Sûreté",
    href: "/surete",
    description: "Surveiller les accès et sécuriser les bâtiments.",
    code: "03",
  },
  {
    label: "Formation",
    href: "/formation",
    description: "Préparer les équipes à agir avec méthode.",
    code: "04",
  },
];

export const sectors = [
  "ERP",
  "Bureaux",
  "Commerces",
  "Copropriétés",
  "Entrepôts",
  "Sites industriels",
  "Établissements scolaires",
  "Hôtels",
  "Restaurants",
  "Locaux professionnels",
];

export const processSteps = [
  { number: "01", title: "Analyse", text: "Lecture du site, des usages et des installations en place." },
  { number: "02", title: "Préconisation", text: "Une réponse dimensionnée, expliquée et directement exploitable." },
  { number: "03", title: "Installation", text: "Une mise en œuvre maîtrisée, avec un impact limité sur l’activité." },
  { number: "04", title: "Maintenance & suivi", text: "Des contrôles planifiés et une traçabilité claire dans la durée." },
];

export const defaultFaq = [
  {
    question: "Quels équipements FUMEXIS peut-il installer ?",
    answer:
      "FUMEXIS intervient sur un ensemble de solutions de sécurité incendie, de désenfumage et de sûreté : extincteurs, RIA, colonnes, systèmes d’extinction, ouvrants et équipements de surveillance notamment.",
  },
  {
    question: "Proposez-vous la maintenance d’installations existantes ?",
    answer:
      "Oui. Une visite initiale permet d’identifier les équipements, leur état et l’historique disponible avant de proposer un programme de maintenance adapté.",
  },
  {
    question: "Intervenez-vous sur les systèmes de désenfumage ?",
    answer:
      "Oui, pour l’installation, le contrôle, l’entretien et la maintenance de solutions de désenfumage naturel ou mécanique, selon la configuration du bâtiment.",
  },
  {
    question: "Pouvez-vous reprendre une installation déjà existante ?",
    answer:
      "Oui. La reprise commence par un état des lieux technique afin de définir les contrôles, corrections ou opérations de suivi nécessaires.",
  },
  {
    question: "Comment demander une intervention ?",
    answer:
      "Décrivez votre besoin via le formulaire de contact. L’équipe pourra ensuite préciser le périmètre, les contraintes du site et les prochaines étapes.",
  },
  {
    question: "Proposez-vous des formations incendie ?",
    answer:
      "Oui. Les formats peuvent porter sur la manipulation des extincteurs, l’évacuation, la sensibilisation au risque et les procédures d’urgence.",
  },
];
