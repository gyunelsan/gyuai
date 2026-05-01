
"use client";

import { useRef, useState, useCallback } from "react";
import { useChat } from "@/hooks/useChat";
import { useTranslation } from "@/hooks/useTranslation";
import { useAppStore } from "@/stores/useAppStore";
import { Send } from "lucide-react";

export function InputBar() {
  const { t } = useTranslation();
  const { sendMessage } = useChat();
  const isTyping = useAppStore((s) => s.isTyping);
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const handleSend = useCallback(async () => {
    const text = value.trim();
    if (!text || isTyping) return;
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    await sendMessage(text);
  }, [value, isTyping, sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const canSend = value.trim().length > 0 && !isTyping;

  return (
    <div
      className="border-t px-4 pb-5 pt-4 backdrop-blur-md sm:px-6"
      style={{
        background: "color-mix(in srgb, var(--color-sidebar) 70%, transparent)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="flex items-end gap-2 rounded-[14px] border px-3 py-[10px] transition-all duration-200"
          style={{
            background: "var(--color-input)",
            borderColor: focused ? "var(--color-accent)" : "var(--color-border)",
            boxShadow: focused ? "var(--shadow-input)" : "none",
          }}
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              autoResize();
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={t("placeholder")}
            className="flex-1 resize-none bg-transparent font-sans text-sm leading-[1.5] outline-none"
            style={{
              color: "var(--color-text-primary)",
              minHeight: 24,
              maxHeight: 120,
            }}
          />

          <button
            onClick={handleSend}
            disabled={!canSend}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] text-white transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-default disabled:opacity-40"
            style={{
              background: "var(--color-accent)",
              boxShadow: canSend
                ? "0 4px 12px color-mix(in srgb, var(--color-accent) 30%, transparent)"
                : "none",
            }}
            aria-label={t("sendMessage")}
          >
            <Send size={15} strokeWidth={2.5} />
          </button>
        </div>

        <p
          className="mt-2 text-center text-[11px]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t("hint")}
        </p>
      </div>
    </div>
  );
}
