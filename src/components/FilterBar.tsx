import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteComletedFromTodoList,
  filterTodoList,
} from '../actions/actionCreators';
import { filterListBy } from '../enums';
import { getFilter } from '../selectors/getFilter';
import FilterBtn from './FilterBtn';

export default function FilterBar() {
  const dispatch = useDispatch();

  const filterState = useSelector(getFilter);

  const handleDeleteAllClick = useCallback(() => {
    dispatch(deleteComletedFromTodoList());
    dispatch(filterTodoList('all'));
  }, [dispatch]);

  const buttons = Object.values(filterListBy).map((option) => option);

  return (
    <Box className="filter-buttons-container">
      {buttons.map((button) => (
        <FilterBtn key={button} filterState={filterState} show={button} />
      ))}

      <Button size="small" variant="outlined" onClick={handleDeleteAllClick}>
        delete completed
      </Button>
    </Box>
  );
}
