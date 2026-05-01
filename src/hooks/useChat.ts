"use client";

import { useCallback } from "react";
import { useAppStore } from "@/stores/useAppStore";

export function useChat() {
  const {
    addMessage,
    setTyping,
    currentChatId,
    newChat,
    chats,
    isTyping,
    language,
  } = useAppStore();

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isTyping) return;

      let chatId = currentChatId;

      if (!chatId || !chats.find((c) => c.id === chatId)) {
        chatId = newChat();
      }

      addMessage(chatId, {
        role: "user",
        text: text.trim(),
      });

      setTyping(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `
You are a helpful AI assistant.
Always respond in this language: ${language}.
Be natural, clear and conversational.
                `,
              },
              {
                role: "user",
                content: text.trim(),
              },
            ],
          }),
        });

        const data = await res.json();

        const aiText = data?.message?.content;

        addMessage(chatId, {
          role: "assistant",
          text: aiText || "No response",
        });
      } catch (err) {
        addMessage(chatId, {
          role: "assistant",
          text: "Error: AI request failed",
        });
      }

      setTyping(false);
    },
    [
      addMessage,
      setTyping,
      currentChatId,
      newChat,
      chats,
      isTyping,
      language,
    ]
  );

  return { sendMessage };
}