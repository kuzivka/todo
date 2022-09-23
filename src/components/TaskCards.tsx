import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector);

  return (
    <List className="tasks-list">
      {tasks.map(({ id, task, expiresAt }) => (
        <ListItem key={id} className="task-card">
          <Checkbox edge="start" onChange={() => void 1} checked={false} />
          <ListItemText primary={task} secondary={`Expires at: ${expiresAt}`} />
        </ListItem>
      ))}
    </List>
  );
}
