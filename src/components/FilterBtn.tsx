import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterTodoList } from '../actions/actionCreators';

interface FilterBtnProps {
  filterState: string;
  show: TaskToShow;
}

export default function FilterBtn(props: FilterBtnProps) {
  const { show, filterState } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterTodoList(show));
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
