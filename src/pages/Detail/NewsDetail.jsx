import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getNewsById } from '../../service/actions/news';
import GlobalState from '../../context/global';
import str from '../../localized/languages/ptBr';


const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const { setLoader } = useContext(GlobalState);

  useEffect(() => {
    async function fetchNews() {
      setLoader(true);
      const result = await getNewsById(id);
      setNewsItem(result);
      setLoader(false);
    }
    fetchNews();
  }, [id]);

  if (!newsItem) return <Container>{str.titlePages.News.loading}</Container>;

  return (
    <Container>
      <Title>{newsItem.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: newsItem.content }} />
    </Container>
  );
}

export default NewsDetail;
