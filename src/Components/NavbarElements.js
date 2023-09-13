import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  padding: 0 0 10px 0;
  text-decoration: none;
  font-family: 'Gilroy-Light', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #36454d;
  cursor: pointer;
  &.active {
    border-bottom: 3px #5c8e29 solid;
    padding: 0 0 7px 0;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  margin: 57px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
