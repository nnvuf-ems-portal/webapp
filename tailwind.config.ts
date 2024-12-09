import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth:{
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#191277",
          '50': '#e7e8f5',
          '100': '#c3c5e6',
          '200': '#9ca0d6',
          '300': '#757bc5',
          '400': '#595eb9',
          '500': '#3d42ac',
          '600': '#383aa3',
          '700': '#2f3097',
          '800': '#27268b',
          '900': '#191277',
        },
        secondary: {
          DEFAULT: "#3b424f",
          '50': '#edeef2',
          '100': '#d1d6de',
          '200': '#b3bac6',
          '300': '#969faf',
          '400': '#7f8a9d',
          '500': '#69768c',
          '600': '#5c687b',
          '700': '#4b5465',
          '800': '#3b424f',
          '900': '#282e38',
        },
      },
      spacing: {
        '17': '4.25rem',
        '18': '4.5rem',
        '108': '27rem',
        '120': '30rem',
        '128': '32rem',
      },
      width: {
        '1/7': '14.2857143%',
      },
    },
  },
  plugins: [],
} satisfies Config;
