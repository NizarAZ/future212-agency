import { useCases } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function UseCases() {
  return (
    <Section id="use-cases" light className="border-y border-surface-foreground/10">
      <SectionHeading
        eyebrow="What we automate"
        light
        title={<>Systems that run end to end.</>}
        intro="Representative workflows we build. Each is adapted to the tools, rules and language of the business it serves."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {useCases.map((useCase, i) => (
          <Reveal
            key={useCase.title}
            delay={(i % 2) * 90}
            className="border border-surface-foreground/12 bg-surface-foreground/[0.03] p-8 lg:p-10"
          >
            <h3 className="text-2xl text-surface-foreground">{useCase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/65">
              {useCase.summary}
            </p>

            <ol className="mt-8 space-y-0">
              {useCase.steps.map((step, index) => (
                <li key={step} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <span className="relative flex flex-col items-center">
                    <span className="mt-1.5 size-2.5 rotate-45 border border-gold-deep bg-gold-deep/25" />
                    {index < useCase.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-5 h-full w-px bg-surface-foreground/15"
                      />
                    )}
                  </span>
                  <span className="text-sm font-medium text-surface-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
