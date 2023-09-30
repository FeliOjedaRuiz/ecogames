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
        "alternate-logo": {
          "0%": { marginTop: "0" },
          "24%": { marginTop: "0" },

          "25%": { marginTop: "-10rem" },
          "49%": { marginTop: "-10rem" },

          "50%": { marginTop: "-20rem" },
          "74% ": { marginTop: "-20rem" },

          "75%": { marginTop: "-30rem" },
          "100%": { marginTop: "-30rem" },
        },
        "flicker": {
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
        "slide-left": {
          "0%": {
            transform: "translateX(-200vw)",
          },
          "70%": {
            translate: "0px",
          },
          // "100%": {
          //   translate: "0px",
          // },
        },
        "roll": {
          
          "50%": {
            transform: "rotate(15deg)",
          },
          "60%": {
            transform: "rotate(-12deg)",
          },
          "70%": {
            transform: "rotate(8deg)",
          },
          "80%": {
            transform: "rotate(-6deg)",
          },
          "90%": {
            transform: "rotate(-3deg)",
          },          
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "zoom-in-zoom-out": {
          "0%": { transform: "scale(1, 1)",
          },
          "30%": {transform: "scale(1.08, 1.08)",
          },
          "60%": { transform: "scale(1, 1)",
          },
          "100%": { transform: "scale(1, 1)",
          }
        }
      },
      animation: {
        "slide-down": "slide-down 2s",
        "fade-in": "fade-in 4s",
        "background-change": "background-change-color 5s infinite alternate",
        "slide-fliker": "alternate-logo 15s infinite, flicker 15s infinite",
        "logo-roll": "roll 4s ease-in-out, slide-left 2s ease-in",
      },
    },
  },
  plugins: [],
};

// , zoom-in-zoom-out 1s infinite ease-in-out 4s
