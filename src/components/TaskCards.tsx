import React from 'react';
import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';
import { useCallback } from 'react';
import { toggleDone } from '../actions/actionCreators';

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback((id: string) => {
    dispatch(toggleDone(id))
  }, [dispatch])

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
          <Checkbox edge="start" onChange={() => handleCheckboxChange(task.id)} checked={task.done} />
          <ListItemText
            primary={task.task}
            secondary={`Expires at: ${task.expiresAt}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
