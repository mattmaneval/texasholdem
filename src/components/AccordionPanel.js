import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import CirclePlus from './svgs/CirclePlus';
import CircleMinus from './svgs/CircleMinus';
import media from '../styles/media';
import theme from '../styles/theme';
const { space, color, fonts } = theme;

const AccordionPanel = styled.div `
  /* background-color: ${color.callout}; */
  padding: ${space.space};
  margin-bottom: ${space.halfSpace};
  border-radius: 0.3em;
  border: 1px solid ${color.foreground};
`;

const AccordionPanelHead = styled.div`
  ${mixins.flexBetween};
  color: ${color.foreground};
  font-size: 2em;
  line-height: 1.4;
  font-family: ${fonts.subHeading};

  @media ${media.secondary} {
    font-size: 1.6em;
  }
`;

const AccordionPanelButton = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;

  svg {
    height: 1.85rem;
    width: 1.85rem;
    stroke: ${color.foreground};
    vertical-align: middle;
  }
`;

const AccordionPanelContent = styled.div`
  display: grid;
  grid-gap: ${space.gap};
  margin-bottom: 5rem;

  @media ${media.bigPhone} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

class GameplayInstruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>{
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  render () {

    const { instruction, desc } = this.props.steps;
    const detailA = this.props.steps.detail.a;
    const detailB = this.props.steps.detail.b;
    const detailC = this.props.steps.detail.c;
    const detailD = this.props.steps.detail.d;
    const detailE = this.props.steps.detail.e;

    return (
      <AccordionPanel>
        <AccordionPanelHead>
          {instruction}
          <AccordionPanelButton onClick={this.handleClick}>
            <CirclePlus  collapsed={this.state.collapsed}/>
            <CircleMinus collapsed={this.state.collapsed} />
          </AccordionPanelButton>
        </AccordionPanelHead>
        <AccordionPanelContent className={this.state.collapsed ? 'collapsed' : 'expanded'}>
          <p>{desc}</p>
          {detailA ? <p>a. {detailA}</p> : null}
          {detailB ? <p>b. {detailB}</p> : null}
          {detailC ? <p>c. {detailC}</p> : null}
          {detailD ? <p>d. {detailD}</p> : null}
          {detailE ? <p>e. {detailE}</p> : null}
        </AccordionPanelContent>
      </AccordionPanel>

    );
  }

}

export default GameplayInstruction;
