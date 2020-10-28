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

h1, h2, h3 {
  font-family: 'Orbitron', sans-serif;
}

p { 
    font-family: 'Raleway', sans-serif;
}
  /* Form Styling */
  .form {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 300;
  max-width: 450px;
  padding: 30px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);

  & > label {
    display: block;
    color: #888;
    margin: 15px 0px;
  }
  & > input,
  textarea,
  select {
    display: block;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border: 2px solid #fff;
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.33);
    -webkit-box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.33);
  }

  & > input[type="button"],
  input[type="submit"] {
    margin-top: 40px;
    background: #c62828;
    padding: px 20px 8px 20px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
    font-weight: 600;
    -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
    -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
    box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
    border: 1px solid #c62828;
    font-size: 15px;
  }
  & > input[type="button"]:hover,
  input[type="submit"]:hover {
    background: #ff5f52;
    -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
    -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
    box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
  }
  & .loading {
    width: 100%;
    margin-top: 40px;
    text-align: center;

  }
  & .extraText {
    text-align: center;
    margin-top: 30px;
    color: #888;

  }
  }
`;
