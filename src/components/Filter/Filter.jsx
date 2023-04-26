import { useState } from 'react';
import { FilterContainer, FilterSelect } from './Filter.styled';

const options = [
  { value: 'Show all', label: 'Show all' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Followings', label: 'Followings' },
];
const initialState = { value: 'Show all', label: 'Show all' };

function Filter({ onChange }) {
  const [filterState, setFilterState] = useState(initialState);

  const handleChange = filterState => {
    setFilterState(filterState);
    onChange(filterState.value);
  };

  return (
    <>
      <FilterContainer>
        <FilterSelect
          value={filterState}
          onChange={handleChange}
          options={options}
        />
      </FilterContainer>
    </>
  );
}

export default Filter;
