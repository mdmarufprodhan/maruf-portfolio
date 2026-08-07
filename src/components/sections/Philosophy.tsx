import { ArrowRight, RotateCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  "Build real products",
  "Talk to users",
  "Measure what matters",
  "Iterate quickly",
  "Solve real problems",
  "Learn from failures",
  "Keep improving",
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Philosophy
          </span>
        </Reveal>

        <h2 className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-3 sm:gap-x-4">
          <Reveal delay={0.04}>
            <span className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Build.
            </span>
          </Reveal>
          <ArrowRight
            aria-hidden
            className="mb-1 size-6 shrink-0 text-muted-foreground sm:size-8"
          />
          <Reveal delay={0.1}>
            <span className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Ship.
            </span>
          </Reveal>
          <ArrowRight
            aria-hidden
            className="mb-1 size-6 shrink-0 text-muted-foreground sm:size-8"
          />
          <Reveal delay={0.16}>
            <span className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Learn.
            </span>
          </Reveal>
          <ArrowRight
            aria-hidden
            className="mb-1 size-6 shrink-0 text-muted-foreground sm:size-8"
          />
          <Reveal delay={0.22}>
            <span className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl lg:text-6xl">
              Repeat.
            </span>
          </Reveal>
          <RotateCw
            aria-hidden
            className="mb-1 size-6 shrink-0 text-accent sm:size-7"
          />
        </h2>

        <div className="mt-16 max-w-2xl border-t border-border">
          {principles.map((principle, i) => (
            <Reveal key={principle} delay={i * 0.04}>
              <div className="flex items-center gap-6 border-b border-border py-5">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="text-base font-medium sm:text-lg">
                  {principle}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
