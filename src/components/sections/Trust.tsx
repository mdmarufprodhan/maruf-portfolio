import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "4+", label: "Years of production iOS development" },
  { value: "6", label: "Apps shipped to the App Store" },
  { value: "2", label: "Live, verifiable App Store listings" },
];

const workedWith = [
  { name: "Shadhin Music Ltd", location: "Dhaka, Bangladesh" },
  { name: "Devastation 39", location: "Remote, USA" },
  { name: "Reserveit BD", location: "Dhaka, Bangladesh" },
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trust &amp; Credibility"
          title="Proof over promises."
          description="Everything below is real and checkable — not marketing copy."
          className="max-w-2xl"
        />

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-10">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Worked With
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {workedWith.map((org) => (
                <div key={org.name} className="flex flex-col">
                  <span className="text-base font-medium">{org.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {org.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center sm:p-10">
            <Quote className="size-5 text-muted-foreground" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Client testimonials will appear here as projects are
              completed. In the meantime, every case study above is backed
              by a real, verifiable App Store listing.
            </p>
            <a
              href="#work"
              className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
            >
              See verified case studies →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
