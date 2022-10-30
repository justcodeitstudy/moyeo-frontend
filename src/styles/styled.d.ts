import "styled-components";
import { Theme } from "jci-moyeo-design-system";

declare module "styled-components" {
  export interface DefaultTheme  {
    colors: typeof Theme.colors;
    typography: typeof Theme.typography;
    breakpoints: typeof Theme.breakpoints;
  }
}
