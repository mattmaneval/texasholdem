import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const StyledText = styled.p `
  color: var(--orange);
  font-size: 10em;
`;

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <StyledText>I'm using styled components!</StyledText>
    </div>
  );
}

export default App;
