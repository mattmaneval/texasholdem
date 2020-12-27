import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`

  ${Fonts};

  :root {

    // Color
    --orange: orange;

    // Fonts
    --font: 'Junction Regular';
    --title: 'Cooper Hewitt Heavy';
    --heading: 'Cooper Hewitt Bold';
    --subheading: 'Eb Garamond Regular';
  }
`;

export default GlobalStyle;
