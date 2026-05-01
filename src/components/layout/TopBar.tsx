
"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Globe, Settings } from "lucide-react";
import { useAppStore } from "@/stores/useAppStore";
import { useTranslation } from "@/hooks/useTranslation";
import { languageLabels } from "@/lib/themes";
import { Language } from "@/types";

const LANGUAGES: { code: Language; flag: string }[] = [
  { code: "en", flag: "🇬🇧" },
  { code: "ru", flag: "🇷🇺" },
  { code: "az", flag: "🇦🇿" },
];

interface TopBarProps {
  onOpenSettings: () => void;
}

export function TopBar({ onOpenSettings }: TopBarProps) {
  const { t } = useTranslation();
  const { language, setLanguage, setSidebarOpen } = useAppStore();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const labels = languageLabels[language] ?? languageLabels.en;

  const btnStyle = {
    background: "transparent",
    borderColor: "var(--color-border)",
    color: "var(--color-text-secondary)",
  };

  return (
    <header
      className="flex items-center justify-between border-b px-4 py-[14px] backdrop-blur-md sm:px-5"
      style={{
        background: "color-mix(in srgb, var(--color-sidebar) 80%, transparent)",
        borderColor: "var(--color-border)",
      }}
    >

      <div className="flex items-center gap-3">

        <button
          className="flex items-center justify-center rounded-md p-1 lg:hidden"
          style={{ color: "var(--color-text-secondary)" }}
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div>
          <p
            className="font-display text-[15px] font-semibold leading-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            {t("assistantName")}
          </p>
          <p
            className="text-[12px]"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("online")}
          </p>
        </div>
      </div>


      <div className="flex items-center gap-2">
        <div className="relative" ref={langRef}>
          <button
            className="flex items-center gap-[6px] rounded-[8px] border px-3 py-[6px] text-[12.5px] transition-all duration-150"
            style={btnStyle}
            onClick={() => setLangOpen((v) => !v)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-hover)";
              e.currentTarget.style.color = "var(--color-text-primary)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, btnStyle);
            }}
          >
            <Globe size={13} />
            <span>{language.toUpperCase()}</span>
          </button>

          {langOpen && (
            <div
              className="animate-drop-in absolute right-0 top-[calc(100%+6px)] z-50 min-w-[140px] overflow-hidden rounded-[10px] border"
              style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              {LANGUAGES.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => {
                    setLanguage(code);
                    setLangOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-[14px] py-[10px] text-[13px] transition-colors duration-150"
                  style={{
                    color:
                      code === language
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)",
                    fontWeight: code === language ? 500 : 400,
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-hover)";
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color =
                      code === language
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)";
                  }}
                >
                  <span>{flag}</span>
                  {labels[code]}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="flex items-center gap-[6px] rounded-[8px] border px-3 py-[6px] text-[12.5px] transition-all duration-150"
          style={btnStyle}
          onClick={onOpenSettings}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-hover)";
            e.currentTarget.style.color = "var(--color-text-primary)";
            e.currentTarget.style.borderColor = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, btnStyle);
          }}
        >
          <Settings size={13} />
        </button>
      </div>
    </header>
  );
}
