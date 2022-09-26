import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  ChangeEvent,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../actions/actionCreators';
import {
  getEditedTaskObject,
  getNewTaskObject,
} from '../utils/getNewTaskObject';

interface IAddNewTodoModalProps {
  open: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  task: ToDo;
  edit: boolean;
}

export function AddNewTodoModal(props: IAddNewTodoModalProps) {
  const currentDate = () => new Date();

  const { open, setModalOpen, task, edit } = props;
  const [taskValue, setTaskValue] = useState(task.task);
  const [expirationDate, setExpirationDate] = useState(task.expiresAt);
  const dispatch = useDispatch();

  const taskValueChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskValue(event.target.value.replace(/[^\w\s]/gi, ''));
    },
    []
  );

  const onDatePicking = useCallback((newValue: Date | null) => {
    if (newValue) {
      setExpirationDate(newValue.valueOf());
    }
  }, []);

  const handleSave = useCallback(() => {
    if (edit) {
      dispatch(
        editTodo(
          getEditedTaskObject({
            ...task,
            expiresAt: expirationDate,
            task: taskValue,
          })
        )
      );
    } else {
      dispatch(addTodo(getNewTaskObject(taskValue, expirationDate.valueOf())));
    }
    setTaskValue('');
    setModalOpen(false);
  }, [edit, setModalOpen, dispatch, task, expirationDate, taskValue]);

  const dateChangeHandler = () => (value: Date | null) => onDatePicking(value);

  const closeModal = () => setModalOpen(false);

  return (
    <Modal open={open} onClose={closeModal}>
      <Box className="modal-box" sx={{ boxShadow: 24, p: 4 }}>
        <Typography variant="h4" id="modal-title">
          Enter your task
        </Typography>

        <TextField
          value={taskValue}
          onChange={taskValueChangeHandler}
          color="primary"
          id="outlined-basic"
          label="Describe Your Task"
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            minDateTime={currentDate()}
            renderInput={(props) => <TextField {...props} />}
            label="Expiration  Date"
            ampm={false}
            inputFormat="dd.MM.yyyy HH:mm"
            value={expirationDate}
            onChange={dateChangeHandler()}
          />
        </LocalizationProvider>
        <Box className="button-box">
          <Button disabled={!taskValue.trim()} onClick={handleSave}>
            save
          </Button>
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
}
