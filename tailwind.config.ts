import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "sans-serif"],
      },
      colors: {
        // CSS variable-driven colors for theme support
        base: "var(--color-base)",
        sidebar: "var(--color-sidebar)",
        card: "var(--color-card)",
        input: "var(--color-input)",
        hover: "var(--color-hover)",
        "msg-user": "var(--color-msg-user)",
        "msg-ai": "var(--color-msg-ai)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "msg-in": "msgIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "orb-float": "orbFloat 3s ease-in-out infinite",
        "wave-rot": "waveRot 20s linear infinite",
        "wave-rot-reverse": "waveRot 28s linear infinite reverse",
        "typing-bounce": "typingBounce 1.4s ease infinite",
        "slide-in": "slideIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards",
        "drop-in": "dropIn 0.25s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        msgIn: {
          from: { opacity: "0", transform: "translateY(8px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        waveRot: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        typingBounce: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-6px)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        dropIn: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "4px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
