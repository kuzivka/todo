import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../reducers/reducer';
import { filterListBy } from '../enums';

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
      className={filterState === show ? 'active-button' : ''}
      size="small"
      onClick={handleClick}
    >
      {show}
    </Button>
  );
}
