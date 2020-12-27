import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`

  ${Fonts};

  :root {

    // Color
    --background: #000000;
    --background-alt: #1c7c54;
    --background-tert: #be0a02;
    --foreground: #fffcf9;
    --blue-crayola: #256eff;

    // Fonts
    --font: 'Junction Regular';
    --title: 'Cooper Hewitt Heavy';
    --heading: 'Cooper Hewitt Bold';
    --subheading: 'Eb Garamond Regular';
  }
`;

export default GlobalStyle;
