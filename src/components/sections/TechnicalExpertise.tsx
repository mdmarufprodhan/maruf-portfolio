import { BarChart3, Blocks, Cloud, Smartphone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const categories = [
  {
    icon: Smartphone,
    title: "iOS",
    skills: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "Core Data",
      "AVFoundation",
      "StoreKit",
      "Push Notifications",
    ],
  },
  {
    icon: Blocks,
    title: "Architecture",
    skills: [
      "MVVM",
      "MVC",
      "MVVM-C",
      "Coordinator Pattern",
      "Clean Architecture",
      "Dependency Injection",
      "REST APIs",
    ],
  },
  {
    icon: Cloud,
    title: "Services",
    skills: [
      "Firebase",
      "API Integration",
      "Authentication",
      "Cloud Services",
    ],
  },
  {
    icon: BarChart3,
    title: "Product",
    skills: [
      "App Store Deployment",
      "Subscriptions",
      "Monetization",
      "ASO",
      "Analytics",
    ],
  },
  {
    icon: Sparkles,
    title: "AI",
    skills: [
      "AI API Integration",
      "AI-Powered Product Experiences",
      "AI Fitness/Nutrition Features",
    ],
  },
];

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Expertise"
          title="What I actually build with."
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.05}>
              <Card className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <category.icon className="size-4 text-accent" />
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
