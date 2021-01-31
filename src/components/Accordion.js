import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import TableLayout from './TableLayout';
import GameplayInstruction from './AccordionPanel';

const AccordionContainer = styled.section `
  ${mixins.wrap};
`;

const Accordion = props => {
  return (
    <AccordionContainer>
      <h2>Gameplay</h2>
      <TableLayout />
      {props.instructions.map((data, key) =>
        <GameplayInstruction steps={props.instructions[key]} />
      )}
    </AccordionContainer>
  );
}

export default Accordion;
