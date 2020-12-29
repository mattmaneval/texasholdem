import styled from 'styled-components';

const Cards = styled.div `
  font-size: 10em;
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
