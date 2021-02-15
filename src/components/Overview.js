import styled from 'styled-components';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

const { space } = theme;

const SectionOverview = styled.section`
  ${mixins.wrap};
`;

const OverviewContent = styled.div`
  p {
    margin-bottom: ${space.space};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Overview = () => (
  <SectionOverview>
    <OverviewContent>
      <h2>The Game</h2>
      <p>
        Texas Hold&apos;em is a poker game where the players play against each other
        for &quot:the pot&quote; of money on the table. The object of the game is for players
        to form a five-card poker hand that ranks higher than the other players&apos;
        five-card hands.
      </p>
      <p>
        Each player may use any combination of the two cards initially dealt to
        them at the beginning of the game, referred to as &quot;hole&quot; cards, and the
        five cards dealt on the table throught the course of the game, referred
        to as &quot;community&quot; cards.
      </p>
      <p>
        The game is played using a standard 52-card deck and no joker. The deck
        should be shuffled, cut, and dealt by the dealer.
      </p>
    </OverviewContent>
  </SectionOverview>
);

export default Overview;
