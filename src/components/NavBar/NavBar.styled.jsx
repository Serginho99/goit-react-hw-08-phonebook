import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Span = styled.span`
  color: black;
  font-weight: 600;
`;

export const Logo = styled(NavLink)`
  color: blue;
  font-size: 40px;
  font-weight: 600;
`;

export const NavList = styled(NavLink)`
  color: green;
  font-size: 30px;
  transition: all 250ms;
  padding: 10px;
  border-radius: 5px;

  & + & {
    margin-left: 20px;
  }
  &.active {
    color: white;
    background-color: #5e5eef;
  }
  &:hover:not(.active) {
    color: #9696e9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const NavBox = styled.div`
  /* margin-left: 200px; */
`;
