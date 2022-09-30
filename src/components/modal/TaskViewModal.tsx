import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { addDays } from 'date-fns';
import { ChangeEvent, useCallback, useState } from 'react';
import { TIME_IN_MODAL } from '../constants';

interface ITaskViewModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (taskValue: string, expirationDate: number) => void;
  initialTask?: ToDo;
}

const stylesForModal = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '400px',
  height: '400px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  border: '2px solid #2b2b2b',
  boxShadow: 24,
  p: 4,
};

export function TaskViewModal(props: ITaskViewModalProps) {
  const minDate = new Date();
  const oneDayAdvanceDate = addDays(new Date(), 1);

  const { open, initialTask, onClose, onSave } = props;

  const [taskValue, setTaskValue] = useState(initialTask?.task ?? '');
  const [expirationDate, setExpirationDate] = useState<number>(
    initialTask?.expiresAt ? initialTask.expiresAt : oneDayAdvanceDate.valueOf()
  );

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
    if (taskValue && expirationDate) {
      onSave(taskValue, expirationDate);
    }
  }, [taskValue, expirationDate, onSave]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box" sx={{ ...stylesForModal }}>
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
            disabled
            renderInput={(props) => <TextField {...props} />}
            label="Creation Date"
            ampm={false}
            inputFormat={TIME_IN_MODAL}
            onChange={onDatePicking}
            value={initialTask?.createdAt}
          />
          <DateTimePicker
            minDateTime={minDate}
            renderInput={(props) => <TextField {...props} />}
            label="Expiration  Date"
            ampm={false}
            inputFormat={TIME_IN_MODAL}
            value={expirationDate}
            onChange={onDatePicking}
          />
        </LocalizationProvider>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose}>Close</Button>
          <Button disabled={!taskValue?.trim()} onClick={handleSave}>
            save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
