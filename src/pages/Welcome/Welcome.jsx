import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';

import styled from 'styled-components';
import bgImage from '../../assets/1.png';

const Container = styled.div`
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  max-width: 430px; /* Largura típica de celular (como iPhone 14) */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 40px;
  z-index: 1;
`;

const EnterButton = styled.button`
  z-index: 1;
  background-color: #0D2B2B;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #124040;
  }
`;


const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={logo} alt="Logo Olha Aqui! Condomínios" />
      <EnterButton onClick={() => navigate('/home')}>ENTRAR</EnterButton>
    </Container>
  );
};

export default Welcome;
