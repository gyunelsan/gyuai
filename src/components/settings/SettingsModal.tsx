
"use client";

import { X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[4px]"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="animate-drop-in w-full max-w-sm rounded-[18px] border p-6 transition-colors duration-400 sm:max-w-md"
        style={{
          background: "var(--color-card)",
          borderColor: "var(--color-border)",
        }}
      >

        <div className="mb-5 flex items-center justify-between">
          <span
            className="font-display text-base font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {t("settingsTitle")}
          </span>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-[7px] transition-all duration-150 hover:opacity-80"
            style={{
              background: "var(--color-hover)",
              color: "var(--color-text-muted)",
            }}
          >
            <X size={14} />
          </button>
        </div>


        <div className="mb-5">
          <p
            className="mb-[10px] text-[11px] font-medium uppercase tracking-[0.5px]"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("themeLabel")}
          </p>
          <ThemeSwitcher />
        </div>


        <div>
          <p
            className="mb-[10px] text-[11px] font-medium uppercase tracking-[0.5px]"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("langLabel")}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
