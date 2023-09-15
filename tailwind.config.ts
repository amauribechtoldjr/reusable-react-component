import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      purple: {
        50: "#fcf3ee",
        100: "#f4cfbb",
        200: "#eeb798",
        300: "#e99f76",
        400: "#e38754",
        500: "#cc7a4c",
        600: "#b66c43",
        700: "#9f5f3b",
        800: "#885132",
        900: "#72442a",
      },
      gray: {
        50: "#F6F5F7",
        100: "#E9E8ED",
        200: "#D3D1D9",
        300: "#B7B4BF",
        400: "#A19DAB",
        500: "#878294",
        600: "#706A80",
        700: "#5A526B",
        800: "#443D57",
        900: "#312B46",
      },
      white: "#FFFFFF",
      black: "#000000",
      error: "#ff3333",
    },
  },
  plugins: [],
} satisfies Config;
