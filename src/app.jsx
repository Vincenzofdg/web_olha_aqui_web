import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from './styles/globalStyles';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home';
import NewsDetail from './pages/Detail/NewsDetail';
import Ads from './pages/Ads/Ads';
import Jurisprudence from './pages/Jurisprudence/Jurisprudence';
import Contact from './pages/Contact/Contact';
import News from './pages/News/news';
import JurisprudenceDetails from './components/JurisprudenceDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anuncios" element={<Ads />} />
        <Route path="/jurisprudencia" element={<Jurisprudence />} />
        <Route path="/jurisprudencia/:id" element={<JurisprudenceDetails />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
