import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import MobileApps from '~/assets/MobileApps.png';

export default function Topic03() {
  return (
    <Container>
      <Content>
        <h1>Aplicativos Móveis</h1>
      
        <img src={MobileApps} alt="MobileApps" height="200px"/> 
      
        <section>
          <h3>O que é?</h3>
          <p align="justify">Desenvolvimento de aplicações e sistemas para dispositivos móveis, ou desenvolvimento mobile é toda atividade de desenvolvimento de software para dispositivos móveis (smartphones). Estes aplicativos podem ser instalados durante a fabricação do aparelho, através dos sistemas operacionais de cada dispositivo e suas respectivas lojas de aplicativos.</p>

          <h3>Vantagens do uso de aplicativos mobile:</h3>
          <p align="justify">Melhor experiência para o usuário: Aplicativos mobile possibilitam uma melhor utilização de recursos gráficos e de interface, proporcionando um uso mais rápido e agradável para o usuário. Além disso, é possível disponibilizar conteúdo para ser acessado de modo offline, ou seja, sem conexão com a internet.
          Menor custo de acesso: Nos aplicativos toda a parte da interface já se encontra instalada no celular, o que implica um tráfego de dados muito menor para se acessar um determinado conteúdo da internet.
          Acesso a recursos nativos do celular: Os aplicativos possibilitam a utilização de recursos nativos do celular como a câmera fotográfica, GPS, bluetooth, agenda telefônica, entre outros.
          Vendas: É possível uma empresa vender bens, conteúdos e acessos premium dentro dos aplicativos.</p>

          <h3>Principais categorias de aplicativos móveis:</h3>
          <p align="justify">Serviços: Aplicações úteis para resolver problemas e aumentar a produtividade em mobilidade como consultas, previsões, mapas, operações em tempo real, entre outros.</p>
          <p align="justify">Informações: Acesso a conteúdos diversos em mobilidade como endereços, telefones, promoções, produtos, entre outros.</p>
          <p align="justify">Comunicação: Interação com outras pessoas através de e-mail e redes sociais.</p>
          <p align="justify">Entretenimento: Uso destinado à diversão como os jogos por exemplo.</p>
        </section> 

        <iframe width="426" height="240" src="https://www.youtube.com/embed/XcU9GEUZTQA" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="mobile"></iframe>
      </Content>
      
      <Content>
      <Link to="/partner/3">
          Onde Aprender
      </Link>
      </Content>
    </Container>
  );
}
