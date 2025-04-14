import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePublicSector = () => {
  const navigate = useNavigate();

  const handleSelect = useCallback((option) => {
    if (option === 'condominio') {
      navigate('/anuncios?categoria=condominio');
    } else if (option === 'moradores') {
      navigate('/anuncios?categoria=moradores');
    }
  }, [navigate]);

  return { handleSelect };
};