import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Modal, Box, Button, Typography } from '@mui/material';
import { addTodo } from '../actions/actionCreators';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { getNewTaskObject } from '../utils/getNewTaskObject';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '400px',
  height: '400px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const currentDate = new Date();

interface IAddNewTodoModalProps {
  open: boolean;
  handleClose: () => void;
}

export function AddNewTodoModal(props: IAddNewTodoModalProps) {
  const { open, handleClose } = props;
  const [taskValue, setTaskValue] = useState('');
  const [expirationDate, setExpirationDate] = useState(currentDate);
  const dispatch = useDispatch();

  const taskValueChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTaskValue(event.target.value);
    },
    []
  );

  const createNewTask = useCallback(() => {
    dispatch(addTodo(getNewTaskObject(taskValue, expirationDate.valueOf())));
    setTaskValue('');
    setExpirationDate(new Date());
    handleClose();
  }, [dispatch, handleClose, expirationDate, taskValue]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
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
            minDateTime={currentDate}
            renderInput={(props) => <TextField {...props} />}
            label="Expiration  Date"
            ampm={false}
            inputFormat="dd/MM/yyyy HH:mm"
            value={expirationDate}
            onChange={(newValue: Date | null) => {
              if (newValue) {
                console.log(newValue);
                setExpirationDate(newValue);
              }
            }}
          />
        </LocalizationProvider>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button disabled={taskValue.trim() === ''} onClick={createNewTask}>
            save
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
}
