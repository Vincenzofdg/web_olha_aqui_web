import { useState } from 'react';

export function useTextForm(initialState = {}) {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    const inputValue = e.target.value;
    setValue(prev => ({ ...prev, [e.target.name]: inputValue }));
  };

  return {
    value,
    setValue,
    handleChange,
  };
}
