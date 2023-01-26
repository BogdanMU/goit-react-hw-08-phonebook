import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding-right: 15px;
  padding-left: 15px;
  height: 50px;
  background: rgb(11, 49, 62);
  background: linear-gradient(
    90deg,
    rgba(11, 49, 62, 1) 20%,
    rgba(231, 99, 16, 1) 50%,
    rgba(11, 49, 62, 1) 80%
  );
`;

export const PagesNav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 20px;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & p {
    color: wheat;
  }
`;

export const UserBtn = styled.button`
  height: 50%;
  background-color: orange;
  border-radius: 10px;
  transition: all 200ms;
  &:hover,
  :focus {
    scale: 1.1;
    transition: all 200ms;
  }
`;

export const AuthNav = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const PageLink = styled(NavLink)`
  font-size: 24px;
  color: orange;
  text-decoration: none;
  transition: all 200ms;
  &:hover,
  :focus {
    scale: 1.1;
    transition: all 200ms;
  }
`;

export const AuthLink = styled(NavLink)`
  font-size: 14px;
  transition: all 200ms;
  text-decoration: none;
  background-color: orange;
  border: 1px solid black;
  border-radius: 6px;
  padding: 2px;
  &:hover,
  :focus {
    scale: 1.1;
    transition: all 200ms;
  }
`;
