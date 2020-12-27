import { css } from 'styled-components';
import CooperHewittHeavyWoff from '../fonts/cooperhewitt-heavy-webfont.woff';
import CooperHewittHeavyWoff2 from '../fonts/cooperhewitt-heavy-webfont.woff2';
import CooperHewittBoldWoff from '../fonts/cooperhewitt-bold-webfont.woff';
import CooperHewittBoldWoff2 from '../fonts/cooperhewitt-bold-webfont.woff2';
import EbGaramondRegularWoff from '../fonts/ebgaramond08-regular-webfont.woff';
import EbGaramondRegularWoff2 from '../fonts/ebgaramond08-regular-webfont.woff2';
import JunctionRegularWoff from '../fonts/junction-regular-webfont.woff';
import JunctionRegularWoff2 from '../fonts/junction-regular-webfont.woff2';

const Fonts = css`
  @font-face {
      font-family: 'Cooper Hewitt Heavy';
      src: url(${CooperHewittHeavyWoff2}) format('woff2'), url(${CooperHewittHeavyWoff}) format('woff');
  };

  @font-face {
      font-family: 'Cooper Hewitt Bold';
      src: url(${CooperHewittBoldWoff2}) format('woff2'), url(${CooperHewittBoldWoff}) format('woff');
  };

  @font-face {
      font-family: 'EB Garamond Regular';
      src: url(${EbGaramondRegularWoff2}) format('woff2'), url(${EbGaramondRegularWoff}) format('woff');
  };

  @font-face {
      font-family: 'Junction Regular';
      src: url(${JunctionRegularWoff2}) format('woff2'), url(${JunctionRegularWoff}) format('woff');
  };
`;

export default Fonts;
