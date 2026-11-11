import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        foreground: "#ffffff",
        card: "#121214",
        accent: {
          amber: "#ffad36",
          pink: "#ff4d94",
          turquoise: "#00f0ff",
        },
        rockstar: {
          black: "#0a0a0c",
          dark: "#121214",
          grey: "#1c1c1f",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(100%)" },
          "50%": { opacity: "0.8", filter: "brightness(150%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundImage: {
        "vice-gradient": "linear-gradient(to bottom right, #ff4d94, #00f0ff)",
        "amber-glow": "radial-gradient(circle at center, rgba(255, 173, 54, 0.15) 0%, transparent 70%)",
        "rockstar-mesh": "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
