import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import robotica from '../../assets/Robotica.jpg';
import robotica1 from '../../assets/Robotica1.jpg';
import robotica2 from '../../assets/Robotica2.jpg';
import robotica3 from '../../assets/Robotica3.jpg';

export default function Topic04() {
  return (
    <Container>
      <Content>
        <h1> Robotica </h1> 

        {/*<img src={robotica} alt="Robotica1"  height="200px"/>
        <img src={robotica1} alt="Robotica1" height="200px"/>*/}
        <img src={robotica2} alt="Robotica2" height="200px"/>
        <img src={robotica3} alt="Robotica3" height="200px"/>

        <section>
          <p align="justify">A robótica reúne três elementos: mecânica, eletrônica e programação. Ou seja, se
          houver a possibilidade de controlar de forma inteligente um equipamento, teremos um
          equipamento robótico (ROSÁRIO, 2005).</p>
          <p align="justify">Existem muitos tipos de robôs. Em filmes são apresentados os robôs que possuem
          inteligência própria e agem tomando decisões, geralmente são humanoides. Os robôs mais
          sofisticados que existem hoje conseguem caminhar, subir escadas e até abrir portas
          (ANGELO, 2007).</p>
          <p align="justify">Robôs são usados principalmente nas indústrias. Onde são multifuncionais, tendo
          por objetivo a realização de tarefas variadas. Os robôs são reprogramáveis, projetados para
          atuar como manipuladores, fazendo movimentando peças e materiais. Também podem ter
          diferentes ferramentas adaptadas à sua extremidade, permitindo fazerem soldagem, pintura,
          furação, corte, polimento, entre outras funções. </p>
          <p align="justify">Além da cirurgia robótica: as várias atuações dos robôs na medicina. O desenvolvimento e o
          uso de robôs na área da saúde está se tornando cada vez mais amplo. ... 
          Permite que cirurgiões acessem áreas de difícil acesso, como garganta, nariz e ouvido,
          para realizar cirurgias minimamente invasivas</p>
        </section>

        <iframe width="480" height="270" 
            src="https://www.youtube.com/embed/WrnNL0psOl8" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen title="Video04"> 
        </iframe>
      </Content>
      <Content>
        <Link to="/partner/4">
            Onde Aprender
        </Link>
      </Content>
    </Container>
  );
}
