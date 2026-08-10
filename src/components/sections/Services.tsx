import {
  ArrowRight,
  Plug,
  Rocket,
  Smartphone,
  Sparkles,
  Upload,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: Smartphone,
    title: "Custom iOS App Development",
    description:
      "Native iOS apps built the right way — clean architecture that's easy to maintain and ready to scale.",
    tags: ["Swift", "SwiftUI", "UIKit"],
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Go from idea to real users, fast. I scope, build, and ship a focused MVP you can test and grow.",
    tags: ["Idea to MVP", "TestFlight", "App Store Launch"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered iOS Apps",
    description:
      "AI that earns its place in the product — assistants, personalization, and automation that make the app genuinely better.",
    tags: ["AI APIs", "AI Assistants", "AI Workflows"],
  },
  {
    icon: Plug,
    title: "API & Backend Integration",
    description:
      "Your app connected to everything it needs — reliable data, secure auth, and payments that just work.",
    tags: [
      "REST APIs",
      "Firebase",
      "Authentication",
      "Payments",
      "Push Notifications",
    ],
  },
  {
    icon: Upload,
    title: "App Store Launch & Maintenance",
    description:
      "From submission to long-term upkeep — I handle App Store review and keep everything running smoothly.",
    tags: ["App Store Submission", "Updates", "Bug Fixes", "Optimization"],
  },
  {
    icon: Wrench,
    title: "Existing App Improvement",
    description:
      "Already have an app? I modernize the UI, migrate UIKit to SwiftUI, and ship the features you've been putting off.",
    tags: ["SwiftUI Migration", "Performance", "New Features"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="From idea to App Store — and beyond."
          description="Whether you're starting from scratch or improving what you already have."
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <Card className="flex h-full flex-col gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <service.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-5 border-t border-border pt-16 text-center">
            <p className="text-xl font-medium tracking-tight text-balance sm:text-2xl">
              Have an app idea? Let&apos;s talk.
            </p>
            <Button href="#contact" size="lg">
              Let&apos;s Build Your App <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
