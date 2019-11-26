import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Content = styled.div`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;

const frameleft = keyframes`
  from {
    transform: translate3d(-100%,0,0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const FrameLeft = styled.div`
  display: inline-block;
  animation: ${frameleft} 6s linear;
`;

const frameright = keyframes`
  from {
    transform: translate3d(100%,0,0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const FrameRight = styled.div`
  display: inline-block;
  animation: ${frameright} 6s linear;
`;
