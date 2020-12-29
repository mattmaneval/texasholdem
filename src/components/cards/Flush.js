import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const Flush = () => {
  return(
    <Cards>
      <span className="red-card">&#127149;</span>
      <span className="red-card">&#127160;</span>
      <span className="red-card">&#127158;</span>
      <span className="red-card">&#127157;</span>
      <span className="red-card">&#127154;</span>
    </Cards>
  );
}

export default Flush;
