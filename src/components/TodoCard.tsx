import { Clear, Edit } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDone, deleteTodo, editTodo } from '../actions/actionCreators';
import { getTaskToEdit } from '../selectors/getTaskToEdit';
import { AddNewTodoModal } from './AddNewTodoModal';

interface ITodoCardProps {
  task: TodoToShow;
}

export default function TodoCard(props: ITodoCardProps) {
  const { id, task, done, expiresAt } = props.task;
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const taskToEdit = useSelector((state: ToDoState) =>
    getTaskToEdit(state, id)
  );

  const handleCheckboxChange = useCallback(() => {
    dispatch(toggleDone(id));
  }, [dispatch, id]);

  const deleteOnClick = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Box>
      <ListItem className="task-card">
        <Checkbox edge="start" onChange={handleCheckboxChange} checked={done} />
        <ListItemText
          className={done ? 'disabled-task' : ''}
          primary={task}
          secondary={`Expires at: ${expiresAt}`}
        />
        <IconButton onClick={handleModalOpen}>
          <Edit fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={deleteOnClick}>
          <Clear fontSize="medium" />
        </IconButton>
      </ListItem>
      <AddNewTodoModal
        open={isModalOpen}
        task={taskToEdit}
        setModalOpen={setModalOpen}
        edit={true}
      />
    </Box>
  );
}
