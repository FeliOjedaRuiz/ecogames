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
        "hidden": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "0%" },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(-200vw)",
          },
          "100%": {
            translate: "0px",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(200vw)",
          },
          "100%": {
            translate: "0px",
          },
        },
        "slide-left2": {
          "0%": {
            transform: "translateX(-200vw)",
          },
          "70%": {
            translate: "40px",
          },
          "100%": {
            translate: "0px",
          },
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
          "50%": {transform: "scale(1.2, 1.2)",
          },
          "100%": { transform: "scale(1, 1)",
          }
        },
        "wiki": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "30%": {
            transform: "rotate(0deg)",
          },
          "40%": {
            transform: "rotate(-3deg)",
          },
          "60%": {
            transform: "rotate(3deg)",
          },
          "80%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "wiki-r": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "30%": {
            transform: "rotate(0deg)",
          },
          "40%": {
            transform: "rotate(3deg)",
          },
          "60%": {
            transform: "rotate(-3deg)",
          },
          "80%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "wikislow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "30%": {
            transform: "rotate(0deg)",
          },
          "40%": {
            transform: "rotate(-1deg)",
          },
          "60%": {
            transform: "rotate(1deg)",
          },
          "80%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        }
      },
      animation: {
        "slide-down": "slide-down 2s",        
        "fade-in0.3": "fade-in 0.3s",
        "fade-in0.5": "fade-in 0.5s",
        "fade-in1": "fade-in 1s",
        "fade-in3": "fade-in 3s",
        "background-change": "background-change-color 5s infinite alternate",
        "slide-fliker": "alternate-logo 12s infinite, flicker 12s infinite",
        "logo-roll": "roll 4s ease-in-out, slide-left 2s ease-in",
        "zoom": "zoom-in-zoom-out 2s ease-in-out",
        "slide1": "slide-left 0.5s",
        "slide2": "slide-left 0.5s 0.10s, hidden 0.10s",
        "slide3": "slide-left 0.5s 0.20s, hidden 0.20s",
        "slide4": "slide-left 0.5s 0.30s, hidden 0.30s",
        "slide5": "slide-left 0.5s 0.4s, hidden 0.4s",
        "slide-r-1": "slide-right 0.5s",
        "slide-r-2": "slide-right 0.5s 0.10s, hidden 0.10s",
        "slide-r-3": "slide-right 0.5s 0.20s, hidden 0.20s",
        "wiki": "wiki 3s infinite  alternate",
        "wiki-r": "wiki-r 3s infinite  alternate",
        "wikislow": "wikislow 3s infinite  alternate",
        "zoom-trophy": "zoom-in-zoom-out 1s ease-in-out 1s infinite",
      },
    },
  },
  plugins: [],
};

// , zoom-in-zoom-out 1s infinite ease-in-out 4s
