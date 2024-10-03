/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#0C0C0C",
        primary: "#0004B1",
        "secondary-50": "#FBFFF1",
        "secondary-100": "#D5FFE7",
        "secondary-200": "#69E59E",
        "vendor-purple-100": "#DCDDFF",
        "vendor-purple-200": "#8235BE",
        "vendor-gray--100": "#FAFAFB",
        "vendor-gray--200": "#F3F2F4",
        "vendor-gray--300": "#D7D7D7",
        "vendor-gray--400": "#8E8E93",
        "vendor-gray--500": "#48484A",
        "vendor-gray--600": "#374151",
        "vendor-gray--700": "#4B5563",
        "vendor-red-100": "#FFB3AE",
        "vendor-red-200": "#FF3B30",
        "vendor-orange-100": "#FFDCAA",
        "vendor-orange-200": "#FF9500",
        "vendor-yellow-100": "#FFEDA3",
        "vendor-yellow-200": "#FFCC00",
        "vendor-green-100": "#A4FFBB",
        "vendor-green-200": "#34C759",
        "vendor-teal-100": "#A7E3FF",
        "vendor-teal-200": "#5AC8FA",
        "vendor-blue-100": "#A6D0FF",
        "vendor-blue-200": "#007AFF",
        "system-gray-dark-200": "#48484A",
        "system-gray-dark-300": "#25252C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
