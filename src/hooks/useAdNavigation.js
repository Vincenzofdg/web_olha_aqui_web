import { useNavigate } from 'react-router-dom';

const useAdNavigation = () => {
  const navigate = useNavigate();

  const goToAdDetails = (data) => {
    navigate(`/anuncio/${data.id}`, { state: data });
  };

  return { goToAdDetails };
};

export default useAdNavigation;
