/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            transform: 'translateY(-500px)',
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
      },
      animation: {
        'slide-down': 'slide-down 2s',
        'fade-in': 'fade-in 4s'
      },
    },
  },
  plugins: [],
};
