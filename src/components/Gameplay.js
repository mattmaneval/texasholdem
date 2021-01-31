import styled from 'styled-components';
import mixins from '../styles/mixins';
import TableLayout from './TableLayout';
import Winners from './Winners';
import media from '../styles/media';
import theme from '../styles/theme';
const { space } = theme;

const SectionGameplay = styled.section `
  ${mixins.wrap};
`;

const GameplayGrid = styled.div `
  display: grid;
  grid-gap: ${space.gap};
  margin-bottom: 5rem;


  @media ${media.bigPhone} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const Gameplay = (props) => {
  return(
    <SectionGameplay>
      <h2>Gameplay</h2>
      <TableLayout />
      {props.instructions.map((data, i) =>
        <GameplayGrid key={i}>
          <h3>{data.instruction}</h3>
          <p>{data.desc}</p>
          {data.detail.a ? <p>a. {data.detail.a}</p> : null}
          {data.detail.b ? <p>b. {data.detail.b}</p> : null}
          {data.detail.c ? <p>c. {data.detail.c}</p> : null}
          {data.detail.d ? <p>d. {data.detail.d}</p> : null}
          {data.detail.e ? <p>e. {data.detail.e}</p> : null}
        </GameplayGrid>
      )}
      <Winners />
    </SectionGameplay>
  );
}

export default Gameplay;
