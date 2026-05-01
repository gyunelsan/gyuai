
import { Theme, ThemeConfig } from "@/types";

export const themeConfigs: ThemeConfig[] = [
  { id: "dark", label: "Dark", bg: "#1a1d24" },
  { id: "light", label: "Light", bg: "#f5f6fa" },
  { id: "pink", label: "Pink", bg: "#c872ac" },
  { id: "ocean", label: "Ocean", bg: "#071e33" },
  { id: "sunset", label: "Sunset", bg: "#ff7e5f" },
  { id: "forest", label: "Forest", bg: "#14532d" },
  { id: "midnight", label: "Midnight", bg: "#0b0f1a" },
  { id: "cyber", label: "Cyber", bg: "#00f5ff" }

];

export const themeLabels: Record<string, Record<Theme, string>> = {
  en: { dark: "Dark", light: "Light", pink: "Pink", ocean: "Ocean", sunset: "Sunset", forest:"Forest", midnight:"Midnight", cyber:"Cyber" },
  ru: { dark: "Тёмная", light: "Светлая", pink: "Розовая", ocean: "Океан", sunset: "Закат", forest: "Лес", midnight:"Полночь", cyber:"Кибер" },
  az: { dark: "Tünd", light: "İşıqlı", pink: "Çəhrayı", ocean: "Okean", sunset: "Gün batımı", forest: "Meşe", midnight:"Gece yarısı", cyber:"Kiber"},
};

export const languageLabels: Record<string, Record<string, string>> = {
  en: { en: "English", ru: "Russian", az: "Azerbaijani" },
  ru: { en: "Английский", ru: "Русский", az: "Азербайджанский" },
  az: { en: "İngilis", ru: "Rus", az: "Azərbaycan" },
};

