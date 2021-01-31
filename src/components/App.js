import GlobalStyle from '../styles/GlobalStyle';
import Hero from './Hero';
import Overview from './Overview';
import HandRankings from './HandRankings';
import Accordion from './Accordion';
import instructions from './instructions';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Overview />
      <HandRankings />
      <Accordion instructions={instructions} />
    </div>
  );
}

export default App;
