// import logo from './logo.svg';
// import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const StyledText = styled.p `
  color: var(--orange);
  font-size: 10em;
  font-family: var(--font);
  text-transform: uppercase;
`;

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <header className="App-header">

      </header>
      <StyledText>I'm using styled components!</StyledText>
    </div>
  );
}

export default App;
