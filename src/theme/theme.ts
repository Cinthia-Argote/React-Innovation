import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  borderRadius: "5px",
  mainPadding: "16px",
  colors: {
    black: "#252530",
    blackGray: "#363646",
    dimGray: "#707070",
    lightGray: "#F3F1F1",
    blueGray: "#D7D7EF",
    gray: "#c2c2c2",
    main: "#FF1744",
    secondary: "#FF0023",
    white: "#FFFFF",
  },
  devices: {
    mobileL: "(min-width: 425px)",
    tablet: "(min-width: 768px)",
    laptop: "(min-width: 1024px)",
    desktop: "(min-width: 1440px)",
  },
};
