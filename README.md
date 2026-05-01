# Gyu AI

A modern, responsive AI chat assistant built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zustand**.

---

##  Features

-  **8 Themes** — Dark, Light, Pink, Ocean — with animated wave backgrounds
-  **3 Languages** — English, Russian, Azerbaijani
-  **Chat history** — persistent via `localStorage`, grouped by Today / Yesterday / Older
-  **Fully responsive** — sidebar collapses on mobile, hamburger menu
-  **Smooth animations** — message fade-in, floating orb, typing indicator
-  **Settings modal** — theme & language switcher in one place
-  **Zustand state** — clean, scalable state management with persistence

---

## 🗂 Project Structure

```
gyu-ai/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + CSS vars
│   │   ├── layout.tsx           # Root layout (fonts, metadata)
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatWindow.tsx   # Messages container
│   │   │   ├── EmptyState.tsx   # Landing state with suggestions
│   │   │   ├── InputBar.tsx     # Message input + send button
│   │   │   └── MessageBubble.tsx# Individual message bubble
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx      # Left sidebar with chat list
│   │   │   ├── ThemeProvider.tsx# Applies CSS vars on mount
│   │   │   └── TopBar.tsx       # Header with language + settings
│   │   ├── settings/
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   ├── SettingsModal.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   └── ui/
│   │       ├── AnimatedBackground.tsx # Wave animation
│   │       ├── LogoMark.tsx           # Reusable logo icon
│   │       └── TypingIndicator.tsx    # Bouncing dots
│   ├── hooks/
│   │   ├── useChat.ts           # Send message + AI response logic
│   │   ├── useTheme.ts          # Apply theme CSS vars
│   │   └── useTranslation.ts    # i18n helper
│   ├── lib/
│   │   ├── aiResponses.ts       # Mock AI responses per language
│   │   ├── themes.ts            # Theme configs + CSS var maps
│   │   ├── translations.ts      # All UI strings (EN/RU/AZ)
│   │   └── utils.ts             # Helpers: cn, formatTime, etc.
│   ├── stores/
│   │   └── useAppStore.ts       # Zustand store (theme, lang, chats)
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## 🔌 Connecting a Real AI API

Replace the mock in `src/hooks/useChat.ts` with a real API call:

```ts
// Replace getRandomResponse() with:
const response = await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({ messages: chat.messages }),
});
const data = await response.json();
addMessage(chatId, { role: "assistant", text: data.content });
```

Create `src/app/api/chat/route.ts` to proxy your AI provider (OpenAI, Anthropic, etc.).

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Zustand | State management + persistence |
| Framer Motion |
| Lucide React | Icons |

---

Built with ❤️ — **Gyu AI**
