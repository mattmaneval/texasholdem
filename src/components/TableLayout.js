import styled, { css } from 'styled-components';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, fonts } = theme;

const SectionTableLayout = styled.section `
  ${mixins.wrap};
`;

const TableGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 6.5em);
  justify-items: center;
  align-items: center;
  background-color: ${color.backgroundAlt};
  border-radius: 20em;
  border: 3em solid ${color.foreground};

  @media ${media.primary} {
    grid-template-rows: repeat(4, 5em);
    border: 2.3em solid ${color.foreground};
  }

  @media ${media.secondary} {
    grid-template-rows: repeat(4, 3em);
    border: 1.3em solid ${color.foreground};
  }
`;

const Player1 = styled.div `
  grid-area: 4/4/5/5;
  font-size: 1rem;
  position: relative;
`;

const Player2 = styled.div `
  grid-area: 4/3/5/4;
  font-size: 1rem;
  position: relative;
`;

const Player3 = styled.div `
  grid-area: 4/2/5/3;
  font-size: 1rem;
  position: relative;
`;

const Player4 = styled.div `
  grid-area: 3/1/4/2;
  font-size: 1rem;
  transform: rotate(90deg);
  position: relative;
`;

const Player5 = styled.div `
  grid-area: 2/1/3/2;
  font-size: 1rem;
  transform: rotate(90deg);
  position: relative;
`;

const Player6 = styled.div `
  grid-area: 1/2/2/3;
  font-size: 1rem;
  position: relative;
`;

const Player7 = styled.div `
  grid-area: 1/3/2/4;
  font-size: 1rem;
  position: relative;
`;

const Player8 = styled.div `
  grid-area: 1/4/2/5;
  font-size: 1rem;
  position: relative;
`;

const Player9 = styled.div `
  grid-area: 2/5/3/6;
  font-size: 1rem;
  transform: rotate(90deg);
  position: relative;
`;

const Player10 = styled.div `
  grid-area: 3/5/4/6;
  font-size: 1rem;
  transform: rotate(90deg);
  position: relative;
`;

const DealerButton = styled.div `
  grid-area: 3/4/4/5;
  font-size: 0.8em;
  color: ${color.background};
  text-align: center;
  line-height: 2em;
  font-family: ${fonts.font};

  @media ${media.secondary} {
    font-size: 0.6em;
  }
`;

const SmallBlind = styled.div `
  grid-area: 3/3/4/4;
  font-size: 0.8em;
  color: ${color.background};
  text-align: center;
  line-height: 2em;
  font-family: ${fonts.font};

  @media ${media.secondary} {
    font-size: 0.6em;
  }
`;

const BigBlind = styled.div `
  grid-area: 3/2/4/3;
  font-size: 0.8em;
  color: ${color.background};
  text-align: center;
  line-height: 2em;
  font-family: ${fonts.font};

  @media ${media.secondary} {
    font-size: 0.6em;
  }
`;

const card = css `
  font-size: 1.65em;
  color: ${color.background};
  padding: 0.25rem;

  @media ${media.secondary} {
    font-size: 1.25em;
  }
`;

const TableCard1 = styled.span `
  ${card}
  position: absolute;
  left: 0.3em;
  transform: rotate(20deg);
`;

const TableCard2 = styled.span `
  ${card}
`;

const TableCard3 = styled.span `
  ${card}
  position: absolute;
  left: 0.3em;
  transform: rotate(20deg);
`;

const TableCard4= styled.span `
  ${card}
`;

const TableCard5 = styled.span `
  ${card}
  position: absolute;
  left: 0.3em;
  transform: rotate(20deg);
`;

const TableCard6 = styled.span `
  ${card}
`;

const TableCard7 = styled.span `
  ${card}
  position: absolute;
  left: 0.3em;
  transform: rotate(20deg);
`;

const TableCard8 = styled.span `
  ${card}
`;

const TableCard9 = styled.span `
  ${card}
  position: absolute;
  left: 0.3em;
  transform: rotate(20deg);
`;

const TableCard10 = styled.span `
  ${card}
`;

const TableCard11 = styled.span `
  ${card}
  position: absolute;
  left: -0.3em;
  transform: rotate(20deg);
`;

const TableCard12 = styled.span `
  ${card}
`;

const TableCard13 = styled.span `
  ${card}
  position: absolute;
  left: -0.3em;
  transform: rotate(20deg);
`;

const TableCard14 = styled.span `
  ${card}
`;

const TableCard15 = styled.span `
  ${card}
  position: absolute;
  left: -0.3em;
  transform: rotate(20deg);
`;

const TableCard16 = styled.span `
  ${card}
`;

const TableCard17 = styled.span `
  ${card}
  position: absolute;
  left: -0.3em;
  transform: rotate(20deg);
`;

const TableCard18 = styled.span `
  ${card}
`;

const TableCard19 = styled.span `
  ${card}
  position: absolute;
  left: -0.3em;
  transform: rotate(20deg);
`;

const TableCard20 = styled.span `
  ${card}
`;

const TableLayout = () => {
  return(
    <SectionTableLayout>
    <h2>Table Layout</h2>
      <TableGrid>
        <Player1>
          <TableCard1>&#127136;</TableCard1>
          <TableCard2>&#127136;</TableCard2>
        </Player1>
        <Player2>
          <TableCard3>&#127136;</TableCard3>
          <TableCard4>&#127136;</TableCard4>
        </Player2>
        <Player3>
          <TableCard5>&#127136;</TableCard5>
          <TableCard6>&#127136;</TableCard6>
        </Player3>
        <Player4>
          <TableCard7>&#127136;</TableCard7>
          <TableCard8>&#127136;</TableCard8>
        </Player4>
        <Player5>
          <TableCard9>&#127136;</TableCard9>
          <TableCard10>&#127136;</TableCard10>
        </Player5>
        <Player6>
          <TableCard11>&#127136;</TableCard11>
          <TableCard12>&#127136;</TableCard12>
        </Player6>
        <Player7>
          <TableCard13>&#127136;</TableCard13>
          <TableCard14>&#127136;</TableCard14>
        </Player7>
        <Player8>
          <TableCard15>&#127136;</TableCard15>
          <TableCard16>&#127136;</TableCard16>
        </Player8>
        <Player9>
          <TableCard17>&#127136;</TableCard17>
          <TableCard18>&#127136;</TableCard18>
        </Player9>
        <Player10>
          <TableCard19>&#127136;</TableCard19>
          <TableCard20>&#127136;</TableCard20>
        </Player10>
        <DealerButton>Dealer Button<br />&#9898;</DealerButton>
        <SmallBlind>Small Blind<br />&#10061;</SmallBlind>
        <BigBlind>Big Blind<br />&#10061; &#10061;</BigBlind>
      </TableGrid>
    </SectionTableLayout>
  );
}

export default TableLayout;
