
"use client";

import { useTheme } from "@/hooks/useTheme";
import { themeConfigs } from "@/lib/themes";
import { Theme } from "@/types";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-3">
      {themeConfigs.map((tc) => (
        <button
          key={tc.id}
          onClick={() => setTheme(tc.id as Theme)}
          className={cn(
            "h-8 w-8 rounded-full border-2 transition-all duration-200",
            tc.id === theme
              ? "scale-110 ring-2 ring-white/30"
              : "opacity-70 hover:opacity-100"
          )}
          style={{
            background: tc.bg,
            borderColor:
              tc.id === theme
                ? "var(--color-accent)"
                : "var(--color-border)",
          }}
        />
      ))}
    </div>
  );
}