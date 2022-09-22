import { useState, useCallback, ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addTodo } from '../actions/actionCreators';
import { getNewTaskObject } from '../utils/getNewTaskObject';
import { AddNewTodoModal } from './AddNewTodoModal';

export default function TaskInput() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState('');
  const dispatch = useDispatch();

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const taskValueChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setTaskValue(event.target.value);
    }, []);

  const enterClickHandler = useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        dispatch(addTodo(getNewTaskObject(taskValue)));
        setTaskValue('');
      }
    },
    [dispatch, taskValue]
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TaskInputField
        value={taskValue}
        onChange={taskValueChangeHandler}
        color="primary"
        inputProps={{ pattern: '[a-zA-Z0-9]+$' }}
        id="outlined-basic"
        label="Describe Your Task"
        variant="outlined"
        onKeyDown={enterClickHandler}
      />

      <AddButton onClick={handleModalOpen} />
      <AddNewTodoModal open={isModalOpen} handleClose={handleModalClose} />
    </div>
  );
}

const AddButton = styled(AddBoxIcon)`
  font-size: 70px;
  &:hover {
    cursor: pointer;
  }
`;

const TaskInputField = styled(TextField)`
  width: 400px;
  max-width: 80vw;
`;
