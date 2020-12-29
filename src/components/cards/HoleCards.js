import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const HoleCards = () => {
  return(
    <Cards>
      <span className="red-card">&#127159;</span>
      <span className="black-card">&#127178;</span>
    </Cards>
  );
}

export default HoleCards;
