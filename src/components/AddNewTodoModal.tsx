import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/actionCreators';
import { getNewTaskObject } from '../utils/getNewTaskObject';

interface IAddNewTodoModalProps {
  open: boolean;
  modalExpirationDate: Date;
  modalToggleOpen: () => void;
}

export function AddNewTodoModal(props: IAddNewTodoModalProps) {
  const currentDate = () => new Date();

  const { open, modalToggleOpen, modalExpirationDate } = props;
  const [taskValue, setTaskValue] = useState('');
  const [expirationDate, setExpirationDate] = useState(modalExpirationDate);
  const dispatch = useDispatch();

  const taskValueChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskValue(event.target.value);
    },
    []
  );

  const onDatePicking = useCallback((newValue: Date | null) => {
    if (newValue) {
      setExpirationDate(newValue);
    }
  }, []);

  const createNewTask = useCallback(() => {
    dispatch(addTodo(getNewTaskObject(taskValue, expirationDate.valueOf())));
    setTaskValue('');
    setExpirationDate(new Date());
    modalToggleOpen();
  }, [dispatch, modalToggleOpen, expirationDate, taskValue]);

  return (
    <Modal open={open} onClose={modalToggleOpen}>
      <Box className="modal-box" sx={{ boxShadow: 24, p: 4 }}>
        <Typography variant="h4" id="modal-title">
          Enter your task
        </Typography>

        <TextField
          value={taskValue}
          onChange={taskValueChangeHandler}
          color="primary"
          inputProps={{ pattern: '[a-zA-Z0-9]+$' }}
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
            onChange={(newValue) => onDatePicking(newValue)}
          />
        </LocalizationProvider>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button disabled={!taskValue.trim()} onClick={createNewTask}>
            save
          </Button>
          <Button onClick={modalToggleOpen}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
}
