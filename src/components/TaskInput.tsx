import {
  useState,
  useCallback,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { AddBox, Sort, SortOutlined } from '@mui/icons-material';
import {
  addTodo,
  filterTodoList,
  sortTodoList,
} from '../actions/actionCreators';
import { getNewTaskObject } from '../utils/getNewTaskObject';
import { AddNewTodoModal } from './AddNewTodoModal';
import { getSortingOption } from '../selectors/getSortingOption';

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
        dispatch(filterTodoList('all'));
      }
    },
    [dispatch, taskValue]
  );

  const selectHandler = useCallback(
    (event: SelectChangeEvent<SortingOption>) => {
      dispatch(sortTodoList(event.target.value as SortingOption));
      setOpen(!isOptionsOpen);
    },
    [dispatch, isOptionsOpen]
  );

  const togleOpenSortingOptins = () => {
    setOpen(!isOptionsOpen);
  };

  return (
    <div className="task-input-container">
      <Sort className="sort-icon" onClick={togleOpenSortingOptins} />
      <Select
        open={isOptionsOpen}
        onClose={togleOpenSortingOptins}
        onOpen={togleOpenSortingOptins}
        className="select-input"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortOption}
        IconComponent={SortOutlined}
        label="Sorting"
        onChange={selectHandler}
      >
        <MenuItem value="createdAt">Creation Date</MenuItem>
        <MenuItem value="task">Alphabetically</MenuItem>
      </Select>
      <TextField
        className="task-input-field"
        value={taskValue}
        onChange={taskValueChangeHandler}
        color="primary"
        id="outlined-basic"
        label="Describe Your Task"
        variant="outlined"
        onKeyDown={enterClickHandler}
      />

      <AddBox className="add-button-icon" onClick={toggleModalOpen} />
      {isModalOpen && (
        <AddNewTodoModal open={isModalOpen} onClose={toggleModalOpen} />
      )}
    </div>
  );
}
