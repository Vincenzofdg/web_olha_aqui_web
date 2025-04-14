import React from 'react';
import styled from 'styled-components';
import str from '../../localized/languages/ptBr';

const Button = styled.button`
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  margin: 10px auto 0 auto;
  display: block;
  color: #fff;
  background-color: ${({ $enabled }) => ($enabled ? '#0C313A' : '#9C9C9C')};
  cursor: ${({ $enabled }) => ($enabled ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s;
`;

function SendBtn({ action, canBenPressed }) {
  const handleClick = () => {
    if (canBenPressed) action();
  };

  return (
    <Button onClick={handleClick} $enabled={canBenPressed} disabled={!canBenPressed}>
      {str.send}
    </Button>
  );
}

export { SendBtn };
