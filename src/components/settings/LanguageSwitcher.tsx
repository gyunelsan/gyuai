
"use client";

import { useAppStore } from "@/stores/useAppStore";
import { useTranslation } from "@/hooks/useTranslation";
import { languageLabels } from "@/lib/themes";
import { Language } from "@/types";

const LANGUAGES: { code: Language; flag: string }[] = [
  { code: "en", flag: "🇬🇧" },
  { code: "ru", flag: "🇷🇺" },
  { code: "az", flag: "🇦🇿" },
];

export function LanguageSwitcher() {
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const { language: currentLang } = useTranslation();
  const labels = languageLabels[currentLang] ?? languageLabels.en;

  return (
    <div className="flex flex-col gap-[6px]">
      {LANGUAGES.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className="flex cursor-pointer items-center gap-[10px] rounded-[9px] border px-[14px] py-[10px] text-sm transition-all duration-150"
          style={{
            borderColor:
              code === language ? "var(--color-accent)" : "var(--color-border)",
            background:
              code === language
                ? "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                : "transparent",
            color:
              code === language
                ? "var(--color-accent)"
                : "var(--color-text-secondary)",
            fontWeight: code === language ? 500 : 400,
          }}
        >
          <span className="text-base">{flag}</span>
          <span>{labels[code]}</span>
        </button>
      ))}
    </div>
  );
}
