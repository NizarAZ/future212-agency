import { painPoints } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Problems() {
  return (
    <Section id="friction" className="border-y border-hairline">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Operational friction"
          title={<>The problem is rarely effort. It is the process.</>}
          intro="Most teams are already working hard. What slows a business down is the work that sits between the work — the manual steps, the handovers, the tools that do not talk to each other."
        />

        <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 60} className="bg-navy p-7">
              <span className="text-xs font-semibold text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl">{point.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/60">{point.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
