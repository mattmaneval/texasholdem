import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import TableLayout from './TableLayout';
import GameplayInstruction from './AccordionPanel';

const Accordion = styled.section `
  ${mixins.wrap};
`;

const Gameplay = props => {
  return (
    <Accordion>
      <h2>Gameplay</h2>
      <TableLayout />
      {props.instructions.map((data, key) =>
        <GameplayInstruction steps={props.instructions[key]} />
      )}
    </Accordion>
  );
}

export default Gameplay;
