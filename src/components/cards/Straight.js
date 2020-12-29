import styled from 'styled-components';
import media from '../../styles/media';

const Cards = styled.div `
  font-size: 10em;

  @media ${media.secondary} {
    font-size: 5em;
  }
`;

const Straight = () => {
  return(
    <Cards>
      <span className="red-card">&#127160;</span>
      <span className="black-card">&#127191;</span>
      <span className="red-card">&#127158;</span>
      <span className="red-card">&#127157;</span>
      <span className="black-card">&#127140;</span>
    </Cards>
  );
}

export default Straight;
