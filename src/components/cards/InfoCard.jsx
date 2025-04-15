import styled from 'styled-components';
import PredioIcon from '../../assets/PredioIcon.png';
import str from '../../localized/languages/ptBr';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background[4]};
  width: 100%;
  max-width: 400px;
  height: 260px;
  border-radius: 15px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 8px;
  box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 350px) {
    height: 220px;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: clamp(15px, 2vw, 17px);
  font-weight: bold;
  color: ${({ theme }) => theme.text[2]};
  margin: 0;
`;

const Description = styled.p`
  width: 80%;
  font-size: clamp(14px, 6vw, 17px);
  line-height: 1.4;
  padding-left: 3px;
  color: ${({ theme }) => theme.text[2]};
  z-index: 2;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background[5]};
  color: ${({ theme }) => theme.text[1]};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  border: none;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 53%;
  height: auto;
  right: -40px;
  bottom: -20px;
  opacity: 0.8;

  @media (max-width: 350px) {
    right: -18px;
    bottom: -10px;
  }
`;

const PublicAnnounce = () => {
  const navigate = useNavigate();

  const openBrowser = () => {

    navigate('/contato');
  };

  return (
    <Container>
      <TextContainer>
        <Title>{str.info.title}</Title>
        <Description>{str.info.content}</Description>
        <Button onClick={openBrowser}>{str.info.btn}</Button>
      </TextContainer>
      <Image src={PredioIcon} alt="Ícone prédio" />
    </Container>
  );
};

export default PublicAnnounce;
