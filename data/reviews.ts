export type Review = {
  id: number;
  name: string;
  initials: string;
  date: string;
  text: string;
  rating: number;
  demo: boolean;
};

// Données de démonstration à remplacer par une source Google Business Profile.
export const reviews: Review[] = [
  {
    id: 1,
    name: "Avis de démonstration",
    initials: "AD",
    date: "Exemple",
    text: "Exemple de retour client : intervention organisée, explications claires et suivi précis des équipements.",
    rating: 5,
    demo: true,
  },
  {
    id: 2,
    name: "Témoignage à connecter",
    initials: "TC",
    date: "Exemple",
    text: "Cet emplacement est prêt à recevoir un avis réel depuis votre future source Google Business Profile.",
    rating: 5,
    demo: true,
  },
  {
    id: 3,
    name: "Donnée placeholder",
    initials: "DP",
    date: "Exemple",
    text: "La structure distingue volontairement les données de démonstration des futurs avis vérifiés.",
    rating: 5,
    demo: true,
  },
];
