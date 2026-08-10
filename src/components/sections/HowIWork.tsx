"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code2, Rocket, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We start with a conversation about your business, your users, and what success looks like — before any code gets written.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "I turn that into a clear plan: scope, technical architecture, milestones, and the right technology choices — agreed on before development starts.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    description:
      "I build in focused iterations using modern iOS technologies, with regular check-ins so you always know where the project stands.",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "Every build goes through QA and TestFlight before it reaches the App Store. I handle submission and review end-to-end.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Support",
    description:
      "Launch isn't the finish line — I stay involved for post-launch improvements, maintenance, and new features as your product grows.",
  },
];

export function HowIWork() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How I Work"
          title="No surprises — just a clear plan and steady progress."
          description="Five steps, from our first conversation to long after launch."
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
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                    <step.icon className="size-4 text-accent" />
                  </div>
                  <div className="pt-1.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Step 0{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.description}
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
