import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  light = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32",
        light && "bg-surface text-surface-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            light ? "text-surface-foreground/70" : "text-foreground/65",
          )}
        >
          {intro}
        </p>
      )}
      <div className={cn("mt-8 h-px w-24 rule-gold", align === "center" && "mx-auto")} />
    </Reveal>
  );
}
