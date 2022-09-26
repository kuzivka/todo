import { ADD_TODO, TOGGLE_DONE, DELETE_TODO } from './actions';

export const addTodo = (task: ToDo) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const toggleDone = (taskId: string) => {
  return {
    type: TOGGLE_DONE,
    payload: taskId,
  };
};

export const deleteTodo = (taskId: string) => {
  return {
    type: DELETE_TODO,
    payload: taskId,
  };
};