export const themeCSSVars: Record<Theme, Record<string, string>> = {
  dark: {
    "--color-base": "#0d0f12",
    "--color-sidebar": "#111318",
    "--color-card": "#1a1d24",
    "--color-input": "#1f2230",
    "--color-hover": "#252836",
    "--color-msg-user": "#3b5bdb",
    "--color-msg-ai": "#1e2130",
    "--color-text-primary": "#f0f2f8",
    "--color-text-secondary": "#8b90a8",
    "--color-text-muted": "#555a70",
    "--color-border": "#2a2d3e",
    "--color-accent": "#6c8eff",
    "--color-accent-2": "#a78bfa",
    "--color-wave-1": "#1a2040",
    "--color-wave-2": "#151830",
    "--shadow-bubble": "0 4px 20px rgba(108,142,255,0.15)",
    "--shadow-input": "0 0 0 1px rgba(59,91,219,0.33)",
  },
  light: {
    "--color-base": "#f5f6fa",
    "--color-sidebar": "#ffffff",
    "--color-card": "#ffffff",
    "--color-input": "#ffffff",
    "--color-hover": "#f0f2fa",
    "--color-msg-user": "#4f73ff",
    "--color-msg-ai": "#f0f2fa",
    "--color-text-primary": "#1a1d2e",
    "--color-text-secondary": "#5a6080",
    "--color-text-muted": "#9aa0be",
    "--color-border": "#e2e4f0",
    "--color-accent": "#4f73ff",
    "--color-accent-2": "#7c3aed",
    "--color-wave-1": "#e8eaf5",
    "--color-wave-2": "#eceef8",
    "--shadow-bubble": "0 2px 12px rgba(79,115,255,0.12)",
    "--shadow-input": "0 0 0 2px rgba(79,115,255,0.19)",
  },
  pink: {
    "--color-base": "#fff5fb",
    "--color-sidebar": "#ffe4f1",
    "--color-card": "#fff0f7",
    "--color-input": "#ffe9f3",
    "--color-hover": "#ffd6ea",

    "--color-msg-user": "#ec4899",
    "--color-msg-ai": "#fff0f7",

    "--color-text-primary": "#1f2937",
    "--color-text-secondary": "#6b7280",
    "--color-text-muted": "#9ca3af",

    "--color-border": "#f5c2dc",

    "--color-accent": "#f472b6",
    "--color-accent-2": "#fb7185",

    "--color-wave-1": "#ffe4f1",
    "--color-wave-2": "#fff5fb",

    "--shadow-bubble": "0 4px 18px rgba(244,114,182,0.15)",
    "--shadow-input": "0 0 0 1px rgba(244,114,182,0.2)",
  },
  ocean: {
    "--color-base": "#020d1e",
    "--color-sidebar": "#041525",
    "--color-card": "#071e33",
    "--color-input": "#0a2540",
    "--color-hover": "#0d2e4a",
    "--color-msg-user": "#0077b6",
    "--color-msg-ai": "#0a1e30",
    "--color-text-primary": "#cce8f8",
    "--color-text-secondary": "#5da8cc",
    "--color-text-muted": "#2a6080",
    "--color-border": "#0d3050",
    "--color-accent": "#00b4d8",
    "--color-accent-2": "#48cae4",
    "--color-wave-1": "#041525",
    "--color-wave-2": "#031020",
    "--shadow-bubble": "0 4px 20px rgba(0,180,216,0.2)",
    "--shadow-input": "0 0 0 1px rgba(0,180,216,0.33)",
  },
  sunset: {
    "--color-base": "#8a3d06",
    "--color-sidebar": "#3b1a14",
    "--color-card": "#4a2018",
    "--color-input": "#5a281e",
    "--color-hover": "#6a3024",
    "--color-msg-user": "#ff7e5f",
    "--color-msg-ai": "#3b1a14",
    "--color-text-primary": "#fff7dc",
    "--color-text-secondary": "#ffb4a2",
    "--color-text-muted": "#a66a5e",
    "--color-border": "#7a3b2f",
    "--color-accent": "#db3d15",
    "--color-accent-2": "#f57412",
    "--color-wave-1": "#3b1a14",
    "--color-wave-2": "#2a0f0a",
    "--shadow-bubble": "0 4px 20px rgba(255,126,95,0.2)",
    "--shadow-input": "0 0 0 1px rgba(255,126,95,0.3)",
  },
  forest: {
    "--color-base": "#021d13",
    "--color-sidebar": "#043d2b",
    "--color-card": "#065f46",
    "--color-input": "#065f46",
    "--color-hover": "#047857",
    "--color-msg-user": "#10b981",
    "--color-msg-ai": "#043d2b",
    "--color-text-primary": "#d1fae5",
    "--color-text-secondary": "#6ee7b7",
    "--color-text-muted": "#2f855a",
    "--color-border": "#065f46",
    "--color-accent": "#10b981",
    "--color-accent-2": "#34d399",
    "--color-wave-1": "#043d2b",
    "--color-wave-2": "#021d13",
    "--shadow-bubble": "0 4px 20px rgba(16,185,129,0.2)",
    "--shadow-input": "0 0 0 1px rgba(16,185,129,0.3)",
  },
  midnight: {
    "--color-base": "#000000",
    "--color-sidebar": "#050505",
    "--color-card": "#0a0a0a",
    "--color-input": "#0f0f0f",
    "--color-hover": "#141414",

    "--color-msg-user": "#1f1f1f",
    "--color-msg-ai": "#0d0d0d",

    "--color-text-primary": "#828196",
    "--color-text-secondary": "#393457",
    "--color-text-muted": "#858486",

    "--color-border": "#1a1a1a",

    "--color-accent": "#030127",
    "--color-accent-2": "#0a022b",

    "--color-wave-1": "#050505",
    "--color-wave-2": "#000000",

    "--shadow-bubble": "0 4px 20px rgba(0,0,0,0.6)",
    "--shadow-input": "0 0 0 1px rgba(255,255,255,0.05)",
  },
  cyber: {
    "--color-base": "#070a12",
    "--color-sidebar": "#0c1020",
    "--color-card": "#12172a",
    "--color-input": "#161c33",
    "--color-hover": "#1b2240",

    "--color-msg-user": "#00f5ff",
    "--color-msg-ai": "#ff00e5",

    "--color-text-primary": "#e5e5ff",
    "--color-text-secondary": "#9b9bff",
    "--color-text-muted": "#5b5b8a",

    "--color-border": "#2a004d",

    "--color-accent": "#00f5ff",
    "--color-accent-2": "#ff00e5",

    "--color-wave-1": "#0b0014",
    "--color-wave-2": "#05010a",

    "--shadow-bubble": "0 0 25px rgba(0,245,255,0.18)",
    "--shadow-input": "0 0 0 1px rgba(255,0,229,0.25)",
  },
};
