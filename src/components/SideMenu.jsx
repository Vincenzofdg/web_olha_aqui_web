import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import str from '../localized/languages/ptBr';

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.background[1]};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
  z-index: 1000;
  padding: 16px;
`;

const MenuItem = styled.div`
  padding: 12px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.text[2]};
`;

const SideMenu = ({ $isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/${path === 'home' ? 'home' : path}`);
    onClose();
  };

  return (
    <MenuWrapper $isOpen={$isOpen}>
      {str.sideMenu.map(([path, label]) => (
        <MenuItem key={path} onClick={() => handleNavigation(path)}>
          {label}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default SideMenu;
