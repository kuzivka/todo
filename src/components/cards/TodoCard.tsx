import { Clear, Edit } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../../store/reducers/todoSlice';

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
      <ListItem
        sx={{
          border: '1px solid #ddd',
          borderBottom: 'none',
          '&:last-child': { border: '1px solid #ddd' },
        }}
      >
        <Checkbox edge="start" onChange={handleCheckboxChange} checked={done} />
        <ListItemText
          sx={[{ whiteSpace: 'break-spaces' }, done && styleForDisabledTask]}
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

const styleForDisabledTask = {
  textDecorationLine: 'line-through',
  color: '#ddd',
  '.MuiListItemText-secondary': {
    color: '#ddd',
  },
};
