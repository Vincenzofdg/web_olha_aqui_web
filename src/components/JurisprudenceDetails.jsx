import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getLawById } from '../service/actions/laws';
import theme from '../../theme';
import str from '../localized/languages/ptBr';
import { shortDateDayFormat } from '../tools/date';

const Container = styled.div`
  max-width: 800px;
  padding: 32px 20px;
  margin: 0 auto;
  background-color: ${theme.background};
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  color: ${theme.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: ${theme.text};
  margin-bottom: 4px;
`;

const Source = styled.p`
  font-size: 14px;
  color: ${theme.text};
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 16px;
  color: ${theme.text};
  line-height: 1.6;
`;

const Loading = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  color: ${theme.text};
`;

function JurisprudenceDetails() {
  const { id } = useParams();
  const [law, setLaw] = useState(null);

  useEffect(() => {
    async function fetchLaw() {
      const data = await getLawById(id);
      setLaw(data);
    }

    fetchLaw();
  }, [id]);

  if (!law) return <Loading>{str.titlePages.Jurisprudence.loading}</Loading>;

  return (
    <Container>
      
      <Title>{law.title}</Title>
      <DateText>{str.date(shortDateDayFormat(law.createdAt))}</DateText>
      <Source>{str.lawSource(law.source)}</Source>
      <Content>{law.content}</Content>
    </Container>
  );
}

export default JurisprudenceDetails;
