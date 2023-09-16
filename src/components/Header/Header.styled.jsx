import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/idnex';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  column-gap: 20px;
  padding: 15px 25px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: ${theme.colors.mainColor};
  padding: 10px 15px;
  &.active {
    color: ${theme.colors.activeColor};
    border-radius: 12px;
    border: 2px solid ${theme.colors.activeColor};
  }
`;
