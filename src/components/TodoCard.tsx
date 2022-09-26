import { Clear } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from '../actions/actionCreators';

interface ITodoCardProps {
  task: TodoToShow;
}

export default function TodoCard(props: ITodoCardProps) {
  const { id, task, done, expiresAt } = props.task;
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(() => {
    dispatch(toggleDone(id));
  }, [dispatch, id]);

  const deleteOnClick = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  return (
    <ListItem className="task-card">
      <Checkbox edge="start" onChange={handleCheckboxChange} checked={done} />
      <ListItemText
        className={done ? 'disabled-task' : ''}
        primary={task}
        secondary={`Expires at: ${expiresAt}`}
      />
      <IconButton aria-label="delete" size="small" onClick={deleteOnClick}>
        <Clear fontSize="medium" />
      </IconButton>
    </ListItem>
  );
}
