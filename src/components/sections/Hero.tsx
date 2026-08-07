import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const noiseBackground = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
};

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/25" />
        <div
          style={noiseBackground}
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        />
      </div>

      <Container className="flex min-h-svh flex-col justify-center gap-10 py-24">
        <div className="flex flex-col gap-4">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Md Maruf Prodhan
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Founder &amp; Product Builder
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge>Founder of Movexa · iOS Developer</Badge>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            I build AI-powered products that turn complex problems into
            simple, useful experiences.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#movexa" size="lg">
              Explore Movexa <ArrowUpRight className="size-4" />
            </Button>
            <Button href="#work" size="lg" variant="secondary">
              View My Work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
