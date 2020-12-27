import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`

  ${Fonts};

  :root {

    // Color
    --international-orange-engineering: #be0a02;
    --black: #000000;
    --baby-powder: #fffcf9;
    --blue-crayola: #256eff;
    --spanish-viridian: #1c7c54;

    // Fonts
    --font: 'Junction Regular';
    --title: 'Cooper Hewitt Heavy';
    --heading: 'Cooper Hewitt Bold';
    --subheading: 'Eb Garamond Regular';
  }
`;

export default GlobalStyle;


\
