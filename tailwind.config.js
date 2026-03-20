export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Safelist ensures these classes are NEVER purged even when used dynamically
  safelist: [
    { pattern: /^(bg|text|border|from|via|to|ring)-(brand)-(50|100|200|300|400|500|600|700|800|900|950)$/ },
    { pattern: /^(bg|text|border|from|via|to|ring)-(cyan)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^(bg|text)-(green|purple|amber|yellow|orange|sky|blue)-(50|100|200|400|500|600|700)$/ },
    "bg-gradient-to-br", "bg-gradient-to-b", "bg-gradient-to-tr", "bg-gradient-to-l",
    "from-brand-600", "via-brand-500", "to-cyan-400",
    "from-brand-500", "to-cyan-400",
    "from-orange-400", "to-amber-400",
    "from-sky-400", "to-brand-400",
    "from-yellow-400", "to-orange-500",
    "from-green-400", "to-cyan-500",
    "from-purple-500", "to-pink-500",
    "bg-brand-gradient", "bg-hero-gradient",
  ],

  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#eff9ff",
          100: "#dff3ff",
          200: "#b8e8ff",
          300: "#7ad7ff",
          400: "#36c3fc",
          500: "#0ca7ed",
          600: "#0083cc",
          700: "#0168a5",
          800: "#065888",
          900: "#0b4971",
          950: "#072f4d",
        },
        cyan: {
          50:  "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
      animation: {
        "float":       "floatY 6s ease-in-out infinite",
        "float-slow":  "floatY 9s ease-in-out infinite",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
        "spin-slow":   "spin 20s linear infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "brand-gradient":  "linear-gradient(135deg, #0168a5 0%, #0ca7ed 50%, #22d3ee 100%)",
        "hero-gradient":   "radial-gradient(ellipse at top right, #dff3ff 0%, #ffffff 60%)",
        "glow-blue":       "radial-gradient(circle, rgba(12,167,237,0.15) 0%, transparent 70%)",
        "glow-cyan":       "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
        "card-shimmer":    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
      },
      boxShadow: {
        "brand-sm":  "0 4px 15px rgba(12,167,237,0.12)",
        "brand-md":  "0 8px 30px rgba(12,167,237,0.20)",
        "brand-lg":  "0 20px 60px rgba(12,167,237,0.25)",
        "brand-xl":  "0 30px 90px rgba(12,167,237,0.30)",
        "card":      "0 2px 20px rgba(0,0,0,0.06)",
        "card-hover":"0 20px 60px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
