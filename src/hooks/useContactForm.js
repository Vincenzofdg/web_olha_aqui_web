import { useState, useEffect } from 'react';
import { contactForm } from '../tools/validateForms';
import { submitMessage } from '../service/actions/messages';

export function useContactForm() {
  const [submitedStatus, setSubmitedStatus] = useState(false);
  const [hasAlreadySentMessage, setHasAlreadySentMessage] = useState(false);
  const [forceReload, setForceReload] = useState(false);
  const [loader, setLoader] = useState(false);
  const [stateListener, setStateListener] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    description: '',
  });

  useEffect(() => {
    const canBeSubmited = contactForm(stateListener);
    setSubmitedStatus(canBeSubmited);
  }, [stateListener, forceReload]);

  const handleSubmit = async () => {
    setLoader(true);
    const saveMessageOnDb = await submitMessage(stateListener);
    if (saveMessageOnDb) {
      setHasAlreadySentMessage(true);
      setStateListener({
        name: '',
        surname: '',
        email: '',
        phone: '',
        description: '',
      });
      setForceReload(p => !p);
    }
    setLoader(false);
  };

  return {
    submitedStatus,
    hasAlreadySentMessage,
    loader,
    stateListener,
    setStateListener,
    handleSubmit,
  };
}
