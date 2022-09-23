import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDone } from '../actions/actionCreators';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';

const styleForDoneTasks = {
  textDecorationLine: 'line-through',
  color: '#ddd',
  '.MuiListItemText-secondary': {
    color: '#ddd',
  },
};

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (id: string) => {
      dispatch(toggleDone(id));
    },
    [dispatch]
  );

  return (
    <List
      sx={{ width: '600px', maxWidth: '80vw', bgcolor: 'grey', margin: 'auto' }}
    >
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{
            border: '1px solid #ddd',
            borderBottom: 'none',
            '&:last-child': { borderBottom: '1px solid #ddd' },
          }}
        >
          <Checkbox
            edge="start"
            onChange={() => handleCheckboxChange(task.id)}
            checked={task.done}
          />
          <ListItemText
            sx={task.done ? styleForDoneTasks : {}}
            primary={task.task}
            secondary={`Expires at: ${task.expiresAt}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
