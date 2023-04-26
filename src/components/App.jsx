import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

const Home = lazy(() => import('../pages/Home/Home'));
const Cards = lazy(() => import('../pages/Cards/Cards'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};
