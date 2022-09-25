import { ADD_TODO, TOGGLE_DONE } from './actions';

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
