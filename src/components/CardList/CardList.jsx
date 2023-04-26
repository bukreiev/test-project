import CardItem from 'components/CardItem';
import { Item, List, LoadMore } from './CardList.styled';
import { useState, useEffect } from 'react';
import { getUsers } from 'services/getInfo';
import { toast } from 'react-toastify';

function CardList({ filterState }) {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) || []
  );

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await getUsers();
        setUsers([...users]);
      } catch {
        toast.error('Something went wrong. Try again later.');
      }
    }
    fetchUsers();
  }, []);

  const shownUsers = users.slice(0, perPage);
  function Load() {
    setPerPage(perPage + 3);
  }

  function handleClick(userId) {
    // const savedUsers = JSON.parse.localStorage.getItem('followedUsers');
    if (followedUsers.includes(userId)) {
      const updatedUsers = followedUsers.filter(id => id !== userId);
      setFollowedUsers(updatedUsers);
      localStorage.setItem('followedUsers', JSON.stringify(updatedUsers));
    } else {
      setFollowedUsers([...followedUsers, userId]);
      localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    }
  }

  return (
    <>
      <List>
        {shownUsers.map(user => {
          return (
            <Item key={user.id}>
              <CardItem
                id={user.id}
                user={user.user}
                tweets={user.tweets}
                followers={user.followers}
                avatar={user.avatar}
                onClick={handleClick}
                followedUsers={followedUsers}
              />
            </Item>
          );
        })}
      </List>
      {shownUsers.length < users.length && (
        <LoadMore onClick={Load}>Load More</LoadMore>
      )}
    </>
  );
}

export default CardList;
