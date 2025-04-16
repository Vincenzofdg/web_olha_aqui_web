import { useEffect, useState } from 'react';
import { getAllAnnounces } from '../service/actions/announces';
import { useSearchParams } from 'react-router-dom';

const useAds = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(undefined);
  const [modalState, setModalState] = useState(false);

  const [searchParams] = useSearchParams();
  const targetFilter = searchParams.get('target');

  useEffect(() => {
    const fetchAds = async () => {
      const res = await getAllAnnounces();

      let filteredData = res.data;

      if (targetFilter) {
        filteredData = filteredData.filter(
          (item) => item.target === targetFilter || item.target === 'all'
        );
      }

      if (selectedTag) {
        filteredData = filteredData.filter((item) =>
          item.tag.toLowerCase().includes(selectedTag.toLowerCase())
        );
      }

      setData(filteredData);
      setTags(res.tags || []);
    };

    fetchAds();
  }, [targetFilter, selectedTag]);

  return {
    data,
    tags,
    modalState,
    setModalState,
    selectedTag,
    setSelectedTag,
  };
};

export default useAds;
