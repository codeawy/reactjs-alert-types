import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  }
`;
