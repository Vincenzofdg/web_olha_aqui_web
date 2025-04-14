import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { shortDateDayFormat } from '../../tools/date';
import str from '../../localized/languages/ptBr';

const CardContainer = styled.div`
  background-color: ${theme.background[4]};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  margin: 16px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  color: ${theme.text[2]};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: ${theme.text[2]};
  font-size: 14px;
  margin-bottom: 12px;
  text-align: justify;
`;

const DateText = styled.p`
  font-size: 13px;
  color: ${theme.text[2]};
  margin-bottom: 4px;
`;

const Source = styled.p`
  font-size: 13px;
  color: ${theme.text[2]};
`;

const LinkButton = styled.button`
  margin-top: -30px;
  padding: 8px 16px;
  font-weight: bold;
  background-color: ${theme.background[1]};
  color: ${theme.text[1]};
  border: 1px solid ${theme.background[7]};
  border-radius: 8px;
  cursor: pointer;
  float: right;
  text-decoration: none;
`;

function JurisprudenceCard({ data }) {
  return (
    <CardContainer>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <DateText>{shortDateDayFormat(data.createdAt)}</DateText>
      <Source>{data.source}</Source>
      <LinkButton
        as="a"
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {str.access}
      </LinkButton>
    </CardContainer>
  );
}

export { JurisprudenceCard };
