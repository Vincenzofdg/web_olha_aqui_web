import React, { useState } from 'react';
import Global from './global';

function GlobalProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Global.Provider value={{ loader, setLoader, menu, setMenu }}>
      {children}
    </Global.Provider>
  );
}

export default GlobalProvider;
