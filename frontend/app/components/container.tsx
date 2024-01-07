import { cn } from "~/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container relative py-4", className)}>{children}</div>
  );
}
