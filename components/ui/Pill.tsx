import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Pill({ icon, children, className }: PillProps) {
  return (
    <div
      className={cn(
        "glass inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-glass text-sm font-medium text-ink-soft",
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
}
