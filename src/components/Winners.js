import styled from 'styled-components';
import mixins from '../styles/mixins';
import theme from '../styles/theme';
const { space } = theme;

const SectionWinners = styled.section `
  ${mixins.wrap};
`;

const WinnersGrid = styled.div `
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: ${space.gap};
`;

const Winners = () => {
  return(
    <SectionWinners>
      <WinnersGrid>
        <h2>How winners are determined and paid</h2>
        <p>The pot shall be awarded to the player with the highest ranking five-card poker hand, according to the hand and card rankings shown above. All other players shall lose.</p>
        <p>In the event that more than one player has the highest ranked hand, the pot shall be split equally among all players with the winning hand.</p>
        <p>In the instance that there are an odd number of chips, the odd chips shall be awarded to the player closest to the left of the dealer button.</p>
      </WinnersGrid>
    </SectionWinners>
  );
}

export default Winners;
