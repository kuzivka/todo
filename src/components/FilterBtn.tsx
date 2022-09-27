import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { filterTodoList } from '../actions/actionCreators';

interface FilterBtnProps {
  isActive: boolean;
  title: string;
  show: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export default function FilterBtn(props: FilterBtnProps) {
  const { title, show, isActive, setActive } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterTodoList(show));
    setActive(title);
  };
  return (
    <Button
      className={isActive ? 'active-button' : ''}
      size="small"
      onClick={handleClick}
    >
      {title}
    </Button>
  );
}
