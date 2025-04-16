import { useEffect, useState } from 'react';
import { getAllContacts } from '../service/actions/contacts';

export const useWhatsappLink = () => {
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contact = await getAllContacts();
  
        const rawPhone = contact?.whatsapp || contact?.phone;
  
        if (rawPhone) {
          const formatted = rawPhone.replace(/[^\d]/g, '');
          const message = encodeURIComponent("Olá! Gostaria de anunciar no app.");
          const link = `https://wa.me/${formatted}?text=${message}`;
          setWhatsappLink(link);
        }
      } catch (e) {
        console.error('Erro ao buscar contatos:', e);
      }
    };
  
    fetchContact();
  }, []);
  

  return whatsappLink;
};
