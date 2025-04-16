import { useEffect, useState } from 'react';
import { getAllContacts } from '../service/actions/contacts';

export const useWhatsappLink = () => {
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      const contacts = await getAllContacts();
      if (contacts && contacts.length > 0) {
        const phone = contacts[0]?.whatsapp || contacts[0]?.phone;
        if (phone) {
          const formatted = phone.replace(/[^\d]/g, '');
          const message = encodeURIComponent("Olá! Gostaria de anunciar no app.");
          setWhatsappLink(`https://wa.me/${formatted}?text=${message}`);

          console.log('WhatsApp cleaned number:', formatted);
        }
      }
    };

    fetchContact();
  }, []);

  return whatsappLink;
};
