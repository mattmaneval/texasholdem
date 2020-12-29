import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const RoyalFlush = () => {
  return(
    <Cards>
      <span className="black-card">&#127137;</span>
      <span className="black-card">&#127150;</span>
      <span className="black-card">&#127149;</span>
      <span className="black-card">&#127147;</span>
      <span className="black-card">&#127146;</span>
    </Cards>
  );
}

export default RoyalFlush;
