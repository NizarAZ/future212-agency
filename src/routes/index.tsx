import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { UseCases } from "@/components/site/UseCases";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { Faq } from "@/components/site/Faq";
import { Consultation } from "@/components/site/Consultation";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const description =
  "Future212 builds AI automation that runs your repetitive work for you — customer support, lead generation, invoicing, social media, data entry and complex workflows — inside the tools you already use. Watch a real task run, then book a free consultation.";

const title = "Future212 — Watch your repetitive work run itself";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
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
        <Faq />
        <Consultation />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
