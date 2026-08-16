import { techGroups } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Technology() {
  return (
    <Section id="technology">
      <SectionHeading
        eyebrow="Technology & integrations"
        title={<>Engineered on dependable, well-supported foundations.</>}
        intro="We build primarily on n8n for orchestration, combined with AI models, APIs and the platforms your business already runs on. Tools are selected for reliability and longevity, never for novelty."
      />

      <div className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
        {techGroups.map((group, i) => (
          <Reveal key={group.group} delay={i * 70} className="bg-navy p-7">
            <h3 className="text-xs tracking-[0.2em] text-gold uppercase">{group.group}</h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground/70">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-6 text-xs leading-relaxed text-foreground/40">
          Product and platform names are referenced to describe technical capability. They do not
          imply partnership, endorsement or affiliation.
        </p>
      </Reveal>
    </Section>
  );
}
