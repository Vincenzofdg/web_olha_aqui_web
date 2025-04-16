import { useEffect, useState } from 'react';
import { getAllLaw } from '../service/actions/laws';

const useLaws = () => {
  const [laws, setLaws] = useState([]);

  useEffect(() => {
    async function fetchLaws() {
      const data = await getAllLaw();
      setLaws(data);
    }

    fetchLaws();
  }, []);

  return { laws };
};

export default useLaws;
