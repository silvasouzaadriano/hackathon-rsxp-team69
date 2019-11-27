import React from 'react';
import { Link } from 'react-router-dom';

import Home from '~/assets/home.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Home} alt="Home" />
          </Link>
        </nav>
        <aside>
          <ul>
            <Link to="/topic01">
              <li>JOGOS</li>
            </Link>
            <Link to="/topic02">
              <li>INTELIGÊNCIA ARTIFICIAL</li>
            </Link>
            <Link to="/topic03">
              <li>MOBILE APPS</li>
            </Link>
            <Link to="/topic04">
              <li>ROBÓTICA</li>
            </Link>
          </ul>
        </aside>
      </Content>
    </Container>
  );
}
