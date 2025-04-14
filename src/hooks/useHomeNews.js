import { useEffect, useState } from 'react';
import { getHighlightedNews } from '../service/actions/news';

export const useHomeNews = () => {
  const [highlightedNews, setHighlightedNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const news = await getHighlightedNews();
      setHighlightedNews(news);
    }
    fetchNews();
  }, []);

  return { highlightedNews };
};
