import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import str from '../localized/languages/ptBr';
import styled from 'styled-components';
import { getAllAnnounces } from '../service/actions/announces';
import AdCard from '../components/cards/AdCard';
import FilterAds from '../components/modal/filterAds';
import GoBackButton from '../components/button/GoBackButton';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px 16px 0px 16px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.background[0]};
  z-index: 10;
`;

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
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [selectedTag, setSelectedTag] = useState(undefined);

  const [searchParams] = useSearchParams();
  const targetFilter = searchParams.get('target'); 

  useEffect(() => {
    const fetchAds = async () => {
      const res = await getAllAnnounces();

      let filteredData = res.data;

      if (targetFilter) {
        filteredData = filteredData.filter(item =>
          item.target === targetFilter || item.target === 'all'
        );
      }

      if (selectedTag) {
        filteredData = filteredData.filter(item =>
          item.tag.toLowerCase().includes(selectedTag.toLowerCase())
        );
      }

      setData(filteredData);
      setTags(res.tags || []);
    };

    fetchAds();
  }, [targetFilter, selectedTag]);

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
        {data.map(item => (
          <AdCard key={item.id} data={item} nav={navigate} />
        ))}
      </CardsWrapper>
    </PageContainer>
  );
}

export default Ads;
