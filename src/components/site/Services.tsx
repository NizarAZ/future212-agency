import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={<>Automation designed around business outcomes.</>}
        intro="Six areas where intelligent systems consistently create operational advantage. Most engagements begin with one and extend across several."
      />

      <div id="solutions" className="mt-16 grid gap-px border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            delay={(i % 3) * 80}
            className="group relative bg-navy p-8 transition-colors duration-500 hover:bg-navy-soft lg:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
            />
            <p className="text-xs tracking-[0.2em] text-gold/70 uppercase">{service.detail}</p>
            <h3 className="mt-5 text-2xl leading-tight">{service.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/62">{service.outcome}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
