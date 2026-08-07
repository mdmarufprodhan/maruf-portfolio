import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "background", className: "bg-background border border-border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "muted", className: "bg-muted" },
  { name: "border", className: "bg-border" },
  { name: "accent", className: "bg-accent" },
  { name: "card", className: "bg-card border border-border" },
];

const typeScale = [
  { label: "text-xs", sample: "Eyebrow / label" },
  { label: "text-sm", sample: "Supporting text" },
  { label: "text-base", sample: "Body copy" },
  { label: "text-lg", sample: "Lead paragraph" },
  { label: "text-2xl", sample: "Subheading" },
  { label: "text-4xl", sample: "Section title" },
  { label: "text-6xl", sample: "Hero headline" },
];

export default function StyleGuidePage() {
  return (
    <main className="py-24">
      <Container className="flex flex-col gap-24">
        <div>
          <Badge>Internal · Design System</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Visual design system
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Shared tokens and primitives for the portfolio. Not a public
            route — reference only.
          </p>
        </div>

        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Color" title="Semantic tokens" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-lg ${s.className}`} />
                <span className="font-mono text-xs text-muted-foreground">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Typography" title="Type scale" />
          <div className="flex flex-col gap-4">
            {typeScale.map((t) => (
              <div
                key={t.label}
                className="flex items-baseline gap-6 border-b border-border pb-4"
              >
                <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                  {t.label}
                </span>
                <span className={`${t.label} font-medium tracking-tight`}>
                  {t.sample}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Actions" title="Buttons" />
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">
              Get in touch <ArrowUpRight className="size-4" />
            </Button>
            <Button variant="secondary">View work</Button>
            <Button variant="ghost">Learn more</Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Labels" title="Badges" />
          <div className="flex flex-wrap gap-3">
            <Badge>
              <Sparkles className="size-3" /> Founder of Movexa
            </Badge>
            <Badge>iOS Developer</Badge>
            <Badge>Available for select work</Badge>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Surfaces"
            title="Cards"
            description="Hairline border, restrained radius, no heavy shadow."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="text-sm font-semibold">Product</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Founding and building Movexa end to end.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold">Engineering</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Native iOS development and system design.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold">Partnership</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to select investors and collaborators.
              </p>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Motion" title="Scroll reveal" />
          <div className="flex flex-col gap-4">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Card>
                  <p className="text-sm text-muted-foreground">
                    Reveal item {i + 1} — fades and lifts 12px on scroll into
                    view, once.
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
