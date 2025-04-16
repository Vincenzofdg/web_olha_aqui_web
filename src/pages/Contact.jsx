import React from 'react';
import styled from 'styled-components';
import str from '../localized/languages/ptBr';
import { ContactForm } from '../components/form/Form';

const PageContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text[2]};
  margin-top: 40px;
  margin-bottom: 16px;
`;

const Contact = () => {
  return (
    <>
    
      <PageContainer>
        <ContentWrapper>
          <SectionTitle>{str.titlePages.Contact.Title}</SectionTitle>
          <ContactForm />
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default Contact;
