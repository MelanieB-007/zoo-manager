import {
  Sedgwick_Ave_Display,
  DM_Sans,
  Playfair_Display,
} from "next/font/google";

// 1. Fonts initialisieren
const sedgwick = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap", // Verbessert die Lade-Performance
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = {
  colors: {
    brand: {
      white: "#ffffff",
      petrol: "#0e7a4a",
      petrolLight: "#d1e8e2",
      petrolDark: "#056d42",
      green: "#68B300",
      greenLight: "#a3cfbb",
      yellowLight: "#DAE67F",
      orange: "#FF8C00",
      orangeLight: "rgba(255, 165, 0, 1)",
      black: "rgba(0, 0, 0, 0.2)",
      grey: "rgba(255, 255, 255, 0.3)",
      greyLight: "rgba(255, 255, 255, 0.4)",
      warmWhite: "#fceabb",
    },
    ui: {
      bodyBg: "#f0f2f5",
      surface: "#ffffff",
      text: "#2c3531",
      border: "#d1e8e2",
    },
    header: {
      orange: "#ffaf4a",
      dropdownLink: "rgba(0, 0, 0, 0.05)",
    },
  },
  shadows: {
    soft: "0 8px 32px rgba(0, 0, 0, 0.2)",
    shadowHeaderButton: "0 2px 8px rgba(255, 140, 0, 0.3)",
    shadowHeaderButtonHover: "0 4px 12px rgba(255, 140, 0, 0.5)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
  fonts: {
    club: sedgwick.style.fontFamily,
    text: dmSans.style.fontFamily,
    heading: playfair.style.fontFamily,
    comic: '"Comic Sans MS", "Chalkboard SE", cursive',
  },
  borderRadius: "20px",
  borderRadiusIcon: "10px",
  glassBlur: "blur(10px)",
  widthPage: "1200px",
  glassBorder: "1px solid rgba(120, 255, 120, 0.15)",
  spacing: (n: number) => `${n * 8}px`, // Schnelles Grid-System (8, 16, 24px...)
};

// Das hier hilft TypeScript, deine Farben später per Autocomplete vorzuschlagen
export type ThemeType = typeof theme;
