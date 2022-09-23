import {
  useState,
  useCallback,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react';
import addHours from 'date-fns/addHours';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addTodo } from '../actions/actionCreators';
import { getNewTaskObject } from '../utils/getNewTaskObject';
import { AddNewTodoModal } from './AddNewTodoModal';

export default function TaskInput() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState('');
  const [modalExpirationDate, setExpirationDateForModal] = useState(new Date());
  const dispatch = useDispatch();

  const oneDayInAdvanceFromNow = () => addHours(Date.now(), 24);

  const modalToggleOpen = useCallback(() => {
    if (!isModalOpen) {
      setExpirationDateForModal(oneDayInAdvanceFromNow());
    }
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const taskValueChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setTaskValue(event.target.value);
    }, []);

  const enterClickHandler: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.key === 'Enter' && taskValue.trim()) {
        event.preventDefault();
        dispatch(addTodo(getNewTaskObject(taskValue)));
        setTaskValue('');
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
        inputProps={{ pattern: '[a-zA-Z0-9]+$' }}
        id="outlined-basic"
        label="Describe Your Task"
        variant="outlined"
        onKeyDown={enterClickHandler}
      />

      <AddBoxIcon className="add-button-icon" onClick={modalToggleOpen} />
      <AddNewTodoModal
        open={isModalOpen}
        modalExpirationDate={modalExpirationDate}
        modalToggleOpen={modalToggleOpen}
      />
    </div>
  );
}
