import styled from 'styled-components';
import str from '../../localized/languages/ptBr';
import { shortDateDayFormat } from '../../tools/date';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 1rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.background[4]};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  background-color: #000;
  display: block;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.background[4]};
`;

const DateText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.text[2]};
`;

const TagsText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

function AdCard({ data, nav }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anuncio/${data.id}`, { state: data });
  };

  const imageUrl = data.image?.startsWith('http') ? data.image : `${str.website}${data.image}`;

  return (
    <Card onClick={handleClick}>
      <CardImage
        src={imageUrl}
        alt={data?.title || str.alt.anuncio}
        onError={(e) => (e.target.style.display = 'none')}
      />
      <CardContent>
        <DateText>{shortDateDayFormat(data.createdAt)}</DateText>
        {data.tag && data.tag.split(';').length > 0 && (
          <TagsText>#{data.tag.replace(/;/g, ' #')}</TagsText>
        )}
      </CardContent>
    </Card>
  );
}

export default AdCard;
