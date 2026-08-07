import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px] dark:bg-accent/20" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something meaningful."
              description="I'm open to conversations around startups, product partnerships, technology, AI products and new opportunities."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="mailto:maruf.md.prodhan@gmail.com" size="lg">
                <Mail className="size-4" /> Email Me
              </Button>
              <Button
                href="https://www.linkedin.com/in/md-maruf-prodhan-187948b8"
                external
                size="lg"
                variant="secondary"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </Button>
              <Button
                href="https://github.com/mdmarufprodhan"
                external
                size="lg"
                variant="secondary"
              >
                GitHub <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
