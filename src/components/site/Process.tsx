import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How it works"
        title={<>A deliberate path from bottleneck to system.</>}
        intro="Four stages, each with a clear deliverable. You always know what is being built and why."
      />

      <div className="mt-16 grid gap-px border-t border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.step} delay={i * 90} className="bg-navy-deep p-8 lg:p-9">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-gold-gradient">{step.step}</span>
              <span aria-hidden="true" className="h-px flex-1 rule-gold opacity-40" />
            </div>
            <h3 className="mt-6 text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
