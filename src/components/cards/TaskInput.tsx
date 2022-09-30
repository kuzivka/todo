import { AddBox, Sort } from '@mui/icons-material';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/reducers/todoSlice';
import { filterTodo, sortTodo } from '../../store/reducers/todoListSlice';
import { filterListBy } from '../../enums';
import { getSortingOption } from '../../selectors/getSortingOption';
import { getNewTaskObject } from '../../utils/getNewTaskObject';
import { AddNewTodoModal } from '../modal/AddNewTodoModal';

export default function TaskInput() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState('');
  const [isOptionsOpen, setOpen] = useState(false);
  const sortOption = useSelector(getSortingOption);
  const dispatch = useDispatch();

  const taskValueChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setTaskValue(event.target.value.replace(/[^\w\s]/gi, ''));
    }, []);

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  const enterClickHandler: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.key === 'Enter' && taskValue.trim()) {
        event.preventDefault();
        dispatch(addTodo(getNewTaskObject(taskValue)));
        setTaskValue('');
        dispatch(filterTodo(filterListBy.all));
      }
    },
    [dispatch, taskValue]
  );

  const selectHandler = useCallback(
    (event: SelectChangeEvent<SortingOption>) => {
      dispatch(sortTodo(event.target.value as SortingOption));
      setOpen(!isOptionsOpen);
    },
    [dispatch, isOptionsOpen]
  );

  const togleOpenSortingOptins = () => {
    setOpen(!isOptionsOpen);
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Sort
        sx={{
          fontSize: '50px',
          border: '1px solid black',
          borderRadius: '3px',
        }}
        onClick={togleOpenSortingOptins}
      />
      <Select
        open={isOptionsOpen}
        onClose={togleOpenSortingOptins}
        onOpen={togleOpenSortingOptins}
        sx={{ visibility: 'hidden', width: 0, mr: 1 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortOption}
        onChange={selectHandler}
      >
        <MenuItem value="createdAt">Creation Date</MenuItem>
        <MenuItem value="task">Alphabetically</MenuItem>
      </Select>
      <TextField
        sx={{ width: 400, maxWidth: '80vw' }}
        value={taskValue}
        onChange={taskValueChangeHandler}
        color="primary"
        id="outlined-basic"
        label="Describe Your Task"
        variant="outlined"
        onKeyDown={enterClickHandler}
      />

      <AddBox sx={{ fontSize: '70px' }} onClick={toggleModalOpen} />
      {isModalOpen && (
        <AddNewTodoModal open={isModalOpen} onClose={toggleModalOpen} />
      )}
    </Box>
  );
}
