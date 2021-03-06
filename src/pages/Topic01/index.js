import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import doom from '../../assets/DOOM.jpg';
import sonic from '../../assets/Sonic.jpg';
import mario from '../../assets/Mario.jpg';
import destiny from '../../assets/Destiny.jpg';

export default function Topic01() {
  return (
    <Container>
      <Content>
        <h1> Desenvolvimento de Games</h1> 
 
        <img src={doom} alt="doom" height="200px"/>
        {/* <img src={sonic} alt="somic" height="200px"/> */}
        <img src={mario} alt="mario" height="200px"/>
        <img src={destiny} alt="destiny" height="200px"/>

        <section>
          <p align="justify">O dev que resolver ingressar nestar área tera contato com direto com design e desenvolvimeto do jogo.</p>
          <p align="justify">Participando de todas as estapas desde a criação , regras e testes.</p> 
          <p align="justify">O dev tambem participa da criação e animação dos personagens,ajudando nas definição e roteiro do game.</p> 
        </section>

        <iframe width="481" height="270" src="https://www.youtube.com/embed/ue1u7FLpWCs" 
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
             picture-in-picture" allowfullscreen title="games">
        </iframe>
      </Content>

      <Content>
        <Link to="/partner/1">Onde Aprender</Link>
      </Content>

    </Container>
  );
}
