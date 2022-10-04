import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../../store/reducers/todoListSlice';
import { filterListBy } from '../../enums';

interface FilterBtnProps {
  filterState: string;
  show: filterListBy;
}

export default function FilterBtn(props: FilterBtnProps) {
  const { show, filterState } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterTodo(show as TaskToShow));
  };
  return (
    <Button
      sx={filterState === show ? { backgroundColor: '#ddd' } : {}}
      size="small"
      onClick={handleClick}
    >
      {show}
    </Button>
  );
}
