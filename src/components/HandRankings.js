import styled from 'styled-components';
import mixins from '../styles/mixins';
import theme from '../styles/theme';
import media from '../styles/media';
import RoyalFlush from './cards/RoyalFlush';
import StraightFlush from './cards/StraightFlush';
import FourOfAKind from './cards/FourOfAKind';
import FullHouse from './cards/FullHouse';
import Flush from './cards/Flush';
import Straight from './cards/Straight';
import ThreeOfAKind from './cards/ThreeOfAKind';
import TwoPairs from './cards/TwoPairs';
import OnePair from './cards/OnePair';
import HighCard from './cards/HighCard';

const { color, space } = theme;

const SectionHandRankings = styled.section `
  ${mixins.wrap};

  p {
    margin-bottom: ${space.space};
  }
`;

const HandRankings = () => {
  return(
    <SectionHandRankings>
      <h2>Card Values and Hand Rankings</h2>
      <p>The rank of each card used in Texas Hold'em when forming a five-card high poker hand in order of highest to lowest rank: Ace, King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, and 2.</p>
      <p>The ace would be considered low any time the ace begins a straight or a straight flush.</p>

      <h3>#1 Royal Flush</h3>
      <p>A hand that consists of ace, king, queen, jack and 10 of the same suit.</p>
      <RoyalFlush />

      <h3>#2 Straight Flush</h3>
      <p>A hand that consists of five cards of the same suit in consecutive ranking. King, queen, jack, 10 and 9 is the highest ranked straight flush and a 5, 4, 3, 2 and ace is the lowest ranked straight flush.</p>
      <StraightFlush />

      <h3>#3 Four of a Kind</h3>
      <p>A hand that consists of four cards of the same rank. Four aces is the highest ranked four of a kind and four 2s is the lowest ranked four of a kind.</p>
      <FourOfAKind />


      <h3>#4 Full House</h3>
      <p>A hand that consists of a three of a kind and a pair. Three aces and two kings is the highest ranked full house and three 2’s and two 3’s is the lowest ranked full house</p>
      <FullHouse />

      <h3>#5 Flush</h3>
      <p>A hand that consists of five cards of the same suit, but not in consecutive ranking. An ace, king, queen, jack and 9 is the highest ranked flush and a 7, 5, 4, 3 and 2 is the lowest ranked flush.</p>
      <Flush />

      <h3>#6 Straight</h3>
      <p>A hand that consists of five cards that are in consecutive ranking, but that are not the same suit. An ace, king, queen, jack and 10 is the highest ranked straight and a 5, 4, 3, 2 and ace is the lowest ranked straight.</p>
      <Straight />

      <h3>#7 Three of a Kind</h3>
      <p>A hand that consists of three cards of the same rank. Three aces is the highest ranked three of a kind and three 2’s is the lowest ranked three of a kind.</p>
      <ThreeOfAKind />

      <h3>#8 Two Pairs</h3>
      <p>A hand that consists of two pairs. Two aces and two kings is the highest ranked two pairs and two 3’s and two 2’s is the lowest ranked two pairs.</p>
      <TwoPairs />

      <h3>#9 One Pair</h3>
      <OnePair />
      <p>A hand that consists of two cards of the same rank. Two aces is the highest ranked pair and two 2’s is the lowest ranked pair</p>

      <h3>#10 High Card</h3>
      <p>A hand that consists of five cards that do not make any of the hands listed above. An ace, king, queen, jack and 9 is the highest ranked high card hand and 7, 5, 4, 3 and 2 the lowest ranked high card hand.</p>
      <HighCard />

    </SectionHandRankings>
  );
}

export default HandRankings;
