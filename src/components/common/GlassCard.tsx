import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function GlassCard({ children, className, hoverable = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-300 ease-out",
        hoverable && "hover:bg-[#111118]/90 hover:border-white/10 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.7)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
