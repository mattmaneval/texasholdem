import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import CirclePlus from './svgs/CirclePlus';
import CircleMinus from './svgs/CircleMinus';
import media from '../styles/media';
import theme from '../styles/theme';

const { space, color, fonts } = theme;

const AccordionPanel = styled.div `
  padding: ${space.space};
  border-bottom: 2px solid ${color.foregroundLite};
`;

const AccordionPanelHead = styled.div`
  ${mixins.flexBetween};
  color: ${color.foreground};
  font-size: 1.65em;
  line-height: 1.4;
  font-family: ${fonts.heading};

  @media ${media.secondary} {
    font-size: 1.6em;
  }
`;

const AccordionPanelButton = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;
  padding: ${space.halfSpace};

  svg {
    height: 1.85rem;
    width: 1.85rem;
    stroke: ${color.foreground};
    vertical-align: middle;
  }
`;

const AccordionPanelContent = styled.div`
  p {
    margin-bottom: ${space.halfSpace};

    &:last-of-type {
      margin-bottom: 0;
    }
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
    }));
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
