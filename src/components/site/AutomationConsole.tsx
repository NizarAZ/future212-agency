import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Check,
  Clock,
  Headset,
  Megaphone,
  ReceiptText,
  RotateCcw,
  UserPlus,
} from "lucide-react";
import { scenarios } from "@/data/site";
import { cn } from "@/lib/utils";

const iconMap = { UserPlus, Headset, ReceiptText, Megaphone } as const;

export function AutomationConsole({ className }: { className?: string }) {
  const [activeId, setActiveId] = useState(scenarios[0]!.id);
  const [runKey, setRunKey] = useState(0);
  const [status, setStatus] = useState<"running" | "done">("running");
  const scope = useRef<HTMLDivElement>(null);

  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0]!;

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const fills = q("[data-fill]");
      const dots = q("[data-dot]");
      const checks = q("[data-check]");
      const rows = q("[data-row]");
      const output = q("[data-output]");
      const outFields = q("[data-outfield]");
      const badge = q("[data-timesaved]");

      // Initial (pre-run) state — set here so SSR/no-JS renders the full result.
      gsap.set(fills, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(checks, { autoAlpha: 0, scale: 0.4 });
      gsap.set(dots, { opacity: 0.25, scale: 0.7 });
      gsap.set(rows, { opacity: 0.45 });
      gsap.set(output, { autoAlpha: 0, y: 24 });
      gsap.set(outFields, { autoAlpha: 0, y: 10 });
      gsap.set(badge, { autoAlpha: 0, scale: 0.9 });

      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set(fills, { scaleX: 1 });
        gsap.set(checks, { autoAlpha: 1, scale: 1 });
        gsap.set(dots, { opacity: 1, scale: 1 });
        gsap.set(rows, { opacity: 1 });
        gsap.set(output, { autoAlpha: 1, y: 0 });
        gsap.set(outFields, { autoAlpha: 1, y: 0 });
        gsap.set(badge, { autoAlpha: 1, scale: 1 });
        setStatus("done");
        return;
      }

      setStatus("running");
      const tl = gsap.timeline({ onComplete: () => setStatus("done") });

      active.steps.forEach((step, i) => {
        const dur = Math.min(Math.max(step.ms / 1400, 0.3), 0.85);
        tl.to(rows[i]!, { opacity: 1, duration: 0.2 }, i === 0 ? 0.15 : "<0.05")
          .to(dots[i]!, { opacity: 1, scale: 1, duration: 0.2 }, "<")
          .to(fills[i]!, { scaleX: 1, duration: dur, ease: "power1.inOut" }, "<")
          .to(
            checks[i]!,
            { autoAlpha: 1, scale: 1, duration: 0.22, ease: "back.out(2)" },
            ">-0.05",
          );
      });

      tl.to(output, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "+=0.12")
        .to(outFields, { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.06 }, "<0.1")
        .to(badge, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }, "<0.05");
    },
    { dependencies: [activeId, runKey], scope },
  );

  return (
    <div ref={scope} className={cn("panel overflow-hidden rounded-lg", className)}>
      {/* Console title bar */}
      <div className="flex items-center gap-3 border-b border-hairline bg-navy-deep/60 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-gold/50" />
        </div>
        <p className="ml-1 text-xs tracking-[0.18em] text-foreground/45 uppercase">
          Automation console
        </p>
        <span
          className={cn(
            "ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
            status === "running"
              ? "bg-gold/10 text-gold"
              : "bg-foreground/5 text-foreground/60",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              status === "running" ? "animate-pulse bg-gold" : "bg-foreground/40",
            )}
          />
          {status === "running" ? "Running" : "Done"}
        </span>
      </div>

      {/* Scenario picker */}
      <div className="flex flex-wrap gap-2 border-b border-hairline px-4 py-3 sm:px-5">
        {scenarios.map((s) => {
          const Icon = iconMap[s.icon];
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setActiveId(s.id);
                setRunKey((k) => k + 1);
              }}
              aria-pressed={isActive}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "border-gold/50 bg-gold/12 text-gold"
                  : "border-border text-foreground/60 hover:border-gold/30 hover:text-foreground/90",
              )}
            >
              <Icon className="size-3.5" />
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-2">
        {/* Left: input + pipeline */}
        <div className="min-w-0">
          {/* Raw input */}
          <div className="rounded-md border border-hairline bg-navy-deep/40 p-4">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[0.7rem] tracking-[0.16em] text-foreground/40 uppercase">
                Incoming · {active.channel}
              </span>
            </div>
            <p className="text-xs font-medium text-foreground/70">{active.input.from}</p>
            {active.input.subject && (
              <p className="mt-1 text-sm text-foreground/85">{active.input.subject}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-foreground/55">
              “{active.input.body}”
            </p>
          </div>

          {/* Pipeline */}
          <ul className="mt-4 space-y-2.5">
            {active.steps.map((step, i) => (
              <li
                key={`${active.id}-${step.label}`}
                data-row
                className="flex items-center gap-3"
              >
                <span
                  data-dot
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-gold shadow-[0_0_10px_var(--gold)]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm text-foreground/80">{step.label}</span>
                    <span className="shrink-0 rounded border border-hairline px-1.5 py-0.5 text-[0.65rem] tracking-wide text-foreground/45">
                      {step.tool}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-foreground/8">
                    <span
                      data-fill
                      className="block h-full w-full rounded-full bg-[var(--gradient-gold)]"
                    />
                  </div>
                </div>
                <Check data-check className="size-4 shrink-0 text-gold" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        {/* Right: structured output */}
        <div className="min-w-0">
          <div
            data-output
            className="flex h-full flex-col rounded-md border border-gold/25 bg-navy-deep/40 p-4"
          >
            <div className="flex items-center gap-2 border-b border-hairline pb-3">
              <Check className="size-4 text-gold" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground/90">{active.output.title}</p>
            </div>
            <dl className="mt-3 space-y-2.5">
              {active.output.fields.map((f) => (
                <div
                  key={f.k}
                  data-outfield
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
                >
                  <dt className="shrink-0 text-[0.7rem] tracking-[0.14em] text-foreground/40 uppercase sm:w-28">
                    {f.k}
                  </dt>
                  <dd className="text-sm text-foreground/80">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 border-t border-hairline pt-3 text-xs leading-relaxed text-foreground/50">
              {active.output.note}
            </p>
            <div className="mt-auto pt-4">
              <span
                data-timesaved
                className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold"
              >
                <Clock className="size-3.5" />
                {active.timeSaved}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-3 border-t border-hairline px-4 py-3 sm:px-5">
        <p className="text-xs text-foreground/40">
          Pick a task above — watch it run end to end.
        </p>
        <button
          type="button"
          onClick={() => setRunKey((k) => k + 1)}
          className="group inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-gold/40 hover:text-gold"
        >
          <RotateCcw className="size-3.5 transition-transform group-hover:-rotate-45" />
          Run again
        </button>
      </div>
    </div>
  );
}

/** Small shared CTA used by the hero + elsewhere. */
export function ConsoleCta({ className }: { className?: string }) {
  return (
    <a
      href="#consultation"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      Show me one task I could automate
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
