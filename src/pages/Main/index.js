import React from 'react';

import { Container, Content, FrameLeft, FrameRight } from './styles';

export default function Main() {
  return (
    <Container>
      <Content>
        <p>
          <FrameLeft>
            <h1>Você já sabe qual profissão escolher?</h1>
          </FrameLeft>
        </p>
        <p>
          <FrameRight>
            <h1>Já pensou em tecnologia da informação?</h1>
          </FrameRight>
        </p>
        <p>
          <FrameLeft>
            <h1>Você já ouviu falar em linguagem de programação?</h1>
          </FrameLeft>
        </p>
        <p>
          <FrameRight>
            <h1>
              Clique nos links acima e veja onde a programação pode lhe levar
            </h1>
          </FrameRight>
        </p>
      </Content>
    </Container>
  );
}
