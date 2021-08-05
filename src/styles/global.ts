import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // font-size: 15px;
    }
    @media (max-width: 720px) {
      font-size: 80.5%;
    }
  }
`;
