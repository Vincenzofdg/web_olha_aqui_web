import React, { useState, useEffect, useContext } from 'react';
import str from '../../localized/languages/ptBr';
import styled from 'styled-components';
import { getAllAnnounces } from '../../service/actions/announces';
import AdCard from '../../components/cards/AdCard';
import FilterAds from '../../components/modal/filterAds';
import GoBackButton from '../../components/button/GoBackButton';

const Container = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.text[2]};
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text[2]};
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

function Ads({ navigate }) {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(undefined);

  useEffect(() => {
    const fetchAds = async () => {
      let adsData;

      if (selectedFilter === undefined) {
        adsData = await getAllAnnounces();
      } else {
        const res = await getAllAnnounces();
        const filtered = res.data.filter(item =>
          item.tag.includes(selectedFilter)
        );
        adsData = { data: filtered, tags: res.tags };
      }

      setData(adsData.data);
      setTags(adsData.tags);
    };

    fetchAds();
  }, [selectedFilter]);

  return (
    <Container>
      <GoBackButton/>
      <Title>{str.adsTitle}</Title>
      <Subtitle>{str.adsSubtitle}</Subtitle>
      <FilterButton onClick={() => setModalState(true)}>
        {!!selectedFilter ? selectedFilter : str.all}
      </FilterButton>

      <FilterAds
        list={tags}
        isOpen={modalState}
        closeModal={setModalState}
        setter={setSelectedFilter}
      />

    {data.map(item => (
        <AdCard key={item.id} data={item} nav={navigate} />
    ))}

    </Container>
  );
}

export default Ads;
