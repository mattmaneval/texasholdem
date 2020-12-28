import { css } from 'styled-components';
// import { GlobalStyle } from './GlobalStyle';

const mixins = {
  wrap: css`
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 80em;
    width: var(--wrap);

    /* Secondary Mobile - Phone & Below */
    @media screen and (max-width: var(--phone)) {
      width: var(--wrap-mobile);
    } /* End Phone & Below */
  `,
}




export default mixins;
