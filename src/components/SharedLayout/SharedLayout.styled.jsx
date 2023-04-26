import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;

  border-bottom: 1px solid #fff;
  > nav {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.p`
  margin: 0;
`;

export const LogoText = styled.a`
  font-weight: 700;
  margin: 0;
  margin-left: 10px;
  font-size: 36px;
  color: #fff;
  text-shadow: 1px 2px 1px #272727;
  text-decoration: none;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  :hover {
    color: #e0c2ff;
  }
  &.active {
    color: #5736a3;
    background-color: #fff;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-top: 1px dashed #fff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Text = styled.p`
  font-size: 14px;
  color: #fff;
`;

export const RightLink = styled.a`
  font-size: 14px;
  color: #fff;
`;
