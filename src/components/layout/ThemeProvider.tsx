
"use client";

import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useAppStore } from "@/stores/useAppStore";
import { themeCSSVars } from "@/lib/themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const storeTheme = useAppStore((s) => s.theme);


  useEffect(() => {
    const root = document.documentElement;
    const vars = themeCSSVars[storeTheme];
    if (!vars) return;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute("data-theme", storeTheme);
  }, [storeTheme]);

  return <>{children}</>;
}
