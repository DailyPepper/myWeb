import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    /* background-color: var(--theme);
    color: var(--text); */
    font-family: 'Public Sans';
  }
  html[data-theme="dark"] {
    --theme: var(--theme-dark, #1C1D29);
    --text: var(--text-dark, #EC5198);
  }
  html[data-theme="light"] {
    --theme: var(--theme-light, white);
    --text: var(--text-light, black);
  }
`;
