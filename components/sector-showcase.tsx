"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { Building2, BriefcaseBusiness, Store, Building, Warehouse, Factory, GraduationCap, Hotel, Utensils, Landmark, Pause, Play } from "lucide-react";
import { sectors } from "@/data/site";

const icons = [Landmark, BriefcaseBusiness, Store, Building, Warehouse, Factory, GraduationCap, Hotel, Utensils, Building2];

export function SectorShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.15 });
  const [paused, setPaused] = useState(false);
  return (
    <div ref={ref} className={`sector-showcase ${visible && !paused ? "is-running" : ""}`}>
      <div className="sector-window" aria-label="Les bâtiments que nous accompagnons">
        {[0, 1].map((column) => (
          <div className="sector-rail" key={column}>
            {[0, 1].map((copy) => (
              <div className="sector-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {sectors.map((sector, index) => {
                  if (index % 2 !== column) return null;
                  const Icon = icons[index];
                  return <div className="sector-tile" key={sector}><Icon size={34} strokeWidth={1.3} aria-hidden="true" /><span>{sector}</span><small>{String(index + 1).padStart(2, "0")}</small></div>;
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sector-caption"><span>Des lieux différents. Un même engagement.</span><button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Relancer le défilement des bâtiments" : "Mettre le défilement des bâtiments en pause"} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button></div>
    </div>
  );
}
