import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0872BF",
          "blue-dark": "#065C99",
          "blue-deep": "#054976",
          yellow: "#FFB400",
          "yellow-warm": "#F5A623",
        },
        ink: {
          primary: "#3D4658",
          secondary: "#626A78",
          muted: "#8A93A3",
          line: "#E4E7EC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FA",
          softer: "#FAFBFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Avenir Next", "Nunito Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        section: "clamp(80px, 9vw, 140px)",
      },
      borderRadius: {
        card: "12px",
        panel: "18px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
