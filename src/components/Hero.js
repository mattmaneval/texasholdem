import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const { color, space } = theme;

const HeroSection = styled.section `
  ${mixins.wrap};
  text-align: center;
`;

const Suits = styled.div `
  margin-bottom: ${space.space};
  font-size: 2em;
`;

const HeroText = styled.p `
  display: inline-block;
  max-width: 35em;
`;

const RedAmps = styled.span `
  color: ${color.backgroundTert};
`;

const Hero = () => {
  return(
    <HeroSection>
      <Suits>&#9824; <RedAmps>&#9829; </RedAmps>&#9827; <RedAmps>&#9830;</RedAmps></Suits>
      <h1>Texas Hold'em<br />Playing Guide</h1>
      <HeroText>They say poker takes ten minutes to learn and a lifetime to master. This website will get you on your way to becoming a poker playing Jedi.</HeroText>
    </HeroSection>
  );
}

export default Hero;
