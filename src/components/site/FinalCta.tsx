import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/integrations";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 px-6 py-24 lg:px-10 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gold/6 blur-[120px]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">The next step</p>
        <h2 className="mt-6 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
          Every business has one process that should already be{" "}
          <span className="text-gold-gradient">running by itself</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/65">
          Let&rsquo;s find yours. In one conversation we identify the highest-impact automation in
          your operation and what it takes to build it properly.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#consultation"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            Book a Free Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 text-sm font-semibold text-foreground/85 transition-colors hover:border-gold/50 hover:text-gold"
          >
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
