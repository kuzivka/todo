import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector)

  return (
    <List
      sx={{ width: '400px', maxWidth: '80vw', bgcolor: 'background.paper' }}
    >
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemText primary={task.task} secondary={task.expiresAt} />
        </ListItem>
      ))}
    </List>
  )
}
