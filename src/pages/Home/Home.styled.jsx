import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  box-sizing: border-box;
  min-height: 85%;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f0;
  margin: 0;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 28px;
  color: #f0f0f0;
  margin: 0;
  margin-bottom: 30px;
`;

export const LinkToCards = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: #5736a3;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  :hover {
    background-color: #f0f0f0;
    opacity: 0.95;
    scale: 1.1;
  }
`;
