import type { Metadata } from "next";
import { SecurityDetailPage } from "@/components/security-detail-page";
import { getSecurityTopic } from "@/data/security-topics";

export const metadata: Metadata = {
  title: "Désenfumage naturel et mécanique",
  description: "Comprendre le désenfumage naturel et mécanique, ses composants et les points à contrôler dans un bâtiment professionnel.",
  alternates: { canonical: "/desenfumage" },
};

export default function DesenfumagePage() {
  return <SecurityDetailPage topic={getSecurityTopic("desenfumage")!} />;
}
