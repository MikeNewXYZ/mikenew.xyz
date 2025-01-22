import type { Config } from "tailwindcss";
import tailwindCSSAnimated from "tailwindcss-animated";
import tailwindCSSReactAriaComponents from "tailwindcss-react-aria-components";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#E7E0CD",
      secondary: "#000000",
    },
    extend: {
      screens: {
        "h-600": { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [tailwindCSSAnimated, tailwindCSSReactAriaComponents],
} satisfies Config;
