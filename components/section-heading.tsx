import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`section-heading ${light ? "section-heading--light" : ""} ${align === "center" ? "section-heading--center" : ""}`}>
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </Reveal>
  );
}
