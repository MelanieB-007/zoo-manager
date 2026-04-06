export const theme = {
  colors: {
    brand: {
      petrol: "#116466",
      petrolLight: "#d1e8e2",
      petrolDark: "#2c3531",
      green: "#8dbd5b",
      greenLight: "#a3cfbb",
      orange: "#ffcb9a",
    },
    ui: {
      bodyBg: "#f0f2f5",
      surface: "#ffffff",
      text: "#2c3531",
      border: "#d1e8e2",
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
  spacing: (n: number) => `${n * 8}px`, // Schnelles Grid-System (8, 16, 24px...)
};

// Das hier hilft TypeScript, deine Farben später per Autocomplete vorzuschlagen
export type ThemeType = typeof theme;
