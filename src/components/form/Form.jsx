import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';
import { contactForm } from '../../tools/validateForms';
import { submitMessage } from '../../service/actions/messages';
import theme from '../../../theme';
import { TextForm } from './TextForm';
import { SendBtn } from '../button/SendBtn';

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
  const [submitedStatus, setSubmitedStatus] = useState(false);
  const [hasAlreadySentMessage, setHasAlreadySentMessage] = useState(false);
  const [forceReload, setForceReload] = useState(false);
  const [loader, setLoader] = useState(false);
  const [stateListener, setStateListener] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    description: '',
  });

  useEffect(() => {
    const canBeSubmited = contactForm(stateListener);
    setSubmitedStatus(canBeSubmited);
  }, [stateListener, forceReload]);

  const handleSubmit = async () => {
    setLoader(true);
    const saveMessageOnDb = await submitMessage(stateListener);
    if (saveMessageOnDb) {
      setHasAlreadySentMessage(true); // ✅ mostra a mensagem de sucesso
      setStateListener({
        name: '',
        surname: '',
        email: '',
        phone: '',
        description: '',
      });
      setForceReload(p => !p);
    }
    setLoader(false);
  };

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
