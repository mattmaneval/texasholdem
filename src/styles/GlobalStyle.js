import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';

import theme from './theme';
const { responsive, space, color, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${Resets};

  :root {
    cursor: background-color: blue;
  }

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
    font-size: 8em;
    color: ${color.foreground};
    margin-bottom: 1rem;

    @media ${media.secondary} {
      font-size: 4em;
    }
  }

  h2 {
    color: ${color.foreground};
    font-family: ${fonts.font};
    font-size: 2.4em;
    margin-bottom: ${space.space};
  }

  h3,
  h4 {
    color: ${color.foreground};
    margin-bottom: ${space.space};
    font-size: 2em;
    line-height: 1.4;
    font-family: ${fonts.subHeading};
  }

  h5 {
    font-family: ${fonts.heading}
    font-size: 1.1rem;
    letter-spacing: .05em;
  }

  p {
    font-family: ${fonts.font};
    color: ${color.foreground};
    line-height: 140%;
    margin-bottom: ${space.space};
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
`;

export default GlobalStyle;
