import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Engineer by background. Founder by ambition."
            />
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I started as a software engineer — four years deep in Swift
                and SwiftUI, shipping production iOS apps like Shadhin
                Music to thousands of daily users. That work taught me how
                to build things that hold up in the real world, not just in
                a simulator.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Over time, my role expanded from writing features to owning
                UI, architecture, and product decisions — on apps like
                Reserveit BD and an AI assistant product at Devastation 39.
                The question stopped being &ldquo;how do I build
                this&rdquo; and became &ldquo;how should this work.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                That shift is what led me to found Movexa — an AI-powered
                fitness coaching app I built end-to-end, from the first
                architectural decision to the App Store launch. Founding it
                meant learning the parts no one hands you: product
                strategy, positioning, and everything else that happens
                after the code works. I&apos;m still learning it by doing
                it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4 shrink-0" />
              <span>
                B.Sc. in Computer Science &amp; Engineering — University of
                Asia Pacific, Dhaka
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
