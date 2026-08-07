import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground",
        "p-6 shadow-xs transition-colors duration-200 ease-out-premium",
        "hover:border-foreground/15",
        className
      )}
    >
      {children}
    </div>
  );
}
