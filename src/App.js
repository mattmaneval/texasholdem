import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import Mixins from './styles/mixins';

const Hero = styled.section `
  ${Mixins};
`;

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <header className="App-header">

      </header>
      <Hero>
        <h3>I'm using styled components!</h3>
        <p>This is a <a href="">LINK</a></p>
      </Hero>
    </div>
  );
}

export default App;
