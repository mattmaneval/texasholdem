import React from 'react';
import styled, { keyframes } from 'styled-components';

const CardAnimation = keyframes `
  0% { transform: translateY(0) rotate(-630deg); }
  50% { transform: translateY(1.5em) rotate(45deg); }
  100% { transform: translateY(0) rotate(805deg); }
`;

const Card = styled.div `
   animation: ${CardAnimation} 3s infinite;
   font-size: 3em;
   transform: rotate(45deg);
`;

const ScrollDown = () => {
  return(
    <Card>&#127136;</Card>
  );
}

export default ScrollDown;
