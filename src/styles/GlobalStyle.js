import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import Mixins from './mixins';

const GlobalStyle = createGlobalStyle`
  ${Resets};

  :root {

    /* Responsive */
    --wrap: calc(100% - 10rem);
    --wrap-mobile: 85%;
    --tablet: 1024px;
    --big-phone: 840px;
    --phone: 767px;
    --small-phone:480px;

    /* Color */
    --background: #000000;
    --background-alt: #1c7c54;
    --background-tert: #be0a02;
    --foreground: #fffcf9;
    --callout: #256eff;

    /* Fonts */
    --font: 'Junction Regular';
    --title: 'Cooper Hewitt Heavy';
    --heading: 'Cooper Hewitt Bold';
    --subheading: 'Eb Garamond Regular';

    /* Space */
    --space: 2rem;
    --half-space: $space / 2;

    /* Misc */
    --box-shadow: 1em 1em 4em -2em var(--background);
    --transition: 1s all ease-in;

    /* Media Queries */

    /* Primary Mobile - Tablet & Below */
    @media screen and (max-width: var(--tablet)) {} /* End Tablet & Below */

    /* Big Phone */
    @media screen and (max-width: var(--big-phone)) {} /* End Big Phone */

    /* Secondary Mobile - Phone & Below */
    @media screen and (max-width: var(--phone)) {} /* End Phone & Below */

    /* Small Phone */
    @media only screen and (max-width: var(--small-phone)) {} /* End Small Phone */
  }

  section {
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    /* Secondary Mobile - Phone & Below */
    @media screen and (max-width: var(--phone)) {
      padding: 3em 0;
    } /* End Phone & Below */
  }

  h1 {
    font-family: var(--title);
    font-size: 8em;
    color: var(--background);
    margin-bottom: 1rem;
    letter-spacing: -0.02EM;
  }

  h2 {
    color: var(--background);
    font-family: var(--font);
    font-size: 2.4em;
    margin-bottom: var(--space);
  }

  h3,
  h4 {
    color: var(--background);
    margin-bottom: var(--half-space);
    font-size: 2em;
    // letter-spacing: 0.26em;
    line-height: 1.4;
    font-family: var(--subheading);
  }

  h5 {
    font-family: var(--heading);
    font-size: 1.1rem;
    letter-spacing: .05em;
  }

  p {
    font-family: var(--font);
    color: var(--background);
    line-height: 140%;
    margin-bottom: $space;
    font-size: 1.25em;

    a {
      transition: all 0.2s ease-out;
      color: var(--background);
      text-decoration: none;

      &:hover {
        color: var(--callout);
      }
    }
  }

  ${Fonts};
  ${Mixins};

`;

export default GlobalStyle;
