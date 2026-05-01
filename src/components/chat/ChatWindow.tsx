
"use client";

import { useEffect, useRef } from "react";
import { useAppStore } from "@/stores/useAppStore";
import { MessageBubble } from "./MessageBubble";
import { EmptyState } from "./EmptyState";
import { TypingIndicator } from "@/components/ui/TypingIndicator";
import { useChat } from "@/hooks/useChat";
import { LogoMark } from "@/components/ui/LogoMark";
import { AudioWaveform } from "lucide-react";

export function ChatWindow() {
  const currentChat = useAppStore((s) => s.getCurrentChat());
  const isTyping = useAppStore((s) => s.isTyping);
  const { sendMessage } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat?.messages, isTyping]);

  const hasMessages = (currentChat?.messages?.length ?? 0) > 0;

  return (
    <div
      className="flex-1 overflow-y-auto px-4 py-5 sm:px-6"
      style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-border) transparent" }}
    >
      {!hasMessages ? (
        <EmptyState onSuggestion={(text) => sendMessage(text)} />
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-4 pb-2">
          {currentChat?.messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}


          {isTyping && (
            <div className="animate-msg-in flex gap-3">
              <LogoMark size={34} /> 
              <div
                className="rounded-2xl rounded-bl-[4px] border"
                style={{
                  background: "var(--color-msg-ai)",
                  borderColor: "var(--color-border)",
                }}
              >
                <TypingIndicator />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
