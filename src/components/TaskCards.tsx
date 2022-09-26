import { Clear, Edit } from '@mui/icons-material';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, toggleDone } from '../actions/actionCreators';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (id: string) => {
      dispatch(toggleDone(id));
    },
    [dispatch]
  );

  const deleteOnClick = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (taskId: string)=>{
      dispatch(editTodo(taskId))
    }, [dispatch]
  )

  return (
    <List className="tasks-list">
      {tasks.map(({id, task, expiresAt, done}) => (
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
          <IconButton aria-label="edit" size="small" onClick={()=>handleEdit(id)}>
            <Edit fontSize="small" />
          </IconButton >
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => deleteOnClick(id)}
          >
            <Clear fontSize="medium" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
