import GlobalStyle from '../styles/GlobalStyle';
import Hero from './Hero';
import Overview from './Overview';
import HandRankings from './HandRankings';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Overview />
      <HandRankings />
    </div>
  );
}

export default App;
