import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';

const Container = styled.div`
  padding: 24px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: 190px;
  object-fit: cover;
  background-color: #000;
  display: block;
  margin: 0 auto 16px auto;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const ActionButton = styled.a`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background[2]};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
`;

const GoBack = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background[1]};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const AdDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <Container>Anúncio não encontrado.</Container>;

  const { title, image, whatsapp } = state;
  const imageUrl = image?.startsWith('http') ? image : `${str.website}${image}`;

  return (
    <Container>
      <Title>{title}</Title>
      <CardImage
        src={imageUrl}
        alt={title}
        onError={(e) => (e.target.style.display = 'none')}
      />
      <ButtonGroup>
        {whatsapp && (
          <ActionButton
            href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: 40, height: 40 }}
            />
          </ActionButton>
        )}
        <GoBack onClick={() => navigate(-1)}>Voltar</GoBack>
      </ButtonGroup>
    </Container>
  );
};

export default AdDetails;
