import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PredioIcon from '../../assets/PredioIcon.png';
import str from '../../localized/languages/ptBr';

const Card = styled.div`
  background-color: ${({ theme }) => theme.background[4]};
  border-radius: 16px;
  overflow: hidden;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  @media(min-width: 600px) {
    flex-direction: row;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media(min-width: 600px) {
    width: 50%;
    height: auto;
    border-radius: 0;
  }
`;

const Content = styled.div`
  padding: 12px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text[2]};
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text[2]};
  font-size: 13px;
  line-height: 1.4;
  flex: 1;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.text[1]};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
  align-self: flex-start;

  @media(max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

const InfoCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contato');
  };

  return (
    <CardContainer>
      <Card>
        <ImageContainer $img={PredioIcon} />
        <Content>
          <Title>{str.info.title}</Title>
          <Description>{str.info.content}</Description>
          <Button onClick={handleClick}>{str.info.btn}</Button>
        </Content>
      </Card>
    </CardContainer>
  );
};

export default InfoCard;
