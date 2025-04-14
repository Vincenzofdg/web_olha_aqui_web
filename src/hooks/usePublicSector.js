import { useNavigate } from 'react-router-dom';

export const usePublicSector = () => {
  const navigate = useNavigate();

  const sectorMap = {
    condominio: 'condominium',
    moradores: 'resident'
  };

  const handleSelect = (sector) => {
    const backendTarget = sectorMap[sector] || 'all';
    navigate(`/anuncios?target=${backendTarget}`);
  };

  return { handleSelect };
};
