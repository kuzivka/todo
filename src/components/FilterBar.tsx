import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, searchTodo } from '../store/reducers/todoListSlice';
import { deleteCompletedTodo } from '../store/reducers/todoSlice';
import { filterListBy } from '../enums';
import { getFilter } from '../selectors/getFilter';
import FilterBtn from './FilterBtn';

export default function FilterBar() {
  const dispatch = useDispatch();

  const filterState = useSelector(getFilter);

  const handleDeleteAllClick = useCallback(() => {
    dispatch(deleteCompletedTodo());
    dispatch(filterTodo(filterListBy.all));
  }, [dispatch]);

  const handleSearchFieldChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchTodo(event.target.value));
    },
    [dispatch]
  );

  const buttons = Object.values(filterListBy).map((option) => option);

  return (
    <Box className="filter-buttons-container">
      <TextField
        id="standard-basic"
        className="search-field"
        placeholder="Search"
        variant="standard"
        onChange={handleSearchFieldChange}
      />
      {buttons.map((button) => (
        <FilterBtn key={button} filterState={filterState} show={button} />
      ))}

      <Button size="small" variant="outlined" onClick={handleDeleteAllClick}>
        delete completed
      </Button>
    </Box>
  );
}
