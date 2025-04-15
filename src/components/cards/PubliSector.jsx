import styled from 'styled-components';
import condominioIcon from '../../assets/building.png';
import moradoresIcon from '../../assets/people.png';
import { usePublicSector } from '../../hooks/usePublicSector';
import theme from '../../../theme';
import str from '../../localized/languages/ptBr';

const Section = styled.section`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;

  background-color: #002849;
  color: white;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
`;



const Title = styled.h2`
  color: ${theme.text[1]};
  font-size: 18px;
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const OptionCard = styled.button`
  background-color: ${theme.background[1]};
  color: white;
  padding: 16px;
  border-radius: 12px;
  width: 120px;
  border: none;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-weight: bold;
  }
`;

const PublicSector = () => {
  const { handleSelect } = usePublicSector();

  return (
    <Section>
      <Title>{str.sectors.title}</Title>
      <Options>
        <OptionCard onClick={() => handleSelect('condominio')}>
          <img src={condominioIcon} alt={str.alt.condominio} />
          <span>{str.sectors.condominio}</span>
        </OptionCard>
        <OptionCard onClick={() => handleSelect('moradores')}>
          <img src={moradoresIcon} alt={str.alt.moradores} />
          <span>{str.sectors.moradores}</span>
        </OptionCard>
      </Options>
    </Section>
  );
};

export default PublicSector;
