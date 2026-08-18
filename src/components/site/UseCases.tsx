import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, GitBranch, Inbox, LineChart, RefreshCw, Zap } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const stages = [
  { icon: Inbox, title: "Capture", body: "Work arrives from any channel — a form, an inbox, a DM, an upload." },
  { icon: BrainCircuit, title: "Understand", body: "AI reads it, extracts the details, and works out what's actually being asked." },
  { icon: GitBranch, title: "Decide", body: "Your business rules choose the path — including when a human should step in." },
  { icon: Zap, title: "Act", body: "The task gets done: a reply sent, a record created, a document generated." },
  { icon: RefreshCw, title: "Sync", body: "Every connected tool is updated, so nothing drifts out of date." },
  { icon: LineChart, title: "Report", body: "You get visibility — logs, metrics, and an alert only when you're needed." },
] as const;

export function UseCases() {
  const reduce = useReducedMotion();

  return (
    <Section id="anatomy" light className="border-y border-surface-foreground/10">
      <SectionHeading
        eyebrow="Under the hood"
        light
        title={<>Every system we build has the same spine.</>}
        intro="Different task, same anatomy. Once you see the shape, you start spotting it everywhere in your own operation."
      />

      <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-surface-foreground/12 bg-surface-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <motion.li
              key={stage.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-surface p-8 lg:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md border border-gold-deep/30 bg-gold-deep/10 text-gold-deep">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-3xl text-surface-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl text-surface-foreground">{stage.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-surface-foreground/65">
                {stage.body}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
