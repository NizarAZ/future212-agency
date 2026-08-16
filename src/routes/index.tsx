import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { UseCases } from "@/components/site/UseCases";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { Technology } from "@/components/site/Technology";
import { Faq } from "@/components/site/Faq";
import { Consultation } from "@/components/site/Consultation";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const description =
  "Future212 designs and builds automation and AI systems around your actual processes — lead handling, customer support, operations and data flow — engineered for reliability and measurable outcomes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future212 — Automation & AI systems, engineered for reliability" },
      { name: "description", content: description },
      { property: "og:title", content: "Future212 — Automation & AI systems, engineered for reliability" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Future212 — Automation & AI systems, engineered for reliability" },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <UseCases />
        <Process />
        <Why />
        <Technology />
        <Faq />
        <Consultation />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
