import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const StraightFlush = () => {
  return(
    <Cards>
      <span className="red-card">&#127165;</span>
      <span className="red-card">&#127163;</span>
      <span className="red-card">&#127162;</span>
      <span className="red-card">&#127161;</span>
      <span className="red-card">&#127160;</span>
    </Cards>
  );
}

export default StraightFlush;
