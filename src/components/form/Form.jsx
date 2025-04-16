import React from 'react';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';
import theme from '../../../theme';
import { TextForm } from './TextForm';
import { SendBtn } from '../button/SendBtn';
import { useContactForm } from '../../hooks/useContactForm';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const MessageSent = styled.div`
  background-color: ${theme.background[1]};
  color: ${theme.text[2]};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  width: 80%;
  border-radius: 8px;
  margin: 60px auto 0 auto;
  text-align: center;
`;

function ContactForm() {
  const {
    submitedStatus,
    hasAlreadySentMessage,
    loader,
    stateListener,
    setStateListener,
    handleSubmit,
  } = useContactForm();

  if (hasAlreadySentMessage) {
    return <MessageSent>{str.weHaveRecived}</MessageSent>;
  }

  return (
    <Container>
      {str.form.contact.map((field, i) => (
        <TextForm
          key={`contactForm-${i}`}
          info={field}
          setter={setStateListener}
        />
      ))}
      <SendBtn action={handleSubmit} canBenPressed={submitedStatus && !loader} />
    </Container>
  );
}

export { ContactForm };
