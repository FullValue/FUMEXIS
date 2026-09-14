export type ServiceVisual = {
  src: string;
  position: string;
};

export const serviceVisuals: Record<string, ServiceVisual> = {
  extincteurs: { src: "/images/hero-fumexis.jpg", position: "82% center" },
  ria: { src: "/images/hero-fumexis.jpg", position: "70% center" },
  "colonnes-seches": { src: "/images/desenfumage-toiture.jpg", position: "18% center" },
  "colonnes-en-charge": { src: "/images/desenfumage-toiture.jpg", position: "78% center" },
  "extinction-automatique": { src: "/images/hero-fumexis.jpg", position: "57% center" },
  "extinction-exterieure": { src: "/images/desenfumage-toiture.jpg", position: "52% center" },
  "camera-infrarouge": { src: "/images/surete-batiment.jpg", position: "18% center" },
  videosurveillance: { src: "/images/surete-batiment.jpg", position: "82% center" },
  maintenance: { src: "/images/hero-fumexis.jpg", position: "44% center" },
};

export const additionalServiceVisuals: ServiceVisual[] = [
  { src: "/images/desenfumage-toiture.jpg", position: "25% center" },
  { src: "/images/desenfumage-toiture.jpg", position: "88% center" },
  { src: "/images/formation-incendie.jpg", position: "55% center" },
];
