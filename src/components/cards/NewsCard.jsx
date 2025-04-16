import React from 'react';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';
import useNewsNavigation from '../../hooks/useNewsNavigation';

const Card = styled.div`
  background-color: ${({ theme }) => theme.background[4]};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 280px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #000;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.text[2]};
  margin: 8px 0;
`;

const Summary = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text[3]};
`;

const Date = styled.small`
  display: block;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.text[3]};
`;

function NewsCard({ data }) {
  const { goToNewsDetails } = useNewsNavigation();

  const handleClick = () => {
    goToNewsDetails(data.id);
  };

  const imagePath = data.image || '';
  const imageUrl = imagePath.startsWith('http') ? imagePath : `${str.website}${imagePath}`;

  return (
    <Card onClick={handleClick}>
      <CardImage
        src={imageUrl}
        alt={data.title || str.alt.noticia}
        onError={(e) => {
          e.target.onerror = null;
        }}
      />
      <Title>{data.title}</Title>
      <Summary>{data.description}</Summary>
      <Date>{data.date}</Date>
    </Card>
  );
}

export default NewsCard;
