import Image from "next/image";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/utils";

type Project = {
  name: string;
  role: string;
  description: string;
  tech: string[];
  link: string | null;
  screenshot?: string;
  screenshotAlt?: string;
  // object-position value, tuned per screenshot so the crop lands on real
  // app content instead of empty status-bar space.
  screenshotPosition?: string;
};

const projects: Project[] = [
  {
    name: "Shadhin Music",
    role: "Senior iOS Developer",
    description:
      "Bangladesh's leading music streaming app, used by thousands of daily users. Built core streaming features and integrated MyGP and MyBL telco billing for seamless content access.",
    tech: ["Swift", "SwiftUI", "Telco SDK Integration"],
    link: "https://apps.apple.com/us/app/shadhin-music/id1481808365",
    screenshot: "/work/shadhin-music.png",
    screenshotAlt:
      "Shadhin Music app home screen with a featured exclusive podcast and personalized listening recommendations",
    screenshotPosition: "50% 22%",
  },
  {
    name: "AISocial",
    role: "iOS Developer (UI/UX)",
    description:
      "AI assistant and chat app powered by RESTful AI APIs. Built the SwiftUI interface end-to-end with a focus on responsive layout and smooth UX.",
    tech: ["SwiftUI", "REST APIs"],
    link: null,
    screenshot: "/work/aisocial.png",
    screenshotAlt:
      "Hey Buddy AI chat app home screen with character search",
    screenshotPosition: "50% 5%",
  },
  {
    name: "Reserveit BD",
    role: "Lead UI Designer & iOS Developer",
    description:
      "Booking and reservation app for local venues and services. Led UI design and built the app's custom views and layouts.",
    tech: ["SwiftUI", "UIKit"],
    link: null,
    screenshot: "/work/reserveit-bd.png",
    screenshotAlt:
      "Reserveit BD app showing restaurant and beauty salon booking categories",
    screenshotPosition: "50% 20%",
  },
  {
    name: "Deen & Noor",
    role: "Contributor — Feature Development & UI",
    description:
      "Islamic lifestyle apps within the Shadhin ecosystem — Quran, Hadith collections, and prayer times. Contributed feature development and UI across both apps.",
    tech: ["SwiftUI", "UIKit"],
    link: null,
    screenshot: "/work/noor.png",
    screenshotAlt: "Noor app showing daily prayer times in Dhaka",
    screenshotPosition: "50% 55%",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Product case studies, not a project list."
          className="max-w-2xl"
        />

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-border lg:grid-cols-2">
            <div className="relative order-2 aspect-square bg-muted lg:order-1 lg:aspect-auto">
              <Image
                src={withBasePath("/movexa/hero.jpg")}
                alt="Movexa home dashboard — Your AI Fitness Coach"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="order-1 flex flex-col justify-center gap-5 p-8 sm:p-12 lg:order-2">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Featured Case Study
              </span>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Movexa
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                AI-powered fitness and nutrition coaching app — personalized
                workouts, real-time guidance, and Apple Health integration.
                Founded and built end-to-end, from architecture to App
                Store launch.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Founder &amp; iOS Developer</Badge>
                <Badge>SwiftUI</Badge>
                <Badge>HealthKit</Badge>
                <Badge>AI Integration</Badge>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-5">
                <a
                  href="#movexa"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
                >
                  View full case study <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="https://apps.apple.com/fr/app/movexa/id6786145132?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  App Store <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <Card className="flex h-full flex-col gap-5">
                <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted">
                  {project.screenshot ? (
                    <Image
                      src={withBasePath(project.screenshot)}
                      alt={project.screenshotAlt ?? `${project.name} screenshot`}
                      fill
                      sizes="(min-width: 640px) 380px, 90vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: project.screenshotPosition ?? "50% 50%",
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center gap-2 border border-dashed border-border text-muted-foreground">
                      <ImageOff className="size-4" />
                      <span className="text-xs">Screenshot not available</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on the App Store`}
                        className="mt-0.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {project.role}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
