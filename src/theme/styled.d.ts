import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    mainPadding: string;
    colors: {
      white: string;
      blueGray: string;
      lightGray: string;
      dimGray: string;
      gray: string;
      blackGray: string;
      main: string;
      secondary: string;
      black: string;
    };
    devices: {
      mobileL: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
