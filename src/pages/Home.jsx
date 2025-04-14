import styled from 'styled-components';
import NewCard from '../components/cards/NewsCard';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../components/cards/InfoCard';
import PublicCard from '../components/cards/PublicCard';
import PublicSector from '../components/PubliSector';
import { useHomeNews } from '../hooks/useHomeNews';
import str from '../localized/languages/ptBr';
import Menu from '../components/MenuLayout';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background[4]};
  padding: 16px;
  overflow-y: auto;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const NewsCarousel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

function Home() {
  const navigate = useNavigate();
  const { highlightedNews } = useHomeNews();

  return (
    <Container>
      <Menu/>
      <PublicCard />
      <InfoCard />
      <PublicSector />

      {highlightedNews.length > 0 && (
        <>
          <Title>{str.titlePages.Home.Title}</Title>
          <SubTitle>{str.titlePages.Home.SubTitle}</SubTitle>
          <SubTitle>{str.titlePages.Home.Slide}</SubTitle>
          <NewsCarousel>
            {highlightedNews.slice(0, 3).map((item, index) => (
              <div key={index} style={{ maxWidth: '250px' }}>
                <NewCard data={item} nav={navigate} />
              </div>
            ))}
          </NewsCarousel>
        </>
      )}
    </Container>
  );
}

export default Home;
