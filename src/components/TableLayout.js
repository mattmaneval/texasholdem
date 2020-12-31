import styled, { css } from 'styled-components';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, fonts } = theme;

const TableLayoutContainer = styled.div `
  padding: 3em 0;
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

const Card = styled.span `
  font-size: 2.65em;
  color: ${color.background};
  padding: 0.25rem;
  position: ${props => props.absolute ? "absolute" : "relative"};
  ${props => props.transform ? "transform: rotate(20deg);" : null };
  ${props => props.leftNegative ? "left: -0.3em" : null };
  ${props => props.left ? "left: 0.3em" : null };

  @media ${media.secondary} {
    font-size: 1.25em;
  }
`;

const TableLayout = () => {
  return(
    <TableLayoutContainer>
      <TableGrid>
        <Player1>
          <Card transform absolute left>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player1>

        <Player2>
          <Card transform absolute left>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player2>

        <Player3>
          <Card transform absolute left>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player3>

        <Player4>
          <Card transform absolute left>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player4>

        <Player5>
          <Card transform absolute left>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player5>

        <Player6>
          <Card transform absolute leftNegative>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player6>

        <Player7>
          <Card transform absolute leftNegative>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player7>

        <Player8>
          <Card transform absolute leftNegative>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player8>

        <Player9>
          <Card transform absolute leftNegative>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player9>

        <Player10>
          <Card transform absolute leftNegative>&#127136;</Card>
          <Card>&#127136;</Card>
        </Player10>

        <DealerButton>Dealer Button<br />&#9898;</DealerButton>
        <SmallBlind>Small Blind<br />&#10061;</SmallBlind>
        <BigBlind>Big Blind<br />&#10061; &#10061;</BigBlind>
      </TableGrid>
    </TableLayoutContainer>
  );
}

export default TableLayout;
