import { Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { AutomationConsole, ConsoleCta } from "./AutomationConsole";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">AI Automation Studio · future212.pro</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-balance text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Your repetitive work,{" "}
              <span className="text-gold-gradient">running itself</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/70">
              Future212 builds AI automation that captures leads, answers support, chases invoices
              and posts for you — inside the tools you already use. Pick a task below and watch a
              real one run, end to end.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ConsoleCta />
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-4 text-sm font-semibold text-foreground/85 transition-colors hover:border-gold/50 hover:text-gold"
              >
                See what we automate
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-hairline bg-navy-soft/30 px-4 py-2">
              <Globe className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-sm text-foreground/70">
                Trusted by <span className="font-semibold text-gold">20+</span> businesses across
                Morocco &amp; worldwide
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14 lg:mt-16">
          <AutomationConsole />
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-10 text-xs tracking-[0.24em] text-foreground/45 uppercase">
            AI <span className="text-gold/70">•</span> Automation{" "}
            <span className="text-gold/70">•</span> Integrations{" "}
            <span className="text-gold/70">•</span> Intelligent Workflows
          </p>
        </Reveal>
      </div>
    </section>
  );
}
