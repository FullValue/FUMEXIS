import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicDetailPage } from "@/components/security-detail-page";
import { PreventionTopicNav } from "@/components/security-topic-nav";
import { getPreventionTopic, preventionTopics } from "@/data/prevention-topics";

export function generateStaticParams() {
  return preventionTopics.filter((topic) => topic.slug !== "formation-risque-incendie").map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getPreventionTopic(slug);
  if (!topic || topic.slug === "formation-risque-incendie") return {};
  return {
    title: topic.menuLabel,
    description: topic.intro,
    alternates: { canonical: topic.href },
    openGraph: { title: `${topic.menuLabel} | FUMEXIS`, description: topic.intro, images: [topic.image] },
  };
}

export default async function PreventionTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getPreventionTopic(slug);
  if (!topic || topic.slug === "formation-risque-incendie") notFound();
  return <TopicDetailPage topic={topic} topics={preventionTopics} navigation={<PreventionTopicNav currentPath={topic.href} />} />;
}
