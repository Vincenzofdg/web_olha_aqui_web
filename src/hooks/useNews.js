import { useEffect, useState } from 'react';
import { getAllNews } from '../service/actions/news';

const useNews = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();
      setNewsList(data);
    };

    fetchNews();
  }, []);

  return { newsList };
};

export default useNews;
