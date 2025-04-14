import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1100;
  background-color: ${({ theme }) => theme.background[2]};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Burger = styled.div`
  width: 20px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }
`;

export const MenuBtn = ({ onClick }) => (
  <Button onClick={onClick}>
    <Burger>
      <span />
      <span />
      <span />
    </Burger>
  </Button>
);
