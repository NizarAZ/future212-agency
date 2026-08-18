import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Process() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const fill = q("[data-progress]");
      const nodes = q("[data-node]");

      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(nodes, { opacity: 0.4 });

      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set(fill, { scaleX: 1 });
        gsap.set(nodes, { opacity: 1 });
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top 72%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      });

      tl.to(fill, { scaleX: 1, ease: "none", duration: 1 }, 0);
      const denom = Math.max(nodes.length - 1, 1);
      nodes.forEach((node, i) => {
        tl.to(node, { opacity: 1, duration: 0.05 }, i / denom);
      });
    },
    { scope },
  );

  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How it works"
        title={<>A deliberate path from bottleneck to system.</>}
        intro="Four stages, each with a clear deliverable. You always know what is being built and why."
      />

      <div ref={scope} className="mt-16">
        {/* Scroll-linked progress rail (desktop) */}
        <div className="relative mb-10 hidden md:block" aria-hidden="true">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-hairline" />
          <div
            data-progress
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[var(--gradient-gold)]"
          />
          <div className="relative flex justify-between">
            {processSteps.map((step) => (
              <span
                key={step.step}
                data-node
                className="grid size-11 place-items-center rounded-full border border-gold/40 bg-navy-deep font-display text-lg text-gold-gradient"
              >
                {step.step}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-px border-t border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 90} className="bg-navy-deep p-8 lg:p-9">
              <div className="flex items-baseline gap-3 md:hidden">
                <span className="font-display text-4xl text-gold-gradient">{step.step}</span>
                <span aria-hidden="true" className="h-px flex-1 rule-gold opacity-40" />
              </div>
              <h3 className="mt-6 text-2xl md:mt-0">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
