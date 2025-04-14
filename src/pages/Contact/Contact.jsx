import React, { useContext } from 'react';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';
import theme from '../../../theme';
import { ContactForm } from '../../components/Form';
import GoBackButton from '../../components/button/GoBackButton';


const Container = styled.div`
  background-color: ${theme.background[1]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin-top: 75px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.text[2]};
  margin-bottom: 8px;
`;

const Contact = ({ }) => {

  return (
    <Container>
      <GoBackButton/>
      <Content>
        <Header>
          <Title>{str.titlePages.Contact.Title}</Title>
        </Header>
        <ContactForm />
      </Content>
    </Container>
  );
};

export default Contact;
