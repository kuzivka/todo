import { ADD_TODO } from './actions';

export const addTodo = (task: ToDo) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

