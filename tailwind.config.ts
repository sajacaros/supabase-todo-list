import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx,mdx}", // 추가
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {}, // 내용 제거
  plugins: [require("@tailwindcss/typography")], // 추가
};
export default config;
