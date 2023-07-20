import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
  height: 30px;
  background: linear-gradient(to right, #009245, #fcee21, #00a8c5, #d9e021);
  box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid yellowgreen;
  border-radius: 19px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #120375;
  }

  &.active {
    color: #0df409;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;
