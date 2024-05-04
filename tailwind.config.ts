import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        flower: "url('/flower-pattern.jpg')",
        "falling-petals": "url('/sakura-leaves.gif')",
      },
      gridTemplateRows: {
        "4": "repeat(4, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        "3": "repeat(3, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "21": "repeat(21, minmax(0, 1fr))",
      },
      colors: {
        "navy-blue": "#303960",
        "light-green": "#f2fae1",
        "bold-pink": "#f5b19c",
        "light-pink": "#f2c5b8",
        "pale-yellow": "#f6c570",
        "light-yellow": "#fad189",
      },
    },
  },
  plugins: [],
};
export default config;
