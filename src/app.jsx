import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from './styles/globalStyles';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home';
import NewsDetail from './pages/Destination/NewsDetail';
import Ads from './pages/Ads';
import Jurisprudence from './pages/Jurisprudence';
import Contact from './pages/Contact';
import News from './pages/news';
import MenuLayout from './components/menu/MenuLayout';
import AdDetails from './pages/Destination/AdDetails';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route element={<MenuLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/anuncios" element={<Ads />} />
          <Route path="/anuncio/:id" element={<AdDetails />} />
          <Route path="/jurisprudencia" element={<Jurisprudence />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
