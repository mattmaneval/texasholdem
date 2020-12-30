import GlobalStyle from '../styles/GlobalStyle';
import Hero from './Hero';
import Overview from './Overview';
import HandRankings from './HandRankings';
import Gameplay from './Gameplay';
import TableLayout from './TableLayout';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Overview />
      <TableLayout />
      <HandRankings />
      <Gameplay />

    </div>
  );
}

export default App;
