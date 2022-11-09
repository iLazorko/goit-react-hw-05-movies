import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle.js';
import { Header, Nav, LinkStyled } from './Layout.styled.js';
import { Section } from 'pages/Home/Home.styled.js';

export default function Layout() {
  return (
    <>
      <Header>
        <Section>
          <Nav>
            <LinkStyled to="/" end="true">
              Home
            </LinkStyled>
            <LinkStyled to="/movies">Movies</LinkStyled>
          </Nav>
        </Section>
      </Header>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
