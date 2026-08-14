/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        surface: "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-container": "#e5eeff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container-high": "#dce9ff",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#44474d",
        outline: "#74777e",
        "outline-variant": "#c4c6cd",
        primary: "#0b1d33",
        "on-primary": "#ffffff",
        "primary-container": "#0b1d33",
        secondary: "#964900",
        "secondary-container": "#ff8928",
        "on-secondary": "#ffffff",
        error: "#ba1a1a",
        background: "#f8f9ff",
      },
      fontFamily: {
        "headline-xl": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
      },
      spacing: {
        xs: "4px",
        sm: "12px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        margin: "32px",
      },
    },
  },
  plugins: [],
};
