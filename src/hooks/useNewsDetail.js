import { useEffect, useState } from 'react';
import { getAllNews } from '../service/actions/news';

const useNewsDetail = (id) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        const selectedNews = data.find((item) => item.id === id);
        setNews(selectedNews);
      } catch (err) {
        console.error('Erro ao carregar a notícia:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  return { news, loading };
};

export default useNewsDetail;
