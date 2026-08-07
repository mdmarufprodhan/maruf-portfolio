import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const areas = [
  "AI",
  "Consumer Apps",
  "Health & Fitness Technology",
  "Product Growth",
  "Entrepreneurship",
  "Scalable Digital Products",
];

export function CurrentFocus() {
  return (
    <section id="focus" className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Currently Building
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              What I&apos;m building now
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-2xl font-medium tracking-tight sm:text-3xl">
              Movexa
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Right now, my full focus is on building, improving, and
              growing Movexa as an AI-powered fitness and nutrition
              product — refining the AI coaching experience, the food
              scanner, and the product as a whole.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Also thinking about
            </span>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Badge key={area}>{area}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
