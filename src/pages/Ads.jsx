import React from 'react';
import styled from 'styled-components';
import str from '../localized/languages/ptBr';
import AdCard from '../components/cards/AdCard';
import FilterAds from '../components/modal/filterAds';
import useAds from '../hooks/useAds';

const PageContainer = styled.div`
  padding: 16px;
  text-align: center;
`;

const FilterButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.text[1]};
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const CardsWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

function Ads({ navigate }) {
  const {
    data,
    tags,
    modalState,
    setModalState,
    selectedTag,
    setSelectedTag,
  } = useAds();

  return (
    <PageContainer>
      <FilterButton onClick={() => setModalState(true)}>
        {selectedTag ? selectedTag : str.all}
      </FilterButton>

      <FilterAds
        list={tags}
        isOpen={modalState}
        closeModal={setModalState}
        setter={setSelectedTag}
      />

      <CardsWrapper>
        {data.map((item) => (
          <AdCard key={item.id} data={item} nav={navigate} />
        ))}
      </CardsWrapper>
    </PageContainer>
  );
}

export default Ads;
