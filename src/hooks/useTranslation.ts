
import { useAppStore } from "@/stores/useAppStore";
import { translations } from "@/lib/translations";
import { TranslationKeys } from "@/types";

export function useTranslation() {
  const language = useAppStore((s) => s.language);
  const lang = translations[language] ?? translations.en;

  function t(key: keyof TranslationKeys): string {
    return lang[key] ?? translations.en[key];
  }

  return { t, language };
}
