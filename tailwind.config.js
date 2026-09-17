/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#2997FF", purpleBlue: "#3A12DD", 950: "#0a0e1f" },
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
        purple: {
          950: "#1a0b2e",
        },
        pink: {
          950: "#2e0b1a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        particle: "particleMove linear infinite",
        blackhole: "spiralInward 10s linear infinite",
        accretion: "rotateDisk 10s linear infinite",
        lensing: "pulseLensing 5s ease-in-out infinite",
        jet: "jetFlow 3s ease-in-out infinite",
        glow: "glow 0.4s ease-in-out infinite",
        "slide-in-left":
          "slideInLeft 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "slide-in-right":
          "slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "slide-out-left":
          "slideOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "slide-out-right":
          "slideOutRight 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "cloud-pop": "cloudpop 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        particleMove: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-200px) scale(0.5)", opacity: "0" },
        },
        blackholeMove: {
          "0%": {
            transform: "translate(0, 0) scale(0.5)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(50%, 50%) scale(1.5)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.1)",
            opacity: "0",
          },
        },
        rotateDisk: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseLensing: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        spiralInward: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.1)",
            opacity: "0",
          },
        },
        jetFlow: {
          "0%": { opacity: "0.5", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.2)" },
          "100%": { opacity: "0.5", transform: "scaleY(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 211, 235, 0)" },
          "50%": { boxShadow: "0 0 10px 5px rgba(34, 211, 235, 0.5)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34, 211, 235, 0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "20%": { transform: "translateX(-100%)", opacity: "0" }, // Delay for overlap
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "20%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "80%": { transform: "translateX(-100%)", opacity: "0" }, // End early for overlap
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "80%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        cloudpop: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(34, 211, 235, 0.7)",
            opacity: "0.1",
            transform: "scale(1)",
          },
          "60%": {
            boxShadow: "0 0 800px 400px rgba(34, 211, 235, 0.7)",
            opacity: "0.8",
            transform: "scale(3.15)",
          },
          "100%": {
            boxShadow: "0 0 800px 400px rgba(34, 211, 235, 0.7)",
            opacity: "0.3",
            transform: "scale(10.25)",
          },
        },
        // Add will-change utility for performance
        willChange: {
          transform: "transform",
          opacity: "opacity",
          "transform-opacity": "transform, opacity",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "animate-slide-in-left",
    "animate-slide-in-right",
    "animate-slide-out-left",
    "animate-slide-out-right",
    "will-change-transform",
    "will-change-opacity",
  ],
};
