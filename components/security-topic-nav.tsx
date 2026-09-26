"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";
import { securityTopics } from "@/data/security-topics";

export function SecurityTopicNav({ currentPath }: { currentPath: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    const active = container?.querySelector<HTMLElement>(".is-active");
    if (container && active) container.scrollTo({ left: active.offsetLeft - container.offsetLeft - 12 });
  }, [currentPath]);

  return (
    <nav className="security-topic-nav" aria-label="Thèmes de sécurité incendie">
      <div className="security-topic-nav-inner">
        <Link
          href="/securite-incendie"
          className={currentPath === "/securite-incendie" ? "is-active security-topic-home" : "security-topic-home"}
          aria-current={currentPath === "/securite-incendie" ? "page" : undefined}
        >
          <Flame size={27} strokeWidth={1.55} />
          <span>Sécurité<br />incendie</span>
        </Link>
        <div className="security-topic-scroll" ref={scrollRef}>
          {securityTopics.map((topic) => {
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
