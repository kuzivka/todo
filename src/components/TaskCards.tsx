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
      {tasks.map(({id, task, done, expiresAt}) => (
        <ListItem key={id} className="task-card">
          <Checkbox
            edge="start"
            onChange={() => handleCheckboxChange(id)}
            checked={done}
          />
          <ListItemText
            className={done ? 'disabled-task' : ''}
            primary={task}
            secondary={`Expires at: ${expiresAt}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
