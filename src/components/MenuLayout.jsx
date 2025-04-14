import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import { MenuBtn } from './MenuBtn';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 900;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background[4]};
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

const FixedMenuBtn = styled(MenuBtn)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
`;

export default function MenuLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SideMenu $isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Overlay $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      <Container>
        {!menuOpen && <FixedMenuBtn onClick={() => setMenuOpen(true)} />}
        <Outlet />
      </Container>
    </>
  );
}
