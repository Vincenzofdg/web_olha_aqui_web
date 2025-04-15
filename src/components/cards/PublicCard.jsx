import styled from 'styled-components';
import CidadeImg from '../../assets/cidade.jpg';
import { usePublicCard } from '../../hooks/usePublicCard';
import str from '../../localized/languages/ptBr';

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.background[4]};
  width: 100%;
  max-width: 600px;
  height: 200px;
  border-radius: 10px;
  margin: 80px auto 16px auto;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: flex;
`;

const Image = styled.div`
  width: 50%;
  background-image: url(${CidadeImg});
  background-size: cover;
  background-position: center;
`;

const DiagonalBackground = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background[4]};
  right: -20px;
  top: -130px;
  bottom: -70px;
  width: 60%;
  transform: rotate(10deg);
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60%;
  padding: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Message = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text[2]};
  margin-bottom: 20px;
  text-align: right;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background[1]};
  color: ${({ theme }) => theme.text[1]};
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const PublicCard = () => {
  const { handleContactClick } = usePublicCard();

  return (
    <Card>
      <Image />
      <DiagonalBackground />
      <Overlay>
        <Message>{str.highlight.title}</Message>
        <Button onClick={handleContactClick}>{str.highlight.btn}</Button>
      </Overlay>
    </Card>
  );
};

export default PublicCard;
