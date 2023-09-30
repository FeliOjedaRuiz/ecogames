/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-500px)",
          },
          "100%": {
            translate: "0px",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "background-change-color": {
          "0%": {
            background: "rgb(14, 116, 144)",
          },
          "100%": {
            background: "rgb(22, 163, 74)",
          },
        },
        slide: {
          "0%": {
            transform: "translateX(-100vw)",
          },
          "100%": {
            transform: "translateX(100vw)",
          },
        },
        "alternate-logo": {
          "0%": { marginTop: "0" },
          "24%": { marginTop: "0" },

          "25%": { marginTop: "-8rem" },
          "49%": { marginTop: "-8rem" },

          "50%": { marginTop: "-16rem" },
          "74% ": { marginTop: "-16rem" },

          "75%": { marginTop: "-24rem" },
          "100%": { marginTop: "-24rem" },
        },
        flicker: {
          "0%": { opacity: "0%" },
          "5%": { opacity: "100%" },
          "20%": { opacity: "100%" },
          "24%": { opacity: "0%" },
          "25%": { opacity: "0%" },
          "30%": { opacity: "100%" },
          "45%": { opacity: "100%" },
          "49%": { opacity: "0%" },
          "50%": { opacity: "0%" },
          "55%": { opacity: "100%" },
          "70%": { opacity: "100%" },
          "74%": { opacity: "0%" },
          "75%": { opacity: "0%" },
          "80%": { opacity: "100%" },
          "95%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        "slide-down": "slide-down 2s",
        "fade-in": "fade-in 4s",
        "background-change": "background-change-color 5s infinite alternate",
        "slide-fliker": "alternate-logo 15s infinite, flicker 15s infinite",

        "alternate-logo": "alternate-logo 10s infinite alternate",
      },
    },
  },
  plugins: [],
};
