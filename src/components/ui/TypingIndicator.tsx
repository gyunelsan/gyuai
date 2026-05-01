

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-[5px] px-4 py-[14px]">
      {[0, 200, 400].map((delay) => (
        <div
          key={delay}
          className="animate-typing-bounce h-[7px] w-[7px] rounded-full"
          style={{
            background: "var(--color-text-muted)",
            animationDelay: `${delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
