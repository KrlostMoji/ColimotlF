import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueMain:'#19789F',
        orangeMain:'#F87F5D',
        secondBlue:'#053143',
        secondOrange:'#F8EBEA',
        blueLight: '#5AC6FC',
        greyLink:  '#E1E3E4',
        greyBody:'#E1E3E4',
        blueSuperLight: '#DBE9F6',
        softOrange: '#FEEDEB',
        mainBlack: '#48484A',
        blueThird:'#0E536F',
        blackOpacity: 'rgba(0, 0, 0, .9)'
      },
      dropShadow: {
        'blueMainShadow': '0 0 5px rgba(5, 49, 67, 1)',
        '1': '0 0 5px rgba(255, 255, 255, 1)',
        '0': '0 0 25px, rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        'banner': "url('/banner.jpg')",
        'banner2' : "url('/banner2.jpg')",
        'contacto': "url(/contact1.webp)"
      }
    },
  },
  plugins: [],
} satisfies Config;
