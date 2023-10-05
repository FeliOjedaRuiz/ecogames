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
        },
        "slide-left2": {
          "0%": {
            transform: "translateX(-200vw)",
          },
          "70%": {
            translate: "80px",
          },
          "100%": {
            translate: "0px",
          },
        },
        "hidden": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "0%" },
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
          "50%": {transform: "scale(1.08, 1.08)",
          },
          "100%": { transform: "scale(1, 1)",
          }
        }
      },
      animation: {
        "slide-down": "slide-down 2s",
        "fade-in3": "fade-in 3s",
        "fade-in0.4": "fade-in 0.4s",
        "fade-in0.8": "fade-in 0.8s",
        "background-change": "background-change-color 5s infinite alternate",
        "slide-fliker": "alternate-logo 15s infinite, flicker 15s infinite",
        "logo-roll": "roll 4s ease-in-out, slide-left 2s ease-in",
        "zoom": "zoom-in-zoom-out 2s ease-in-out",
        "slide1": "slide-left2 1s",
        "slide2": "slide-left2 1s 0.5s, hidden 0.5s",
        "slide3": "slide-left2 1s 1s, hidden 1s",
        "slide4": "slide-left2 1s 1.5s, hidden 1.5s",
        "slide5": "slide-left2 1s 2s, hidden 2s",
      },
    },
  },
  plugins: [],
};

// , zoom-in-zoom-out 1s infinite ease-in-out 4s
