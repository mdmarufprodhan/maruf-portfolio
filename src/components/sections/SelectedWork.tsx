import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/utils";

type CaseStudy = {
  name: string;
  productType: string;
  role: string;
  problem: string;
  whatIBuilt: string;
  keyFeatures: string[];
  tech: string[];
  impact?: string;
  screenshot: string;
  screenshotAlt: string;
  screenshotPosition?: string;
  link?: string;
  linkLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

const featured: CaseStudy[] = [
  {
    name: "Movexa",
    productType: "AI-Powered Fitness & Nutrition App",
    role: "Founder & iOS Developer",
    problem:
      "People want personalized fitness and nutrition guidance without hiring a coach or manually logging every meal. Movexa needed that guidance to feel automatic, not like another spreadsheet.",
    whatIBuilt:
      "I founded Movexa and built it end-to-end in SwiftUI — architecture, UI, and App Store launch — including an AI coach that reacts to real activity data and a food scanner that reads meals from a photo.",
    keyFeatures: [
      "AI Coach that adapts to daily workouts, meals, and activity",
      "AI Food Scanner — photo-based calorie & macro estimation",
      "Apple Health sync for steps, calories, and heart rate",
      "Structured workout library with 100+ exercises",
      "Ramadan Mode — fasting tracker and prayer times",
      "BMI and weight-history progress tracking",
    ],
    tech: ["SwiftUI", "HealthKit", "AI Integration"],
    impact:
      "Live on the App Store — architecture, product, and launch owned end-to-end as founder.",
    screenshot: "/movexa/hero.jpg",
    screenshotAlt: "Movexa home dashboard — Your AI Fitness Coach",
    link: "https://apps.apple.com/fr/app/movexa/id6786145132?l=en-GB",
    linkLabel: "View on App Store",
    secondaryHref: "#movexa",
    secondaryLabel: "See full Movexa spotlight",
  },
  {
    name: "Shadhin Music",
    productType: "Music & Podcast Streaming App",
    role: "Senior iOS Developer",
    problem:
      "Shadhin Music needed to keep a large, already-live streaming app running smoothly for daily users while opening new monetization paths through telco billing partnerships.",
    whatIBuilt:
      "I develop and maintain the production iOS app — building streaming features and integrating MyGP and MyBL telco billing so users can pay for content directly through their mobile carrier, no card required.",
    keyFeatures: [
      "Telco billing integration (MyGP, MyBL) for carrier-based payments",
      "Streaming logic and modular UI for the RYZE app within ShadhinMusicSDK",
      "Apple Human Interface Guidelines compliance across all device sizes",
      "Contributed to sibling apps (Deen, Noor) within the same ecosystem",
    ],
    tech: ["Swift", "SwiftUI", "UIKit", "Telco SDK Integration"],
    impact:
      "Bangladesh's leading music streaming app, used by thousands of daily users.",
    screenshot: "/work/shadhin-music.png",
    screenshotAlt:
      "Shadhin Music app home screen with a featured exclusive podcast and personalized listening recommendations",
    link: "https://apps.apple.com/us/app/shadhin-music/id1481808365",
    linkLabel: "View on App Store",
  },
];

const additional: CaseStudy[] = [
  {
    name: "AISocial",
    productType: "AI Chat & Assistant App",
    role: "iOS Developer (UI/UX) — Remote, USA",
    problem:
      "A US-based product team needed a polished AI chat experience built remotely — character-based conversations plus AI utility tools.",
    whatIBuilt:
      "I built the SwiftUI interface end-to-end: AI character chat, search, and utility tools like AI-assisted content summarization.",
    keyFeatures: [
      "AI character chat with search & discovery",
      "AI-assisted content tools (summarize, create)",
      "Responsive SwiftUI layouts across device sizes",
    ],
    tech: ["SwiftUI", "REST APIs", "AI Integration"],
    impact:
      "Delivered fully remotely for a US-based team — real experience working with international clients.",
    screenshot: "/work/aisocial.png",
    screenshotAlt: "Hey Buddy AI chat app home screen with character search",
    screenshotPosition: "50% 5%",
  },
  {
    name: "Reserveit BD",
    productType: "Booking & Reservation App",
    role: "Lead UI Designer & iOS Developer",
    problem:
      "Local restaurants and salons needed one place for customers to discover and book their services.",
    whatIBuilt:
      "I led UI design and built the app's custom views — category browsing, location-based discovery, and booking flows.",
    keyFeatures: [
      "Restaurant & beauty salon booking categories",
      "Map-based discovery of nearby services",
      "Custom SwiftUI/UIKit booking flows",
    ],
    tech: ["SwiftUI", "UIKit"],
    screenshot: "/work/reserveit-bd.png",
    screenshotAlt:
      "Reserveit BD app showing restaurant and beauty salon booking categories",
    screenshotPosition: "50% 20%",
  },
  {
    name: "Deen & Noor",
    productType: "Islamic Lifestyle Apps",
    role: "Contributor — Feature Development & UI",
    problem:
      "Muslim users needed accurate, localized prayer times and Quran/Hadith access within the Shadhin ecosystem's lifestyle apps.",
    whatIBuilt:
      "I contributed feature development and UI across both apps, including prayer time displays and content modules.",
    keyFeatures: [
      "Location-based prayer time calculation",
      "Quran, Hadith, and Namaz content modules",
    ],
    tech: ["SwiftUI", "UIKit"],
    screenshot: "/work/noor.png",
    screenshotAlt: "Noor app showing daily prayer times in Dhaka",
    screenshotPosition: "50% 55%",
  },
];

function FieldBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function FeaturedCaseStudy({
  study,
  imageOnRight,
}: {
  study: CaseStudy;
  imageOnRight: boolean;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-border lg:grid-cols-2">
        <div
          className={`relative order-2 aspect-square bg-muted lg:aspect-auto ${
            imageOnRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={withBasePath(study.screenshot)}
            alt={study.screenshotAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div
          className={`order-1 flex flex-col gap-5 p-8 sm:p-12 ${
            imageOnRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {study.productType}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {study.name}
          </h3>
          <Badge className="w-fit">{study.role}</Badge>

          <div className="flex flex-col gap-4">
            <FieldBlock label="The Problem">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {study.problem}
              </p>
            </FieldBlock>

            <FieldBlock label="What I Built">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {study.whatIBuilt}
              </p>
            </FieldBlock>

            <FieldBlock label="Key Features">
              <ul className="flex flex-col gap-1.5">
                {study.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </FieldBlock>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {study.impact && (
            <div className="rounded-lg border border-border bg-muted/50 px-4 py-3">
              <p className="text-sm font-medium">{study.impact}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-5 pt-1">
            {study.secondaryHref && (
              <a
                href={study.secondaryHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
              >
                {study.secondaryLabel} <ArrowUpRight className="size-4" />
              </a>
            )}
            {study.link && (
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {study.linkLabel} <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AdditionalCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="relative h-40 overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          src={withBasePath(study.screenshot)}
          alt={study.screenshotAlt}
          fill
          sizes="(min-width: 640px) 380px, 90vw"
          style={{
            objectFit: "cover",
            objectPosition: study.screenshotPosition ?? "50% 50%",
          }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {study.productType}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">
          {study.name}
        </h3>
        <span className="text-sm text-muted-foreground">{study.role}</span>
      </div>

      <div className="flex flex-col gap-3">
        <FieldBlock label="Problem">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {study.problem}
          </p>
        </FieldBlock>
        <FieldBlock label="What I Built">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {study.whatIBuilt}
          </p>
        </FieldBlock>
        <FieldBlock label="Key Features">
          <ul className="flex flex-col gap-1.5">
            {study.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </FieldBlock>
      </div>

      {study.impact && (
        <p className="text-xs text-muted-foreground italic">
          {study.impact}
        </p>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {study.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </Card>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Product case studies, not a project list."
          description="The real problems I solved, the decisions I made, and what shipped."
          className="max-w-2xl"
        />

        <div className="mt-16 flex flex-col gap-8">
          {featured.map((study, i) => (
            <FeaturedCaseStudy
              key={study.name}
              study={study}
              imageOnRight={i % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {additional.map((study) => (
            <Reveal key={study.name}>
              <AdditionalCaseStudy study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
