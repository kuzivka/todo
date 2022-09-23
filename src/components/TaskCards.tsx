import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';
import { useCallback } from 'react';
import { toggleDone } from '../actions/actionCreators';

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
    <List className="tasks-list">
      {tasks.map((task) => (
        <ListItem key={task.id} className="task-card">
          <Checkbox
            edge="start"
            onChange={() => handleCheckboxChange(task.id)}
            checked={task.done}
          />
          <ListItemText
            className={task.done ? 'disabled-task' : ''}
            primary={task.task}
            secondary={`Expires at: ${task.expiresAt}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
