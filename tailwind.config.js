const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        "alex-brush": ['"Alex Brush"', "cursive"],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        serif: ["Comfortaa", ...defaultTheme.fontFamily.serif],
        display: ["Cinzel Decorative"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      backgroundImage: {
        logo: "url('/src/assets/logo.png')",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            "text-shadow":
              "0 0 8.3333333333px snow, 0 -25px 50px purple, -25px 25px 50px violet, 25px 25px 50px purple",
          },
          "33%": {
            "text-shadow":
              "0 0 8.3333333333px snow, 0 -25px 50px cyan, -25px 25px 50px purple, 25px 25px 50px cyan",
          },
          "66%": {
            "text-shadow":
              "0 0 8.3333333333px snow, 0 -25px 50px violet, -25px 25px 50px cyan, 25px 25px 50px violet",
          },
        },
        paths: {
          "0%": {
            clipPath:
              "polygon(0% 43%, 83% 43%, 83% 22%, 23% 22%, 23% 24%, 91% 24%, 91% 26%, 18% 26%, 18% 83%, 29% 83%, 29% 17%, 41% 17%, 41% 39%, 18% 39%, 18% 82%, 54% 82%, 54% 88%, 19% 88%, 19% 4%, 39% 4%, 39% 14%, 76% 14%, 76% 52%, 23% 52%, 23% 35%, 19% 35%, 19% 8%, 36% 8%, 36% 31%, 73% 31%, 73% 16%, 1% 16%, 1% 56%, 50% 56%, 50% 8%)",
          },
          "5%": {
            clipPath:
              "polygon(0% 29%, 44% 29%, 44% 83%, 94% 83%, 94% 56%, 11% 56%, 11% 64%, 94% 64%, 94% 70%, 88% 70%, 88% 32%, 18% 32%, 18% 96%, 10% 96%, 10% 62%, 9% 62%, 9% 84%, 68% 84%, 68% 50%, 52% 50%, 52% 55%, 35% 55%, 35% 87%, 25% 87%, 25% 39%, 15% 39%, 15% 88%, 52% 88%)",
          },
          "30%": {
            clipPath:
              "polygon(0% 53%, 93% 53%, 93% 62%, 68% 62%, 68% 37%, 97% 37%, 97% 89%, 13% 89%, 13% 45%, 51% 45%, 51% 88%, 17% 88%, 17% 54%, 81% 54%, 81% 75%, 79% 75%, 79% 76%, 38% 76%, 38% 28%, 61% 28%, 61% 12%, 55% 12%, 55% 62%, 68% 62%, 68% 51%, 0% 51%, 0% 92%, 63% 92%, 63% 4%, 65% 4%)",
          },
          "45%": {
            clipPath:
              "polygon(0% 33%, 2% 33%, 2% 69%, 58% 69%, 58% 94%, 55% 94%, 55% 25%, 33% 25%, 33% 85%, 16% 85%, 16% 19%, 5% 19%, 5% 20%, 79% 20%, 79% 96%, 93% 96%, 93% 50%, 5% 50%, 5% 74%, 55% 74%, 55% 57%, 96% 57%, 96% 59%, 87% 59%, 87% 65%, 82% 65%, 82% 39%, 63% 39%, 63% 92%, 4% 92%, 4% 36%, 24% 36%, 24% 70%, 1% 70%, 1% 43%, 15% 43%, 15% 28%, 23% 28%, 23% 71%, 90% 71%, 90% 86%, 97% 86%, 97% 1%, 60% 1%, 60% 67%, 71% 67%, 71% 91%, 17% 91%, 17% 14%, 39% 14%, 39% 30%, 58% 30%, 58% 11%, 52% 11%, 52% 83%, 68% 83%)",
          },
          "76%": {
            clipPath:
              "polygon(0% 26%, 15% 26%, 15% 73%, 72% 73%, 72% 70%, 77% 70%, 77% 75%, 8% 75%, 8% 42%, 4% 42%, 4% 61%, 17% 61%, 17% 12%, 26% 12%, 26% 63%, 73% 63%, 73% 43%, 90% 43%, 90% 67%, 50% 67%, 50% 41%, 42% 41%, 42% 46%, 50% 46%, 50% 84%, 96% 84%, 96% 78%, 49% 78%, 49% 25%, 63% 25%, 63% 14%)",
          },
          "90%": {
            clipPath:
              "polygon(0% 41%, 13% 41%, 13% 6%, 87% 6%, 87% 93%, 10% 93%, 10% 13%, 89% 13%, 89% 6%, 3% 6%, 3% 8%, 16% 8%, 16% 79%, 0% 79%, 0% 99%, 92% 99%, 92% 90%, 5% 90%, 5% 60%, 0% 60%, 0% 48%, 89% 48%, 89% 13%, 80% 13%, 80% 43%, 95% 43%, 95% 19%, 80% 19%, 80% 85%, 38% 85%, 38% 62%)",
          },
          "1%, 7%, 33%, 47%, 78%, 93%": {
            "clip-path": "none",
          },
        },
        movement: {
          "0%": {
            top: "0px",
            left: "-20px",
          },
          "15%": {
            top: "10px",
            left: "10px",
          },
          "60%": {
            top: "5px",
            left: "-10px",
          },
          "75%": {
            top: "-5px",
            left: "20px",
          },
          "100%": {
            top: "10px",
            left: "5px",
          },
        },
        opacity: {
          "0%": {
            opacity: "0.1",
          },
          "5%": {
            opacity: "0.7",
          },
          "30%": {
            opacity: "0.4",
          },
          "45%": {
            opacity: "0.6",
          },
          "76%": {
            opacity: "0.4",
          },
          "90%": {
            opacity: "0.8",
          },
          "1%, 7%, 33%, 47%, 78%, 93%": {
            opacity: "0",
          },
        },
        font: {
          "0%": {
            "font-weight": "100",
            color: "#e0287d",
            filter: "blur(3px)",
          },
          "20%": {
            "font-weight": "500",
            color: "#fff",
            filter: "blur(0)",
          },
          "50%": {
            "font-weight": "300",
            color: "#1bc7fb",
            filter: "blur(2px)",
          },
          "60%": {
            "font-weight": "700",
            color: "#fff",
            filter: "blur(0)",
          },
          "90%": {
            "font-weight": "500",
            color: "#e0287d",
            filter: "blur(6px)",
          },
        },
        caret: {
          "50%": {
            color: "transparent",
          },
        },
        cursor: {
          "from, to": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "white",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "40%": {
            width: "100%",
          },
        },
        slide: {
          "33.3333333333%": {
            "font-size": "3rem",
            "letter-spacing": "3px",
          },
          to: {
            "font-size": "0",
            "letter-spacing": "0",
          },
        },
      },
      animation: {
        glow: "glow 10s ease-in-out both infinite",
        "glitch-a":
          "paths 5s step-end infinite, opacity 5s step-end infinite, font 8s step-end infinite, movement 10s step-end infinite",
        "glitch-b":
          "paths 5s step-end infinite, opacity 5s step-end infinite, font 8s step-end infinite, movement 15s step-end infinite",
        typing: "typing 4s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("./plugins/animationDelay")],
};