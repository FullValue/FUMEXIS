import type { LucideIcon } from "lucide-react";

export type ExpertiseTopic = {
  slug: string;
  href: string;
  label: string;
  menuLabel: string;
  title: string;
  kicker: string;
  intro: string;
  image: string;
  imageAlt: string;
  statement: string;
  explanation: string;
  features: { title: string; text: string }[];
  checks: string[];
  icon: LucideIcon;
};
