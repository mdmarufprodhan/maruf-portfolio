import { Container } from "@/components/ui/Container";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-maruf-prodhan-187948b8",
  },
  { label: "GitHub", href: "https://github.com/mdmarufprodhan" },
  { label: "Email", href: "mailto:maruf.md.prodhan@gmail.com" },
  {
    label: "Movexa",
    href: "https://apps.apple.com/fr/app/movexa/id6786145132?l=en-GB",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold tracking-tight">
              Maruf Prodhan
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Founder &amp; Product Builder
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Founder of Movexa · iOS Developer
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Maruf Prodhan
          </p>
        </div>
      </Container>
    </footer>
  );
}
