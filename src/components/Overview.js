import styled from 'styled-components';
import mixins from '../styles/mixins';
import media from '../styles/media';
import HoleCards from './cards/HoleCards';
import CommunityCards from './cards/CommunityCards';
import theme from '../styles/theme';
const { color, space } = theme;

const SectionOverview = styled.section `
  ${mixins.wrap};
`;

const OverviewContent = styled.div `
  p {
    margin-bottom: ${space.space};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Overview = () => {
  return(
    <SectionOverview>
      <OverviewContent>
        <h2>The Game</h2>
        <p>Texas Hold'em is a poker game where the players play against each other for "the pot" of money on the table. The object of the game is for players to form a five-card poker hand that ranks higher than the other players' five-card hands.</p>
        <p> Each player may use any combination of the two cards initially dealt to them at the beginning of the game, referred to as "hole" cards, and the five cards dealt on the table throught the course of the game, referred to as "community" cards.</p>
        <p>The game is played using a standard 52-card deck and no joker. The deck should be shuffled, cut, and dealt by the dealer.</p>
      </OverviewContent>
    </SectionOverview>
  );
}

export default Overview;
