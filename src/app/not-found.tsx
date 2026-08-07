import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          404
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-md text-muted-foreground">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get
          you back to the homepage.
        </p>
        <Button href="/" size="lg">
          Back to home
        </Button>
      </Container>
    </main>
  );
}
