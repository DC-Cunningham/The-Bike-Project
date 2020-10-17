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

  h1 {
    font-family: 'Orbitron', sans-serif;
  }

  h2 {
    font-family: 'Orbitron', sans-serif;
  }

  h3 {
    font-family: 'Orbitron', sans-serif;
  }

  p {
      font-family: "opensans-regular",sans-serif;
      font-size: 18px;
      line-height: 40px;
      font-weight: 400;
      color: #838c95;
    }


    @media screen and (max-width: 1100px) {

}
`;
