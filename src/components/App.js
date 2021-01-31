import GlobalStyle from '../styles/GlobalStyle';
import Hero from './Hero';
import Overview from './Overview';
import HandRankings from './HandRankings';
import Gameplay from './Gameplay';
import instructions from './instructions';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Overview />
      <HandRankings />
      <Gameplay instructions={instructions}/>
    </div>
  );
}

export default App;
