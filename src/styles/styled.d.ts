import "styled-components";
import { theme } from "./theme";

// Wir sagen styled-components, dass unser 'DefaultTheme'
// exakt so aussieht wie unser 'theme' Objekt in der theme.ts
type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
