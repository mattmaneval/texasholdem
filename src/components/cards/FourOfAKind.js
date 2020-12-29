import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const FourOfAKind = () => {
  return(
    <Cards>
      <span className="black-card">&#127149;</span>
      <span className="red-card">&#127165;</span>
      <span className="red-card">&#127181;</span>
      <span className="black-card">&#127197;</span>
      <span className="red-card">&#127155;</span>
    </Cards>
  );
}

export default FourOfAKind;
