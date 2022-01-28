import { createGlobalStyle } from 'styled-components';
import { fontFamily } from '../../styles/fonts/fonts';
import { primaryColor } from '../../styles/theme/theme';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
  font-family: ${fontFamily}, sans-serif;
  background-color: ${primaryColor};
  }
`;

export default GlobalStyles;
