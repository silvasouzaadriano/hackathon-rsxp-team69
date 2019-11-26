import React from 'react';
import { Link } from 'react-router-dom';
import history from '~/services/history';

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
            <Link to="/topic">
              <li>JOGOS</li>
            </Link>
            <Link to="/topic">
              <li>INTELIGÊNCIA ARTIFICIAL</li>
            </Link>
            <Link to="/topic">
              <li>MOBILE APPS</li>
            </Link>
            <Link to="/topic">
              <li>ROBÓTICA</li>
            </Link>
          </ul>
        </aside>
      </Content>
    </Container>
  );
}
