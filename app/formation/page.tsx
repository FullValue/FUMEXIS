import type { Metadata } from "next";
import { TopicDetailPage } from "@/components/security-detail-page";
import { PreventionTopicNav } from "@/components/security-topic-nav";
import { getPreventionTopic, preventionTopics } from "@/data/prevention-topics";

export const metadata: Metadata = {
  title: "Formation au risque incendie",
  description: "Des formations au risque incendie ancrées dans les locaux, les consignes et les rôles des équipes.",
  alternates: { canonical: "/formation" },
};

export default function FormationPage() {
  const topic = getPreventionTopic("formation-risque-incendie")!;
  return <TopicDetailPage topic={topic} topics={preventionTopics} navigation={<PreventionTopicNav currentPath={topic.href} />} />;
}
