import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Faq() {
  return (
    <Section id="faq" className="border-y border-hairline">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions we are usually asked first.</>}
        />

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-hairline">
                <AccordionTrigger className="py-6 text-left text-lg font-normal hover:no-underline data-[state=open]:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-base leading-relaxed text-foreground/65">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
