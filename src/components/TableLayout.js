import styled from 'styled-components';
import mixins from '../styles/mixins';
import HoleCards from './cards/HoleCards';

const SectionTableLayout = styled.section `
  ${mixins.wrap};
`;

const TableGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 6em);
  justify-items: center;
  align-items: center;
`;

const Player1 = styled.div `
  grid-area: 4/4/5/5;
  font-size: 2em;
`;

const Player2 = styled.div `
  grid-area: 4/3/5/4;
  font-size: 2em;
`;

const Player3 = styled.div `
  grid-area: 4/2/5/3;
  font-size: 2em;
`;

const Player4 = styled.div `
  grid-area: 3/1/4/2;
  font-size: 2em;
  transform: rotate(90deg);
`;

const Player5 = styled.div `
  grid-area: 2/1/3/2;
  font-size: 2em;
  transform: rotate(90deg);
`;

const Player6 = styled.div `
  grid-area: 1/2/2/3;
  font-size: 2em;
`;

const Player7 = styled.div `
  grid-area: 1/3/2/4;
  font-size: 2em;
`;

const Player8 = styled.div `
  grid-area: 1/4/2/5;
  font-size: 2em;
`;

const Player9 = styled.div `
  grid-area: 2/5/3/6;
  font-size: 2em;
  transform: rotate(90deg);
`;

const Player10 = styled.div `
  grid-area: 3/5/4/6;
  font-size: 2em;
  transform: rotate(90deg);
`;

const DealerButton = styled.div `

`;

const SmallBlind = styled.div `

`;

const BigBlind = styled.div `

`;

const TableLayout = () => {
  return(
    <SectionTableLayout>
      <TableGrid>
        <Player1>
          <HoleCards />
        </Player1>
        <Player2>
          <HoleCards />
        </Player2>
        <Player3>
          <HoleCards />
        </Player3>
        <Player4>
          <HoleCards />
        </Player4>
        <Player5>
          <HoleCards />
        </Player5>
        <Player6>
          <HoleCards />
        </Player6>
        <Player7>
          <HoleCards />
        </Player7>
        <Player8>
          <HoleCards />
        </Player8>
        <Player9>
          <HoleCards />
        </Player9>
        <Player10>
          <HoleCards />
        </Player10>
        <DealerButton>DealerButton</DealerButton>
        <SmallBlind>Small Blind</SmallBlind>
        <BigBlind>Big Blind</BigBlind>
      </TableGrid>
    </SectionTableLayout>
  );
}

export default TableLayout;
