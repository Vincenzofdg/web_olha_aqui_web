import styled from 'styled-components';
import CidadeImg from '../../assets/cidade.jpg';
import { usePublicCard } from '../../hooks/usePublicCard';
import str from '../../localized/languages/ptBr';

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 16px auto;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background[4]};
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;

  @media(min-width: 600px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  background-image: url(${CidadeImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 160px;

  @media(min-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const TextSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Message = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text[2]};
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.background[4]};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const PublicCard = () => {
  const { handleContactClick } = usePublicCard();

  return (
    <CardContainer>
      <ImageSection />
      <TextSection>
        <Message>
          {str.highlight.title}
        </Message>
        <Button onClick={handleContactClick}> {str.highlight.btn}</Button>
      </TextSection>
    </CardContainer>
  );
};

export default PublicCard;
