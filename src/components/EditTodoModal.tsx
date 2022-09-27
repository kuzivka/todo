import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, filterTodoList } from '../actions/actionCreators';
import { getTaskToEdit } from '../selectors/getTaskToEdit';
import { TaskViewModal } from './TaskViewModal';

interface EditTodoModalProps {
  open: boolean;
  taskId: string;
  onClose: () => void;
}

export function EditTodoModal(props: EditTodoModalProps) {
  const { open, onClose, taskId } = props;
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state: ToDoState) =>
    getTaskToEdit(state, taskId)
  );

  const handleSave = useCallback(
    (taskValue: string, expirationDate: number) => {
      dispatch(
        editTodo({
          ...taskToEdit,
          task: taskValue,
          expiresAt: expirationDate,
          done: false,
        })
      );
      dispatch(filterTodoList('all'));
      onClose();
    },
    [dispatch, onClose, taskToEdit]
  );

  return (
    <TaskViewModal
      initialTask={taskToEdit}
      open={open}
      onClose={onClose}
      onSave={handleSave}
    />
  );
}
