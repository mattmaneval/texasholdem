import PropTypes from 'prop-types';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import TableLayout from './TableLayout';
import GameplayInstruction from './AccordionPanel';

const AccordionContainer = styled.section`
  ${mixins.wrap};
`;

const Accordion = ({ instructions }) => (
  <AccordionContainer>
    <h2>Gameplay</h2>
    <TableLayout />
    {instructions.map((data) => (
      <GameplayInstruction steps={data} />
    ))}
  </AccordionContainer>
);

Accordion.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Accordion;
