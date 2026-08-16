import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SystemDiagram } from "./SystemDiagram";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-10 lg:pt-44 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">AI Automation Studio · future212.pro</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-balance text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Turn repetitive business work into{" "}
              <span className="text-gold-gradient">intelligent systems</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/70">
              Future212 designs and deploys AI-powered automation tailored to how your business
              actually operates — connecting your tools, removing manual steps, and giving your team
              a system that executes reliably every day.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-4 text-sm font-semibold text-foreground/85 transition-colors hover:border-gold/50 hover:text-gold"
              >
                Explore Our Solutions
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-12 text-xs tracking-[0.24em] text-foreground/45 uppercase">
              AI <span className="text-gold/70">•</span> Automation{" "}
              <span className="text-gold/70">•</span> Integrations{" "}
              <span className="text-gold/70">•</span> Intelligent Workflows
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="panel p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between text-xs tracking-[0.2em] text-foreground/45 uppercase">
              <span>System overview</span>
              <span className="text-gold/80">Live logic</span>
            </div>
            <SystemDiagram />
            <p className="mt-6 border-t border-hairline pt-5 text-sm leading-relaxed text-foreground/60">
              One coordinated layer between the channels where work arrives and the tools where work
              gets done.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
