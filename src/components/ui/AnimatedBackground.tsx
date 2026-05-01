
"use client";

import { useAppStore } from "@/stores/useAppStore";
import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  const theme = useAppStore((s) => s.theme);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        theme === "light" && "opacity-5"
      )}
      aria-hidden="true"
    >
      <div
        className="animate-wave-rot absolute rounded-[40%] opacity-30"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: "var(--color-wave-1)",
          animationDuration: "20s",
        }}
      />
      <div
        className="animate-wave-rot-reverse absolute rounded-[40%] opacity-20"
        style={{
          width: "200%",
          height: "200%",
          top: "-60%",
          left: "-40%",
          background: "var(--color-wave-2)",
          animationDuration: "28s",
        }}
      />
      {theme === "ocean" && (
        <>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 80%, rgba(0,180,216,0.3) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at 80% 20%, rgba(72,202,228,0.2) 0%, transparent 60%)",
            }}
          />
        </>
      )}
      {theme === "pink" && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(244,114,182,0.3) 0%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
