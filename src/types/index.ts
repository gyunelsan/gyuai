
export type Theme = "dark" | "light" | "pink" | "ocean";
export type Language = "en" | "ru" | "az";

export interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: number;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

export interface ThemeConfig {
  id: Theme;
  label: string;
  emoji: string;
  bg: string;
}

export interface LanguageConfig {
  code: Language;
  label: string;
  flag: string;
}

export interface TranslationKeys {
  newChat: string;
  settings: string;
  assistantName: string;
  online: string;
  placeholder: string;
  hint: string;
  settingsTitle: string;
  themeLabel: string;
  langLabel: string;
  emptyTitle: string;
  emptySub: string;
  sug1: string;
  sug2: string;
  sug3: string;
  sug4: string;
  today: string;
  yesterday: string;
  older: string;
  clearChat: string;
  deleteChat: string;
  noChats: string;
  sendMessage: string;
  poweredBy: string;
}
