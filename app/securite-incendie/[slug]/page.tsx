import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SecurityDetailPage } from "@/components/security-detail-page";
import { getSecurityTopic, securityTopics } from "@/data/security-topics";

export function generateStaticParams() {
  return securityTopics.filter((topic) => topic.slug !== "desenfumage").map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getSecurityTopic(slug);
  if (!topic || topic.slug === "desenfumage") return {};
  return {
    title: topic.menuLabel,
    description: topic.intro,
    alternates: { canonical: topic.href },
    openGraph: { title: `${topic.menuLabel} | FUMEXIS`, description: topic.intro, images: [topic.image] },
  };
}

export default async function SecurityTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getSecurityTopic(slug);
  if (!topic || topic.slug === "desenfumage") notFound();
  return <SecurityDetailPage topic={topic} />;
}
