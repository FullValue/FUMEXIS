"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

export function ReviewCarousel() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * 410, behavior: "smooth" });

  return (
    <div className="reviews-module">
      <div className="reviews-meta">
        <div><strong>{siteConfig.googleRating}</strong><span>Note Google à connecter</span></div>
        <div><strong>{siteConfig.googleReviewsCount}</strong><span>Avis à connecter</span></div>
        <div className="review-controls">
          <button onClick={() => move(-1)} aria-label="Avis précédent"><ArrowLeft /></button>
          <button onClick={() => move(1)} aria-label="Avis suivant"><ArrowRight /></button>
        </div>
      </div>
      <div className="reviews-rail" ref={rail}>
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-card-top">
              <div className="review-stars" aria-label={`${review.rating} étoiles`}>
                {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
              <span className="demo-badge">DÉMO</span>
            </div>
            <p>“{review.text}”</p>
            <div className="review-author">
              <span className="review-avatar">{review.initials}</span>
              <div><strong>{review.name}</strong><small>{review.date}</small></div>
              <span className="google-g">G</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
