import CardList from 'components/CardList';
import { Container } from './Cards.styled';
import { useState } from 'react';
import Filter from 'components/Filter/Filter';
function Cards() {
  const [filterState, setFilterState] = useState('All');

  const handleChange = filterState => {
    setFilterState(filterState);
  };
  return (
    <Container>
      <Filter onChange={handleChange} />
      <CardList filterState={filterState} />
    </Container>
  );
}

export default Cards;
