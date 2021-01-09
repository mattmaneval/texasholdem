import styled from 'styled-components';
import mixins from '../styles/mixins';
import TableLayout from './TableLayout';
import HoleCards from './cards/HoleCards';
import media from '../styles/media';
import Winners from './Winners';

import theme from '../styles/theme';
const { space } = theme;

const SectionGameplay = styled.section `
  ${mixins.wrap};
`;

const GameplayGrid = styled.div `
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-gap: ${space.gap};
  margin-bottom: 5rem;


  @media ${media.bigPhone} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const Gameplay = () => {
  return(
    <SectionGameplay>
      <h2>Gameplay</h2>
      <TableLayout />
      <h3>The Dealer Button</h3>
      <GameplayGrid>
        <p className="instruction">The game shall utilize a flat white disk with the words “dealer button” on it to visually designate which player is in the dealer position (in theory) for that hand.</p>
        <p className="instruction-detail">a. The dealer button shall rotate from player to player around the table clockwise after each round of play.</p>
        <p className="instruction-detail">b. The player with the dealer button is the last to receive cards, and has the right of last action on all rounds of play except for the first round, where the “big blind” shall have the right of last action. </p>
      </GameplayGrid>
      <h3>Blinds</h3>
      <GameplayGrid>
        <p className="instruction">The game also utilizes two separate disks, one with the words “small blind” and the other with the words “big blind” on them, to visually designate which player is in the “small blind” position and which player is in the “big blind” position.</p>
        <p className="instruction-detail">a. The small blind and the big blind are used to initiate action and are positioned immediately to the left of the dealer button and posted before the house dealer deals cards.</p>
        <p className="instruction-detail">b. On all subsequent wagering rounds (second, third, and fourth), the action is started by the first active player to the left of the dealer button.</p>
        <p className="instruction-detail">c. The small blind and big blind buttons shall rotate from player to player around the table clockwise after each round of play.</p>
      </GameplayGrid>
      <h3>Who gets Dealer Button first</h3>
      <GameplayGrid>
        <p className="instruction">When first opening a game, all players shall be dealt one card face-up, starting with the player to the immediate left of the house dealer and continuing clockwise around the table.</p>
        <p className="instruction-detail">a. The player with the highest ranked card shall receive the flat white disk with thewords “dealer.”</p>
      </GameplayGrid>
      <h3>Who places Blinds first</h3>
      <GameplayGrid>
        <p className="instruction">Once the dealer button has been distributed by the house dealer, the player to the immediate left of the player with the dealer button shall receive the small blind button and shall be required to place the small blind. Additionally, the player to the immediate left of the player who received the small blind button shall receive the big blind button and shall be required to place the big blind.</p>
        <p className="instruction-detail">a. Both blinds are predetermined and mandatory for the players with the small blind and big blind buttons, and are used to initiate action. </p>
        <p className="instruction-detail">b. Both blind wagers shall be placed in the designated wagering area, referred to as “the pot.”</p>
      </GameplayGrid>
      <h3>The Deal</h3>
      <GameplayGrid>
        <p className="instruction">Once the blinds have been placed in the pot, the house dealer shall deal one card facedown to each player, starting with the player to the left of the dealer button, the player that received the small blind button, and continuing clockwise around the table until all players have two cards face-down.</p>
        <p className="instruction-detail">a. These initial two cards are referred to as “hole cards.”</p>
        <HoleCards />
      </GameplayGrid>
      <h3>Wagering</h3>
      <GameplayGrid>
        <p className="instruction">Once each player has received their two hole cards, the first round of wagering will occur. Players are given the following options, starting with the player to the left of the player that received the big blind button and continuing clockwise around the table:</p>
        <p className="instruction-detail">a. Place a wager that is equal to the amount of the big blind or “call” a wager, meaning to match the amount wagered by another player; </p>
        <p className="instruction-detail">b. Place their two hole cards face-down into the center of the table, referred to as a “fold.” The hand shall be kept face-down and shall be collected by the house dealer, who shall then place them in the discard pile. A player that chooses to fold their hand will no longer participate during that round of play;</p>
        <p className="instruction-detail">c. Place a wager equal to the amount of the big blind as well as an additional amount within the posted table limit, referred to as a “raise;” </p>
        <p className="instruction-detail">d. Call the raise, re-raise, or fold their hand. There is a maximum of three raises per round of wagering, unless there are only two players participating during a round of wagering, in which case there is no limit to the number of raises;</p>
        <p className="instruction-detail">e. The player in the big blind position may “check”, meaning they do not wish to place an additional wager, or they may also raise, by placing an additional wager. </p>
      </GameplayGrid>
      <h3>The Pot</h3>
      <GameplayGrid>
        <p className="instruction">After all players have acted in turn and either called all wagers, raised or folded their hand, the house dealer shall move all player wagers into the pot.</p>
      </GameplayGrid>
      <h3>The Burn Card</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take the top card of the deck and place it in the discard pile without exposing it, referred to as the “burn card.”</p>
      </GameplayGrid>
      <h3>The Flop</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take the next three cards from the top of the deck and place them face-up on the table simultaneously.</p>
        <p className="instruction-detail">a. This is referred to as “the flop.”</p>
        <p className="instruction-detail">b. These are community cards and are shared by all players.</p>
      </GameplayGrid>
      <h3>Second Round of wagering</h3>
      <GameplayGrid>
        <p className="instruction">Once the first three community cards have been placed face-up on the table, the second round of wagering will occur.</p>
      </GameplayGrid>
      <h3>Actions</h3>
      <GameplayGrid>
        <p className="instruction">All active players that called all wagers and did not fold their hand, shall be given the following options, starting with the first active player to the left of the dealer button:</p>
        <p className="instruction-detail">a. Place a wager according to the established table limits; </p>
        <p className="instruction-detail">b. Do not make a wager, referred to as a “check”, with the option to call or raise a wager by another player;</p>
        <p className="instruction-detail">c. Call a wager according to the rules and guidelines used in the previous round of play; </p>
        <p className="instruction-detail">d. Fold their hand according to the rules and guidelines used in the previous round of play; </p>
        <p className="instruction-detail">e. Raise the pot according to the rules and guidelines used in the previous round of play. </p>
      </GameplayGrid>
      <h3>The Pot</h3>
      <GameplayGrid>
        <p className="instruction">After all players have acted in turn and either called all wagers, raised or folded their hand, the house dealer shall move all player wagers into the pot.</p>
      </GameplayGrid>
      <h3>Another Burn Card</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take the top card of the deck and place it in the discard pilewithout exposing it.</p>
      </GameplayGrid>
      <h3>The "Turn" Card</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take one card from the top of the deck and place it face-upon the table so that there are now a total of four community cards face-up on the table.</p>
        <p className="instruction-detail">a. This is referred to as “the turn card.”</p>
        <p className="instruction-detail">b. This card shall also become a community card and is shared by all players.</p>
      </GameplayGrid>
      <h3>Third Round of wagering</h3>
      <GameplayGrid>
        <p className="instruction">Once the fourth community card has been placed face-up on the table, the third round of wagering will occur.</p>
      </GameplayGrid>
      <h3>Actions</h3>
      <GameplayGrid>
        <p className="instruction">All active players shall be given the following options, starting with the first active player to the left of the dealer button:</p>
        <p className="instruction-detail">a. Place a wager according to the established table limits; </p>
        <p className="instruction-detail">b. Call a wager according to the rules and guidelines used in the previous round of play;</p>
        <p className="instruction-detail">c. Check according to the rules and guidelines used in the previous round of play;</p>
        <p className="instruction-detail">d. Fold their hand according to the rules and guidelines used in the previous round of play;</p>
        <p className="instruction-detail">e. Raise the pot according to the rules and guidelines used in the previous round of play. </p>
      </GameplayGrid>
      <h3>The Pot</h3>
      <GameplayGrid>
        <p className="instruction">After all players have acted in turn and either called all wagers, raised or folded their hand, the house dealer shall move all player wagers into the pot.</p>
      </GameplayGrid>
      <h3>Another Burn Card</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take the top card of the deck and place it in the discard pile without exposing it.</p>
      </GameplayGrid>
      <h3>The "River" Card</h3>
      <GameplayGrid>
        <p className="instruction">The house dealer shall then take one card from the top of the deck and place it face-up on the table so there are now a total of five community cards face-up on the table.</p>
        <p className="instruction-detail">a. This is referred to as “the river card.”</p>
        <p className="instruction-detail">b. This card shall also become a community card and is shared by all players.</p>
      </GameplayGrid>
      <h3>Final Round of wagering</h3>
      <GameplayGrid>
        <p className="instruction">Once the fifth community card has been placed face-up on the table, which is the final community card, the fourth and final round of wagering will occur.</p>
      </GameplayGrid>
      <h3>Actions</h3>
      <GameplayGrid>
        <p className="instruction">All active players shall be given the following options, starting with the first active player to the left of the dealer button:</p>
        <p className="instruction-detail">a. Place a wager according to the established table limits.</p>
        <p className="instruction-detail">b. Call a wager according to the rules and guidelines used in the previous round of play.</p>
        <p className="instruction-detail">c. Check according to the rules and guidelines used in the previous round of play;</p>
        <p className="instruction-detail">d. Fold their hand according to the rules and guidelines used in the previous round of play;</p>
        <p className="instruction-detail">e. Raise the pot according to the rules and guidelines used in the previous round of play.</p>
      </GameplayGrid>
      <h3>The Pot</h3>
      <GameplayGrid>
        <p className="instruction">After the fourth and final round of wagering has been completed, the house dealer shall move all wagers into the pot.</p>
      </GameplayGrid>
      <h3>The Showdown</h3>
      <GameplayGrid>
        <p className="instruction">All active players shall then enter into a showdown with each other and compare their hands.</p>
      </GameplayGrid>
      <Winners />
    </SectionGameplay>
  );
}

export default Gameplay;
