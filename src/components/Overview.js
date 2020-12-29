import styled from 'styled-components';
import mixins from '../styles/mixins';
import media from '../styles/media';
import HoleCards from './cards/HoleCards';
import CommunityCards from './cards/CommunityCards';
import theme from '../styles/theme';
const { space } = theme;

const SectionOverview = styled.section `
  ${mixins.wrap};
`;

const OverviewGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${space.gap};

  // Primary Mobile
  @media ${media.primary} {
    grid-template-columns: repeat(1, 1fr);
  } // End Primary Mobile
`;

const Overview = () => {
  return(
    <SectionOverview>
      <h2>The Game</h2>
      <OverviewGrid>
        <div>
          <p>Texas Hold'em is a poker game where the players play against each other for "the pot" of money on the table. The object of the game is for players to form a five-card poker hand that ranks higher than the other players' five-card hands.</p>
        </div>
        <div>
          <p> Each player may use any combination of the two cards initially dealt to them at the beginning of the game, referred to as "hole" cards, and the five cards dealt on the table throught the course of the game, referred to as "community" cards.</p>
        </div>
        <div>
          <h5>2 Hole Cards</h5>
          <HoleCards />
        </div>
        <div>
          <h5>5 Community Cards</h5>
          <CommunityCards />
        </div>
        <div>
          <p>The game is played using a standard 52-card deck and no joker. The deck should be shuffled, cut, and dealt by the dealer.</p>
        </div>
      </OverviewGrid>
    </SectionOverview>
  );
}

export default Overview;
