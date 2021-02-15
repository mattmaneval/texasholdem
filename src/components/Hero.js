import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import media from '../styles/media';

const { color, space } = theme;

const HeroSection = styled.section`
  ${mixins.wrap};
  ${mixins.flexCenter};
  flex-direction: column;
  text-align: center;
`;

const Suits = styled.div`
  margin-bottom: ${space.space};
  font-size: 4em;

  @media ${media.primary} {
    font-size: 3em;
  }

  @media ${media.secondary} {
    font-size: 2em;
  }
`;

const HeroText = styled.p`
  max-width: 35em;
  color: ${color.foreground};
`;

const RedAmps = styled.span`
  color: ${color.backgroundTert};
`;

const Hero = () => (
  <HeroSection>
    <Suits>
      &#9824;
      <RedAmps>
        &#9829;
      </RedAmps>
      &#9827;
      <RedAmps>
        &#9830;
      </RedAmps>
    </Suits>
    <h1>
      Texas Hold&apos;em
      <br />
      Playing Guide
    </h1>
    <HeroText>
      They say poker takes ten minutes to learn and a lifetime to master. This
      guide will get you on your way to becoming a poker playing Jedi.
    </HeroText>
  </HeroSection>
);

export default Hero;
