import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: {
    light: "#8eacbb",
    normal: "#607d8b",
    dark: "#34515e",
  },
  secondary: {
    light: "#ff5f52",
    normal: "#c62828",
    dark: "#8e0000",
  },
  text: {
    black: "#000000",
    white: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
   
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  .App {
    display: flex;
    flex-direction:column;
    height: 100%;
  }
`;
