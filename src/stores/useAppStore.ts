
"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Chat, Language, Message, Theme } from "@/types";
import { generateId } from "@/lib/utils";

interface AppState {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;


  chats: Chat[];
  currentChatId: string | null;
  isTyping: boolean;
  sidebarOpen: boolean;

  newChat: () => string;
  switchChat: (id: string) => void;
  deleteChat: (id: string) => void;
  clearChat: (id: string) => void;
  addMessage: (chatId: string, message: Omit<Message, "id" | "timestamp">) => void;
  setTyping: (typing: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  getCurrentChat: () => Chat | undefined;
  updateChatTitle: (chatId: string, title: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      language: "en",
      chats: [],
      currentChatId: null,
      isTyping: false,
      sidebarOpen: false,

      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),

      newChat: () => {
        const id = generateId();
        const now = Date.now();
        const newChat: Chat = {
          id,
          title: "New Chat",
          messages: [],
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          chats: [newChat, ...state.chats],
          currentChatId: id,
        }));
        return id;
      },

      switchChat: (id) => set({ currentChatId: id }),

      deleteChat: (id) =>
        set((state) => {
          const chats = state.chats.filter((c) => c.id !== id);
          const currentChatId =
            state.currentChatId === id
              ? chats[0]?.id ?? null
              : state.currentChatId;
          return { chats, currentChatId };
        }),

      clearChat: (id) =>
        set((state) => ({
          chats: state.chats.map((c) =>
            c.id === id ? { ...c, messages: [], title: "New Chat" } : c
          ),
        })),

      addMessage: (chatId, { role, text }) => {
        const message: Message = {
          id: generateId(),
          role,
          text,
          timestamp: Date.now(),
        };
        set((state) => ({
          chats: state.chats.map((c) =>
            c.id === chatId
              ? {
                  ...c,
                  messages: [...c.messages, message],
                  updatedAt: Date.now(),
                  title:
                    c.messages.length === 0 && role === "user"
                      ? text.slice(0, 36)
                      : c.title,
                }
              : c
          ),
        }));
      },

      setTyping: (isTyping) => set({ isTyping }),
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),

      getCurrentChat: () => {
        const { chats, currentChatId } = get();
        return chats.find((c) => c.id === currentChatId);
      },

      updateChatTitle: (chatId, title) =>
        set((state) => ({
          chats: state.chats.map((c) =>
            c.id === chatId ? { ...c, title } : c
          ),
        })),
    }),
    {
      name: "gyu-ai-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        chats: state.chats,
        currentChatId: state.currentChatId,
      }),
    }
  )
);
