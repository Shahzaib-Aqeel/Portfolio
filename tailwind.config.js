// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glowBlink: {
          '0%, 100%': { opacity: "1", filter: "drop-shadow(0 0 5px rgba(0,255,255,0.8))"}, 
          '50%':   { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(0,255,255,0.5))"}
        },
      },
      animation: {
        glowBlink: "glowBlink 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
