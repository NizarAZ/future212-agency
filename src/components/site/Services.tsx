import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  DatabaseZap,
  Headset,
  Megaphone,
  ReceiptText,
  UserPlus,
  Workflow,
} from "lucide-react";
import { services } from "@/data/site";
import { Section, SectionHeading } from "./Section";
import { cn } from "@/lib/utils";

const iconMap = { Headset, UserPlus, ReceiptText, Megaphone, DatabaseZap, Workflow } as const;

export function Services() {
  const [activeId, setActiveId] = useState(services[0]!.id);
  const reduce = useReducedMotion();
  const active = services.find((s) => s.id === activeId) ?? services[0]!;
  const ActiveIcon = iconMap[active.icon];

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we automate"
        title={<>The work you hire people to avoid.</>}
        intro="Six kinds of repetitive work we turn into systems that run themselves. Select one to see exactly what changes."
      />

      <div
        id="solutions"
        className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10"
      >
        {/* Selector list */}
        <div className="flex flex-col gap-2">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                aria-pressed={isActive}
                className={cn(
                  "group relative flex items-center gap-4 rounded-md border px-4 py-4 text-left transition-colors",
                  isActive
                    ? "border-gold/40"
                    : "border-hairline hover:border-gold/25",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="svc-active"
                    aria-hidden="true"
                    className="absolute inset-0 -z-0 rounded-md bg-gold/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 grid size-10 shrink-0 place-items-center rounded-md border transition-colors",
                    isActive
                      ? "border-gold/40 bg-gold/15 text-gold"
                      : "border-hairline text-foreground/50 group-hover:text-foreground/80",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <span className="relative z-10 min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-base font-medium transition-colors",
                      isActive ? "text-foreground" : "text-foreground/80",
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="block truncate text-xs tracking-[0.14em] text-foreground/40 uppercase">
                    {s.tag}
                  </span>
                </span>
                <ArrowRight
                  className={cn(
                    "relative z-10 size-4 shrink-0 transition-all",
                    isActive
                      ? "text-gold opacity-100"
                      : "text-foreground/30 opacity-0 group-hover:opacity-100",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Mirrored detail */}
        <div className="panel relative min-h-[24rem] overflow-hidden rounded-lg p-6 lg:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-gold/8 blur-[90px]"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-md border border-gold/40 bg-gold/15 text-gold">
                  <ActiveIcon className="size-5" />
                </span>
                <h3 className="text-2xl leading-tight">{active.title}</h3>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-hairline bg-navy-deep/40 p-4">
                  <p className="text-[0.7rem] tracking-[0.16em] text-foreground/40 uppercase">
                    Today
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                    {active.before}
                  </p>
                </div>
                <div className="rounded-md border border-gold/25 bg-gold/[0.06] p-4">
                  <p className="text-[0.7rem] tracking-[0.16em] text-gold/80 uppercase">
                    With Future212
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {active.after}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {active.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.3 }}
                    className="flex items-start gap-3 text-sm text-foreground/75"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <a
                href="#consultation"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                Automate {active.title.toLowerCase()}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
