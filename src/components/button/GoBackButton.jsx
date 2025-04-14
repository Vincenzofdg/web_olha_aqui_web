import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text[1]};
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowLeft size={30} />
    </Button>
  );
};

export default GoBackButton;
