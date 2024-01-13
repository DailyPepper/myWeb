import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--theme);
    color: var(--text);
    font-family: '';
  }

  html[data-theme="light"] {
    --theme: white;
    --text: black;
  }

  html[data-theme="dark"] {
    --theme: black;
    --text: white;
  }
`;
