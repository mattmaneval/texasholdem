import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';

import theme from './theme';
const { space, color, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};
  ${mixins};
  ${media};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${color.background};
  }

  section {
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    // Secondary Mobile
    @media ${media.secondary} {
      padding: 3em 0;
    } // End Secondary Mobile
  }

  h1 {
    font-family: ${fonts.title};
    font-size: 6em;
    text-transform: uppercase;
    color: ${color.foreground};
    margin-bottom: ${space.space};
    text-shadow: 0.2rem 0.2rem ${color.backgroundAlt};
    letter-spacing: 0.4rem;
    line-height: 110%;

    @media ${media.secondary} {
      font-size: 4em;
    }
  }

  h2 {
    color: ${color.foreground};
    font-family: ${fonts.heading};
    font-size: 2.4em;
    margin-bottom: ${space.space};
  }

  h3,
  h4 {
    color: ${color.foreground};
    margin-bottom: ${space.halfSpace};
    font-size: 2em;
    line-height: 1.4;
    font-family: ${fonts.subHeading};
  }

  h5 {
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  p {
    font-family: ${fonts.font};
    color: ${color.foreground};
    line-height: 140%;
    font-size: 1.25em;

    a {
      ${mixins.animate};
      color: ${color.foreground};
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${color.callout};
      }
    }
  }

  .cards-container {
    // margin-bottom: ${space.space};
  }

  .red-card,
  .black-card {
    // font-size: 6em;

    @media ${media.secondary} {
      // font-size: 35em;
    }
  }

  .red-card {
    color: ${color.backgroundTert};
  }

  .black-card {
    color: ${color.foreground};
  }

  .instruction {
    grid-column: 1/-1;
  }

  .instruction-detaiL {

  }
`;

export default GlobalStyle;
