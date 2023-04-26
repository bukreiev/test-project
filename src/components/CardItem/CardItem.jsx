import { useState } from 'react';
import {
  Background,
  Cover,
  Avatar,
  Line,
  Circle,
  Container,
  Text,
  Button,
} from './CardItem.styled';
import { ReactComponent as SVG } from '../../media/logo.svg';
import card from '../../media/card.png';
import styled from '@emotion/styled';

const Logo = styled(SVG)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

function CardItem({
  id,
  user,
  tweets,
  followers,
  avatar,
  onClick,
  followedUsers,
}) {
  const [isFollow, setIsFollow] = useState(false);
  const [followersAmount, setFollowersAmount] = useState(followers);

  const handleClick = () => {
    setIsFollow(!isFollow);
    if (!isFollow) {
      onClick(id);
      setFollowersAmount(followersAmount + 1);
    } else if (isFollow) {
      setFollowersAmount(followersAmount - 1);
      onClick(id);
    }
  };

  return (
    <>
      <Background>
        <Cover src={card} />
        <Logo />
      </Background>
      <Line></Line>
      <Circle>
        <Avatar src={avatar} alt={user} />
      </Circle>
      <Container>
        <Text>{user}</Text>
        <Text>{tweets} tweets</Text>
        <Text>{followersAmount} followers</Text>
        <Button
          className={followedUsers.includes(id) ? 'active' : ''}
          onClick={handleClick}
        >
          {followedUsers.includes(id) ? 'Following' : 'Follow'}
        </Button>
      </Container>
    </>
  );
}

export default CardItem;
