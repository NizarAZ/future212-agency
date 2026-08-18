import { outcomes, whyPoints } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Why() {
  return (
    <Section id="why" className="border-y border-hairline">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Why Future212"
            title={<>An implementation partner, not a tool vendor.</>}
            intro="We are accountable for whether the system works in production, not for how many workflows we shipped."
          />

          <Reveal delay={120} className="mt-12 panel p-8">
            <p className="eyebrow">Outcomes we design for</p>
            <ul className="mt-6 space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-3 text-base text-foreground/80">
                  <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="space-y-px bg-hairline">
          {whyPoints.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 70} className="bg-navy-deep py-7">
              <h3 className="text-xl">{point.title}</h3>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-foreground/60">
                {point.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
