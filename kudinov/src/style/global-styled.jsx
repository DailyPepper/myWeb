import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--theme);
    color: var(--text);
    font-family: 'Public Sans';
  }

  html[data-theme="light"] {
    --theme-light: white;
    --text-light: black;
}

html[data-theme="dark"] {
    --theme-dark: black;
    --text-dark: white;
}
`;
