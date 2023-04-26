import CardItem from 'components/CardItem';
import { Item, List, LoadMore } from './CardList.styled';
import { useState, useEffect } from 'react';
import { getUsers } from 'services/getInfo';
import { toast } from 'react-toastify';
import { increaseUserFollowers } from 'services/getInfo';

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

  function updateUser(id, newProps) {
    setUsers(users => {
      return users.map(user => {
        if (user.id === id) {
          return { ...user, ...newProps };
        } else {
          return user;
        }
      });
    });
  }

  function handleClick(userId) {
    if (followedUsers.includes(userId)) {
      const updatedUsers = followedUsers.filter(id => id !== userId);
      setFollowedUsers(updatedUsers);
      localStorage.setItem('followedUsers', JSON.stringify(updatedUsers));
    } else {
      setFollowedUsers([...followedUsers, userId]);
      localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
      async function add(user) {
        try {
          const updatedUser = await increaseUserFollowers(user);
          const idToUpdate = updatedUser.id;
          const newProps = { followers: updatedUser.followers };
          updateUser(idToUpdate, newProps);
        } catch (error) {
          console.log(error);
        }
      }
      add(userId);
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
