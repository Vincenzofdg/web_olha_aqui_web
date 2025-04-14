import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Logo,
  EnterButton
} from './styles';

import logo from '../../assets/logo.png';

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
