

import { Message } from "@/types";
import { formatTime } from "@/lib/utils";
import { LogoMark } from "@/components/ui/LogoMark";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}


function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? (
        <strong key={j} className="font-semibold">
          {part}
        </strong>
      ) : (
        part
      )
    );
    return (
      <span key={i}>
        {rendered}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "animate-msg-in flex gap-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >

      {isUser ? (
        <div
          className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[10px] text-sm font-semibold"
          style={{
            background: "var(--color-hover)",
            color: "var(--color-text-secondary)",
          }}
        >
          U
        </div>
      ) : (
        <LogoMark size={34} />
      )}

      <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "max-w-[72%] rounded-2xl px-4 py-3 text-sm leading-[1.7] transition-colors duration-400",
            isUser
              ? "rounded-br-[4px] text-white"
              : "rounded-bl-[4px] border"
          )}
          style={
            isUser
              ? {
                  background: "var(--color-msg-user)",
                  boxShadow: "var(--shadow-bubble)",
                }
              : {
                  background: "var(--color-msg-ai)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                }
          }
        >
          {renderText(message.text)}
        </div>
        <div
          className="mt-1 px-1 text-[11px]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
