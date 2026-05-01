
"use client";

import { useCallback } from "react";
import { useAppStore } from "@/stores/useAppStore";
import { getRandomResponse, getTypingDelay } from "@/lib/aiResponses";

export function useChat() {
  const {
    addMessage,
    setTyping,
    currentChatId,
    newChat,
    language,
    chats,
    isTyping,
  } = useAppStore();

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isTyping) return;

      let chatId = currentChatId;


      if (!chatId || !chats.find((c) => c.id === chatId)) {
        chatId = newChat();
      }

      addMessage(chatId, { role: "user", text: text.trim() });


      setTyping(true);
      const delay = getTypingDelay();

      await new Promise((resolve) => setTimeout(resolve, delay));

      const response = getRandomResponse(language);
      addMessage(chatId, { role: "assistant", text: response });
      setTyping(false);
    },
    [addMessage, setTyping, currentChatId, newChat, language, chats, isTyping]
  );

  return { sendMessage };
}
