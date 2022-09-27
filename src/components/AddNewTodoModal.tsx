import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/actionCreators';
import { getNewTaskObject } from '../utils/getNewTaskObject';
import { TaskViewModal } from './TaskViewModal';

interface IAddNewTodoModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddNewTodoModal(props: IAddNewTodoModalProps) {
  const { open, onClose } = props;
  const dispatch = useDispatch();

  const handleSave = useCallback(
    (taskValue: string, expirationDate: number) => {
      dispatch(addTodo(getNewTaskObject(taskValue, expirationDate.valueOf())));
      onClose();
    },
    [dispatch, onClose]
  );

  return <TaskViewModal open={open} onClose={onClose} onSave={handleSave} />;
}
