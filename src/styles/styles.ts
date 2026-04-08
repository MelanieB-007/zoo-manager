import { createGlobalStyle } from "styled-components";
import {
  DM_Sans,
  Playfair_Display,
  Sedgwick_Ave_Display,
} from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue-light: #b4d5e4;


    --font-club: ${sedgwick.style.fontFamily};
    --font-text: ${dmSans.style.fontFamily};
    --font-heading: ${playfair.style.fontFamily};
    --font-comic: "Comic Sans MS", "Chalkboard SE", cursive
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;

    background-color: #c4f3fb;

    background-attachment: fixed;
    font-family: var(--font-text), sans-serif;
  }
`;

export default GlobalStyle;
