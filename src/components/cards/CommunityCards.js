import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const CommunityCards = () => {
  return(
    <Cards>
      <span className="red-card">&#127181;</span>
      <span className="black-card">&#127141;</span>
      <span className="red-card">&#127153;</span>
      <span className="red-card">&#127173;</span>
      <span className="black-card">&#127145;</span>
    </Cards>
  );
}

export default CommunityCards;
