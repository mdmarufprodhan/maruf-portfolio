"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  {
    icon: Code2,
    title: "iOS Developer",
    description:
      "Four years writing the code — learning what it actually takes to ship software people rely on every day.",
  },
  {
    icon: Layers,
    title: "Product Builder",
    description:
      "Moved from implementing features to owning the decisions above them: UI, architecture, and how a product should work.",
  },
  {
    icon: Rocket,
    title: "Founder of Movexa",
    description:
      "Took full ownership — of the product, the risk, and the outcome. Not just building the thing, but deciding what it should be.",
  },
];

export function FounderJourney() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Founder Journey"
          title="Evolution, not job titles."
          className="max-w-2xl"
        />

        <div className="relative mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-5 w-px bg-border"
          />
          <motion.div
            aria-hidden
            className="absolute top-2 left-5 w-px origin-top bg-accent"
            style={{ height: "calc(100% - 1rem)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="flex flex-col gap-14">
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.12}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                    <stage.icon className="size-4 text-accent" />
                  </div>
                  <div className="pt-1.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Stage 0{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
