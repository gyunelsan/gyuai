

import { useTranslation } from "@/hooks/useTranslation";
import { LogoMark } from "@/components/ui/LogoMark";
import { AudioWaveform } from "lucide-react";

interface EmptyStateProps {
  onSuggestion: (text: string) => void;
}

export function EmptyState({ onSuggestion }: EmptyStateProps) {
  const { t } = useTranslation();

  const suggestions = [
    t("sug1"),
    t("sug2"),
    t("sug3"),
    t("sug4"),
  ] as const;

  return (
    <div className="animate-fade-in flex h-full flex-col items-center justify-center gap-4 px-4">
      <div
        className="animate-orb-float flex items-center justify-center rounded-full"
        style={{
          width: 72,
          height: 72,
          background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
          boxShadow: "0 12px 40px color-mix(in srgb, var(--color-accent) 30%, transparent)",
          fontSize: 32,
        }}
      >
        <AudioWaveform size={50}/>
      </div>


      <h2
        className="font-display text-center text-2xl font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {t("emptyTitle")}
      </h2>


      <p
        className="max-w-[300px] text-center text-sm leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        {t("emptySub")}
      </p>


      <div className="mt-2 flex max-w-[500px] flex-wrap justify-center gap-2">
        {suggestions.map((text) => (
          <button
            key={text}
            onClick={() => onSuggestion(text)}
            className="cursor-pointer rounded-[20px] border px-[14px] py-2 text-xs transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-card)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.background =
                "color-mix(in srgb, var(--color-accent) 8%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.background = "var(--color-card)";
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
