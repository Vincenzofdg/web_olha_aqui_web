import { useNavigate } from 'react-router-dom';

export const usePublicCard = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contato');
  };

  return { handleContactClick };
};
