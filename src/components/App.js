import GlobalStyle from '../styles/GlobalStyle';
import Hero from './Hero';
import Overview from './Overview';
import HandRankings from './HandRankings';
import Gameplay from './Gameplay';
import Winners from './Winners';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Overview />
      <HandRankings />
      <Gameplay />
      <Winners />
    </div>
  );
}

export default App;
