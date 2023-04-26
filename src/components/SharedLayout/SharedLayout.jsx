import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  LogoContainer,
  LogoText,
  Link,
  Footer,
  Text,
  RightLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <LogoContainer>
            <LogoText href="/test-project">FollowMe &#129322;</LogoText>
          </LogoContainer>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/cards">Cards</Link>
          </nav>
        </Header>
      </Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <Text>
          {'Copyright © '}
          <RightLink href="https://github.com/bukreiev">
            Scrooge McDuck "FollowMe" React Test-Project
          </RightLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Text>
      </Footer>
    </>
  );
};
