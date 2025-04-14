import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllNews } from '../../service/actions/news'; 
import styled from 'styled-components';

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
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();
      const selectedNews = data.find((item) => item.id === id);
      setNews(selectedNews);
    };

    fetchNews();
  }, [id]);

  return (
    <Container>
      {news ? (
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
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default NewsDetail;
