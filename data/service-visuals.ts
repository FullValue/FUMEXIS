export type ServiceVisual = {
  src: string;
  position: string;
};

export const serviceVisuals: Record<string, ServiceVisual> = {
  extincteurs: { src: "/images/hero-fumexis.jpg", position: "82% center" },
  maintenance: { src: "/images/hero-fumexis.jpg", position: "44% center" },
};

export const additionalServiceVisuals: ServiceVisual[] = [
  { src: "/images/desenfumage-toiture.jpg", position: "25% center" },
  { src: "/images/formation-incendie.jpg", position: "55% center" },
];
