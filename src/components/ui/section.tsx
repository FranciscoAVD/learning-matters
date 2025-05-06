import { cn } from "@/lib/utils";
import React from "react";
interface SectionProps extends React.ComponentProps<"section"> {
  containerClassName?: string;
}
export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section {...props} className={className}>
      <div
        className={cn(`container mx-auto px-4 md:px-0 ${containerClassName}`)}
      >
        {children}
      </div>
    </section>
  );
}
