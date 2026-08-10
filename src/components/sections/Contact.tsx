"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const CONTACT_EMAIL = "maruf.md.prodhan@gmail.com";

const fieldClasses =
  "w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground " +
  "placeholder:text-muted-foreground transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const labelClasses = "text-sm font-medium text-foreground";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const projectType = String(data.get("projectType") ?? "");
  const message = String(data.get("message") ?? "");

  const subject = encodeURIComponent(`New project inquiry — ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px] dark:bg-accent/20" />
      </div>

      <Container>
        <div className="mx-auto max-w-xl">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Have an App Idea? Let's Build It."
              description="I'm currently available for new projects — startups, small businesses, and agencies looking for an iOS partner who can take an idea from first sketch to App Store launch."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={fieldClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className={labelClasses}>
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue="New App / MVP"
                  className={fieldClasses}
                >
                  <option>New App / MVP</option>
                  <option>Existing App — New Features</option>
                  <option>White-Label / Agency Partnership</option>
                  <option>Something Else</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelClasses}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me a bit about what you're building..."
                  className={`${fieldClasses} resize-none`}
                />
              </div>

              <div className="flex flex-col items-center gap-2 pt-1">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message <Send className="size-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Opens your email client with this pre-filled — nothing is
                  sent automatically.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-10">
              <p className="text-sm text-muted-foreground">
                Prefer email or social?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={`mailto:${CONTACT_EMAIL}`}
                  variant="secondary"
                  size="sm"
                >
                  Email
                </Button>
                <Button
                  href="https://www.linkedin.com/in/md-maruf-prodhan-187948b8"
                  external
                  variant="secondary"
                  size="sm"
                >
                  LinkedIn <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  href="https://github.com/mdmarufprodhan"
                  external
                  variant="secondary"
                  size="sm"
                >
                  GitHub <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
