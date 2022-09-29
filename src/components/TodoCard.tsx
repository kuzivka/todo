import { Clear, Edit } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../actions/actionCreators';

interface ITodoCardProps {
  task: TodoToShow;
  onEditClick: Dispatch<SetStateAction<string | undefined>>;
}

export default function TodoCard({ task, onEditClick }: ITodoCardProps) {
  const { id, task: taskValue, done, expiresAt, createdAt } = task;

  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(() => {
    dispatch(toggleDone(id));
  }, [dispatch, id]);

  const deleteOnClick = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  const handleIconButtonClick = () => {
    onEditClick(id);
  };

  return (
    <>
      <ListItem className="task-card">
        <Checkbox edge="start" onChange={handleCheckboxChange} checked={done} />
        <ListItemText
        
          className={done ? 'disabled-task card-date' : 'card-date'}
          primary={taskValue}
          secondary={`Created at: ${createdAt}\nExpires at: ${expiresAt}`}
        />
        <IconButton onClick={handleIconButtonClick}>
          <Edit fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={deleteOnClick}>
          <Clear fontSize="medium" />
        </IconButton>
      </ListItem>
    </>
  );
}
