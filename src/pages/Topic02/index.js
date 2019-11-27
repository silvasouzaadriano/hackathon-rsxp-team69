import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import IAimg from '~/assets/ai-img.jpg';

export default function Topic02() {
  return (
    <Container>
      <Content>
        <h1>Inteligencia Artificial</h1>
        <img src={IAimg} alt="Inteligencia Artificial" height="200px"/>

        <section>
          <h3>O que é Inteligência Artificial?</h3>
          <p align="justify">
            Inteligência Artificial é como os computadores podem aprender para que eles possam interagir com os seres humanos da forma mais próxima que os humanos, ou às vezes até melhor que eles.
            Isso pode parecer coisa de filme de ficção científica, mas na verdade não, cada vez mais a Inteligência Artificial está entrando nas vida das pessoas com o objetivo de nos ajudar cada vez mais.
          </p>

          <h3>O que é o IBM Watson?</h3>
          <p align="justify">
            Primeiramente, a IBM, Internacional Business Machines, é uma empresa dos Estados Unidos voltada para a área da Informática e Tecnologia. Ela fabrica e vende hardwares, principalmente grandes computadores e nano-computadores, e diversos softwares que ajudam empresas do mundo todo.
            A IBM é uma das maiores empresas de tecnologia do mundo e é muito conhecida por ser uma das empresas que mais investe em pesquisa e desenvolvimento, ou seja, ela está sempre buscando criar novas tecnologias para ajudar o mundo.
            Uma das diversas tecnologias que a IBM desenvolveu foi o Watson. O Watson é uma plataforma, ou melhor, um supercomputador que resolve problemas cognitivos. A cognição é o processo que a mente humana utiliza para aprender novos conhecimentos a partir das informações que recebemos a todo momento. A IBM criou um computador e um software que simula esse processo de aprendizado humano, só quem aprende é a máquina, ou seja, podemos dizer que o Watson é uma Inteligência Artificial.
          </p>
          
          <p align="justify">O Watson é utilizado por empresas do mundo todo, nos mais diversos ramos, principalmente na medicina, finanças e atendimento. Hoje já temos sistemas que conseguem aprender sobre um paciente e consegue dizer quais doenças ele possui. Temos sistemas financeiros que aprendem sobre o mercado e consegue nos informar qual é o melhor investimento que podemos fazer. Ou mesmo lugares onde você se depara com um robô ao invés de uma recepcionista e nós conseguimos fazer perguntas e ele nos responde como se um humano. Incrível não é?</p>
          <p align="justify">Um vídeo bem bacana publicado pela própria IBM, explicando um pouco sobre o IBM Watson é este:</p> 
        </section>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/8X5GQbVydTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="ia"></iframe>
      </Content>
      <Content>
        <Link to="/partner">
            Onde Aprender
        </Link>
      </Content>
    </Container>
  );
}
