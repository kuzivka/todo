import { List, Typography } from '@mui/material';
import { useState, Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';
import { EditTodoModal } from './EditTodoModal';
import TodoCard from './TodoCard';

export default function TaskCards() {
  const [taskToEditId, setTaskToEdit] = useState<string | undefined>();
  const tasks = useSelector(getTaskListToShowSelector);

  const resetTaskId = useCallback(() => {
    setTaskToEdit(undefined);
  }, [setTaskToEdit]);

  return (
    <Fragment>
      <List className="tasks-list">
        {tasks.map((task) => (
          <TodoCard key={task.id} task={task} onEditClick={setTaskToEdit} />
        ))}
      </List>
      {taskToEditId && (
        <EditTodoModal
          taskId={taskToEditId}
          open={!!taskToEditId}
          onClose={resetTaskId}
        />
      )}
      {tasks.length === 0 && (
        <Typography variant="subtitle1" className='no-item-title'>There are no items</Typography>
      )}
    </Fragment>
  );
}
