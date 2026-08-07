import Image from "next/image";
import { ArrowUpRight, CreditCard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/utils";

const MOVEXA_URL =
  "https://apps.apple.com/fr/app/movexa/id6786145132?l=en-GB";

const screens = [
  {
    src: "/movexa/hero.jpg",
    alt: "Movexa home dashboard — Your AI Fitness Coach",
    label: "Overview",
  },
  {
    src: "/movexa/ai-coach.jpg",
    alt: "Movexa AI Coach — an AI coach that adapts to your day",
    label: "AI Coach",
  },
  {
    src: "/movexa/food-scanner.jpg",
    alt: "Movexa AI Food Scanner — snap a photo, know calories instantly",
    label: "AI Food Scanner",
  },
  {
    src: "/movexa/nutrition.jpg",
    alt: "Movexa nutrition tracking — search 190+ global dishes",
    label: "Nutrition",
  },
  {
    src: "/movexa/workout-library.jpg",
    alt: "Movexa workout library — structured routines and exercises",
    label: "Fitness",
  },
  {
    src: "/movexa/apple-health.jpg",
    alt: "Movexa Apple Health sync — steps, calories, and heart rate",
    label: "Health Sync",
  },
  {
    src: "/movexa/ramadan-mode.jpg",
    alt: "Movexa Ramadan Mode — fasting tracker and prayer times",
    label: "Personalized Experiences",
  },
  {
    src: "/movexa/progress.jpg",
    alt: "Movexa progress tracking — BMI and weight history",
    label: "Progress",
  },
];

export function Movexa() {
  return (
    <section
      id="movexa"
      className="relative isolate overflow-hidden bg-[#08080c] py-24 text-white sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-[#FF5722]/20 blur-[140px]" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF7A45]">
              Founder — Movexa
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Building a smarter approach to fitness &amp; nutrition.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/60 sm:text-xl">
              Movexa is an AI-powered fitness and nutrition platform
              designed to help people make better decisions around
              fitness, food, and healthy living.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 border-l-2 border-[#FF5722] py-1 pl-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xl font-medium leading-snug text-balance">
              &ldquo;I&apos;m building Movexa to turn complex health and
              nutrition decisions into simple, personalized
              experiences.&rdquo;
            </p>
            <a
              href={MOVEXA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#FF5722] px-6 text-base font-medium text-white transition-colors duration-200 ease-out-premium hover:bg-[#FF6A3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c]"
            >
              Explore Movexa <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <p className="mt-16 font-mono text-xs uppercase tracking-wider text-white/40 sm:hidden">
          Swipe to explore →
        </p>

        <Reveal delay={0.1} className="mt-6 sm:mt-16">
          <div
            className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {screens.map((screen) => (
              <div
                key={screen.src}
                className="group flex shrink-0 snap-start flex-col gap-3"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform duration-300 ease-out-premium group-hover:-translate-y-1">
                  <Image
                    src={withBasePath(screen.src)}
                    alt={screen.alt}
                    width={1242}
                    height={2688}
                    sizes="(min-width: 640px) 222px, 176px"
                    className="h-[380px] w-auto sm:h-[480px]"
                  />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                  {screen.label}
                </span>
              </div>
            ))}

            <div className="flex shrink-0 snap-start flex-col gap-3">
              <div className="flex h-[380px] w-[176px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 text-center sm:h-[480px] sm:w-[222px]">
                <CreditCard className="size-6 text-white/30" />
                <p className="text-xs text-white/40">
                  Screenshot placeholder
                  <br />
                  Add the subscription / paywall screen here
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Subscription
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
