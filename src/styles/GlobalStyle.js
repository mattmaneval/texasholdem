import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};

  :root {

    // Responsive
    --wrap: calc(100% -10rem);
    --wrap-mobile: 85%;
    --tablet: 1024px;
    --big-phone: 840px;
    --phone: 767px;
    --small-phone:480px;

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

    // Space
    --space: 2rem;
    --half-space: $space / 2;

    // Misc
    --box-shadow: 1em 1em 4em -2em var(--background);
    --transition: 1s all ease-in;

    // Media Queries

    // Primary Mobile - Tablet & Below
    // @media screen and (max-width: $tablet) {} // End Tablet & Below

    // Big Phone
    // @media screen and (max-width: $big-phone) {} // End Big Phone

    // Secondary Mobile - Phone & Below
    // @media screen and (max-width: $phone) {} // End Phone & Below

    // Small Phone
    // @media only screen and (max-width: $small-phone) {} // End Small Phone
  }


`;

export default GlobalStyle;
