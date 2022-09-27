import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { filterTodoList } from '../actions/actionCreators';

export default function FilterBar() {
  const dispatch = useDispatch();

  const handleAllClick = () => {
    dispatch(filterTodoList('all'));
  };
  const handleActiveClick = () => {
    dispatch(filterTodoList('active'));
  };
  const handleComletedClick = () => {
    dispatch(filterTodoList('completed'));
  };

  return (
    <Box className="filter-buttons-container">
      <Button size="small" onClick={handleAllClick}>
        All
      </Button>
      <Button size="small" onClick={handleActiveClick}>
        Active
      </Button>
      <Button size="small" onClick={handleComletedClick}>
        Completed
      </Button>
    </Box>
  );
}
