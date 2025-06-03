import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import str from '../localized/languages/ptBr';
import { JurisprudenceCard } from '../components/cards/JurisprudenceCard';
import AdCard from '../components/cards/AdCard';
import useLaws from '../hooks/useLaws';
import useAds from '../hooks/useAds';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: ${theme.text[2]};
  margin-bottom: 10px;
  margin-top: 24px;
`;

const Subtitle = styled.h1`
  font-size: 15px;
  color: ${theme.text[2]};
  margin-bottom: 24px;
`;

const Loading = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${theme.text[2]};
`;

function Jurisprudence() {
  const { laws } = useLaws();
  const { data: ads } = useAds();

  const pfjAd = ads.find(ad => ad.id === '06032025-9qp5me-140148');

  return (
    <Wrapper>
      <Title>{str.titlePages.Jurisprudence.Title}</Title>
      <Subtitle>{str.titlePages.Jurisprudence.SubTitle}</Subtitle>

      {pfjAd && <AdCard data={pfjAd} hideContent />}

      {laws.length === 0 ? (
        <Loading>{str.titlePages.Jurisprudence.loading}</Loading>
      ) : (
        laws.map((law) => (
          <JurisprudenceCard key={law.id} data={law} />
        ))
      )}
    </Wrapper>
  );
}

export default Jurisprudence;
