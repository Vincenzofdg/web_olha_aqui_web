import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalProvider from './context/globalprovinder'; 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider> 
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
