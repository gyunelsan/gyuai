
"use client";

import { useState } from "react";
import { MessageSquare, Plus, Settings, Trash2 } from "lucide-react";
import { useAppStore } from "@/stores/useAppStore";
import { useTranslation } from "@/hooks/useTranslation";
import { formatDate, truncateTitle, cn } from "@/lib/utils";
import { LogoMark } from "@/components/ui/LogoMark";
import { Chat } from "@/types";

interface SidebarProps {
  onOpenSettings: () => void;
}

export function Sidebar({ onOpenSettings }: SidebarProps) {
  const { t } = useTranslation();
  const {
    chats,
    currentChatId,
    newChat,
    switchChat,
    deleteChat,
    sidebarOpen,
    setSidebarOpen,
  } = useAppStore();

  const [hoveredChatId, setHoveredChatId] = useState<string | null>(null);

  const handleNewChat = () => {
    newChat();
    setSidebarOpen(false);
  };

  const handleSwitchChat = (id: string) => {
    switchChat(id);
    setSidebarOpen(false);
  };

  const grouped: Record<string, Chat[]> = {};
  chats.forEach((chat) => {
    const key = formatDate(chat.updatedAt);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(chat);
  });

  const sectionLabels: Record<string, string> = {
    today: t("today"),
    yesterday: t("yesterday"),
    older: t("older"),
  };

  return (
    <>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[9] bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      <aside
        className={cn(
          "fixed left-0 top-0 z-10 flex h-full w-[260px] flex-shrink-0 flex-col border-r transition-transform duration-400",
          "lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          background: "var(--color-sidebar)",
          borderColor: "var(--color-border)",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
  
        <div
          className="flex items-center gap-[10px] px-4 pb-3 pt-5 font-display text-[18px] font-semibold tracking-[-0.3px]"
          style={{ color: "var(--color-text-primary)" }}
        >
          <LogoMark size={28} />
          <span>Gyu AI</span>
        </div>


        <div className="px-3 pb-4">
          <button
            onClick={handleNewChat}
            className="flex w-full items-center gap-2 rounded-[10px] px-[14px] py-[10px] text-[13.5px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "var(--color-accent)",
              boxShadow:
                "0 4px 15px color-mix(in srgb, var(--color-accent) 35%, transparent)",
            }}
          >
            <Plus size={14} strokeWidth={2.5} />
            {t("newChat")}
          </button>
        </div>


        <div
          className="flex-1 overflow-y-auto px-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-border) transparent" }}
        >
          {chats.length === 0 ? (
            <p
              className="px-2 py-3 text-center text-[12.5px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("noChats")}
            </p>
          ) : (
            Object.entries(grouped).map(([key, groupChats]) => (
              <div key={key} className="mb-1">
                <p
                  className="px-2 py-2 text-[11px] font-medium uppercase tracking-[0.5px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {sectionLabels[key] ?? key}
                </p>
                {groupChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="group relative mb-[2px] flex cursor-pointer items-center gap-[9px] rounded-[8px] px-[10px] py-[9px] text-[13.5px] transition-all duration-150"
                    style={{
                      background:
                        chat.id === currentChatId
                          ? "color-mix(in srgb, var(--color-accent) 12%, transparent)"
                          : hoveredChatId === chat.id
                          ? "var(--color-hover)"
                          : "transparent",
                      color:
                        chat.id === currentChatId
                          ? "var(--color-accent)"
                          : "var(--color-text-secondary)",
                    }}
                    onClick={() => handleSwitchChat(chat.id)}
                    onMouseEnter={() => setHoveredChatId(chat.id)}
                    onMouseLeave={() => setHoveredChatId(null)}
                  >
                    <MessageSquare
                      size={15}
                      className="flex-shrink-0 opacity-60"
                    />
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {truncateTitle(chat.title)}
                    </span>

                    {/* Delete button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="hidden flex-shrink-0 rounded p-0.5 opacity-50 transition-opacity hover:opacity-100 group-hover:flex"
                      style={{ color: "var(--color-text-muted)" }}
                      title={t("deleteChat")}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>


        <div
          className="border-t p-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <button
            onClick={onOpenSettings}
            className="flex w-full items-center gap-2 rounded-[9px] border px-3 py-[9px] text-[13px] transition-all duration-150"
            style={{
              background: "transparent",
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-hover)";
              e.currentTarget.style.color = "var(--color-text-primary)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            <Settings size={15} />
            {t("settings")}
          </button>
        </div>
      </aside>
    </>
  );
}
