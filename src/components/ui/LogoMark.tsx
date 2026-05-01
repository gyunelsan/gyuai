import { cn } from "@/lib/utils";
import { AudioWaveform } from "lucide-react";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full flex-shrink-0",
        className
      )}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
        boxShadow:
          "0 4px 15px color-mix(in srgb, var(--color-accent) 30%, transparent)",
      }}
    >
      <AudioWaveform size={size * 0.6} color="#fff" />
    </div>
  );
}