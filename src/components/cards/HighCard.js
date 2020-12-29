import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const HighCard = () => {
  return(
    <Cards>
      <span className="red-card">&#127137;</span>
      <span className="black-card">&#127147;</span>
      <span className="red-card">&#127162;</span>
      <span className="black-card">&#127144;</span>
      <span className="black-card">&#127140;</span>
    </Cards>
  );
}

export default HighCard;
