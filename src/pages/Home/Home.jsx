import { Container, Title, Text, LinkToCards } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>
        Welcome to the FollowMe <br /> test-project!
      </Title>
      <Text>Push the button to see all cards</Text>
      <LinkToCards to="/cards">Open cards</LinkToCards>
    </Container>
  );
};

export default Home;
