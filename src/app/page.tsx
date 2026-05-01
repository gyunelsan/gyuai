// src/app/page.tsx
"use client";

import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { InputBar } from "@/components/chat/InputBar";
import { SettingsModal } from "@/components/settings/SettingsModal";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export default function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <ThemeProvider>
      <AnimatedBackground />


      <div className="relative z-10 flex h-screen overflow-hidden">
        <Sidebar onOpenSettings={() => setSettingsOpen(true)} />

        <div className="flex flex-1 flex-col overflow-hidden">
          <TopBar onOpenSettings={() => setSettingsOpen(true)} />
          <ChatWindow />
          <InputBar />
        </div>
      </div>


      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </ThemeProvider>
  );
}
