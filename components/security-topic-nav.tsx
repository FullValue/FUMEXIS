"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Flame, HeartPulse, type LucideIcon } from "lucide-react";
import { securityTopics } from "@/data/security-topics";
import { preventionTopics } from "@/data/prevention-topics";
import type { ExpertiseTopic } from "@/data/expertise-topic";

function TopicNav({ currentPath, homeHref, homeTitle, HomeIcon, topics, prevention = false }: {
  currentPath: string;
  homeHref: string;
  homeTitle: React.ReactNode;
  HomeIcon: LucideIcon;
  topics: ExpertiseTopic[];
  prevention?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    const active = container?.querySelector<HTMLElement>(".is-active");
    if (container && active) container.scrollTo({ left: active.offsetLeft - container.offsetLeft - 12 });
  }, [currentPath]);

  return (
    <nav className={prevention ? "security-topic-nav prevention-topic-nav" : "security-topic-nav"} aria-label={prevention ? "Thèmes de prévention" : "Thèmes de sécurité incendie"}>
      <div className="security-topic-nav-inner">
        <Link
          href={homeHref}
          className={currentPath === homeHref ? "is-active security-topic-home" : "security-topic-home"}
          aria-current={currentPath === homeHref ? "page" : undefined}
        >
          <HomeIcon size={27} strokeWidth={1.55} />
          <span>{homeTitle}</span>
        </Link>
        <div className="security-topic-scroll" ref={scrollRef}>
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                href={topic.href}
                key={topic.slug}
                className={currentPath === topic.href ? "security-topic-link is-active" : "security-topic-link"}
                aria-current={currentPath === topic.href ? "page" : undefined}
              >
                <Icon size={25} strokeWidth={1.45} aria-hidden="true" />
                <span>{topic.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function SecurityTopicNav({ currentPath }: { currentPath: string }) {
  return <TopicNav currentPath={currentPath} homeHref="/securite-incendie" homeTitle={<>Sécurité<br />incendie</>} HomeIcon={Flame} topics={securityTopics} />;
}

export function PreventionTopicNav({ currentPath }: { currentPath: string }) {
  return <TopicNav currentPath={currentPath} homeHref="/prevention" homeTitle="Prévention" HomeIcon={HeartPulse} topics={preventionTopics} prevention />;
}
