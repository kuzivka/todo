import { AddBox } from '@mui/icons-material';
import { TextField } from '@mui/material';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, filterTodoList } from '../actions/actionCreators';
import { filterListBy } from '../enums';
import { getNewTaskObject } from '../utils/getNewTaskObject';
import { AddNewTodoModal } from './AddNewTodoModal';

export default function TaskInput() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState('');
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
        dispatch(filterTodoList(filterListBy.all));
      }
    },
    [dispatch, taskValue]
  );

  return (
    <div className="task-input-container">
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
