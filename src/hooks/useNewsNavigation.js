import { useNavigate } from 'react-router-dom';

const useNewsNavigation = () => {
  const navigate = useNavigate();

  const goToNewsDetails = (id) => {
    navigate(`/news/${id}`);
  };

  return { goToNewsDetails };
};

export default useNewsNavigation;
