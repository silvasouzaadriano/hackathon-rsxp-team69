import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Content } from '~/components/Header/styles';

import MobileApps from '~/assets/MobileApps.png';

export default function Topic03() {
  return (
    <Container>
      <h1>Aplicativos Móveis</h1>
      <Container>
        <img src={MobileApps} alt="MobileApps" /> 
      </Container>
      <Container>
        <section>
        <p>O que é?</p>
        <p>Desenvolvimento de aplicações e sistemas para dispositivos móveis, ou desenvolvimento mobile é toda atividade de desenvolvimento de software para dispositivos móveis (smartphones). Estes aplicativos podem ser instalados durante a fabricação do aparelho, através dos sistemas operacionais de cada dispositivo e suas respectivas lojas de aplicativos.</p>

        <p>Vantagens do uso de aplicativos mobile:</p>
        <p>Melhor experiência para o usuário: Aplicativos mobile possibilitam uma melhor utilização de recursos gráficos e de interface, proporcionando um uso mais rápido e agradável para o usuário. Além disso, é possível disponibilizar conteúdo para ser acessado de modo offline, ou seja, sem conexão com a internet.
        Menor custo de acesso: Nos aplicativos toda a parte da interface já se encontra instalada no celular, o que implica um tráfego de dados muito menor para se acessar um determinado conteúdo da internet.
        Acesso a recursos nativos do celular: Os aplicativos possibilitam a utilização de recursos nativos do celular como a câmera fotográfica, GPS, bluetooth, agenda telefônica, entre outros.
        Vendas: É possível uma empresa vender bens, conteúdos e acessos premium dentro dos aplicativos.</p>

        <p>Principais categorias de aplicativos móveis:</p>
        <p>Serviços: Aplicações úteis para resolver problemas e aumentar a produtividade em mobilidade como consultas, previsões, mapas, operações em tempo real, entre outros.</p>
        <p>Informações: Acesso a conteúdos diversos em mobilidade como endereços, telefones, promoções, produtos, entre outros.</p>
        <p>Comunicação: Interação com outras pessoas através de e-mail e redes sociais.</p>
        <p>Entretenimento: Uso destinado à diversão como os jogos por exemplo.</p>
        </section> 
      </Container>
      <Container>
        <iframe width="426" height="240" src="https://www.youtube.com/embed/XcU9GEUZTQA" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>
      <Link to="/partner">
          Onde Aprender
      </Link>
    </Container>
  );
}
