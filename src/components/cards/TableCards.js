import styled from 'styled-components';
import theme from '../../styles/theme';

const { color } = theme;

const TableCard = styled.span`
  font-size: 1.65em;
  color: ${color.background};
  padding: 0.25rem;
`;

const TableCards = () => (
  <div className="tabele-cards-container">
    <TableCard>&#127136;</TableCard>
    <TableCard>&#127136;</TableCard>
  </div>
);

export default TableCards;
