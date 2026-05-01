
"use client";

import { useEffect } from "react";
import { useAppStore } from "@/stores/useAppStore";
import { themeCSSVars } from "@/lib/themes";
import { Theme } from "@/types";

export function useTheme() {
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  useEffect(() => {
    const root = document.documentElement;
    const vars = themeCSSVars[theme];
    if (!vars) return;

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    root.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
