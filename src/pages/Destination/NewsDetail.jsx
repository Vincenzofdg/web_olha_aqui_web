import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useNewsDetail from '../../hooks/useNewsDetail';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-top: 25px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const NewsDetail = () => {
  const { id } = useParams();
  const { news, loading } = useNewsDetail(id);

  return (
    <Container>
      {loading ? (
        <p>Carregando...</p>
      ) : news ? (
        <>
          <Title>{news.title}</Title>
          <PDFContainer>
            <embed
              src={news.content}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </PDFContainer>
        </>
      ) : (
        <p>Notícia não encontrada.</p>
      )}
    </Container>
  );
};

export default NewsDetail;
