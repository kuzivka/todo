import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
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
