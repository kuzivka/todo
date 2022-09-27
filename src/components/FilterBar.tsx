import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteComletedFromTodoList,
  filterTodoList,
} from '../actions/actionCreators';
import FilterBtn from './FilterBtn';

export default function FilterBar() {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState('All');

  const handleDeleteAllClick = () => {
    dispatch(deleteComletedFromTodoList());
    dispatch(filterTodoList('all'));
  };

  return (
    <Box className="filter-buttons-container">
      <FilterBtn
        isActive={isActive === 'All'}
        title="All"
        show="all"
        setActive={setActive}
      />
      <FilterBtn
        isActive={isActive === 'Comleted'}
        title="Comleted"
        show="comleted"
        setActive={setActive}
      />
      <FilterBtn
        isActive={isActive === 'Active'}
        title="Active"
        show="active"
        setActive={setActive}
      />
      <Button size="small" variant="outlined" onClick={handleDeleteAllClick}>
        delete completed
      </Button>
    </Box>
  );
}
