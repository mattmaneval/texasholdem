import GlobalStyle from '../styles/GlobalStyle';
import styled from 'styled-components';
import mixins from '../styles/mixins';

import theme from '../styles/theme';
const { color } = theme;

const Hero = styled.section `
  ${mixins.wrap};
`;

const RedAmps = styled.span `
  color: ${color.backgroundTert};
`;

const Card = styled.div `
  font-size: 12em;
`;

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <Hero>
        <h1>Texas Hold'em Crash Course</h1>
        <h3>They say poker takes ten minutes to learn and a lifetime to master. &#9824; <RedAmps>&#9829; </RedAmps>&#9827; <RedAmps>&#9830;</RedAmps></h3>
        <p>This website will at least get you on your way to becoming a poker jedi.<a>LINK</a></p>
        <Card>&#127137; &#127150; &#127149; &#127147; &#127146;</Card>
      </Hero>
    </div>
  );
}

export default App;
