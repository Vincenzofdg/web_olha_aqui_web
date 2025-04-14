import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Menu = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background[2]};
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;
`;

const IconWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ active, theme }) => (active ? theme.background[2] : theme.background[7])};
`;

const BottomMenu = () => {
  const location = useLocation();

  return (
    <Menu>
      <IconWrapper to="/home" active={location.pathname === '/home' ? 1 : 0}>
        <Home size={24} />
      </IconWrapper>
    </Menu>
  );
};

export default BottomMenu;
