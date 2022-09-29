import {
  ADD_TODO,
  TOGGLE_DONE,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  DELETE_COMPLETED,
  SORT_TODO,
  SEARCH_TODO,
} from './actions';

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

export const editTodo = (task: ToDo) => {
  return {
    type: EDIT_TODO,
    payload: task,
  };
};

export const filterTodoList = (filterBy: TaskToShow) => {
  return {
    type: FILTER_TODO,
    payload: filterBy,
  };
};

export const deleteComletedFromTodoList = () => {
  return { type: DELETE_COMPLETED };
};

export const sortTodoList = (sortBy: SortingOption) => {
  return { type: SORT_TODO, payload: sortBy };
};

export const searchTodo = (searchQuery: string) => {
  return { type: SEARCH_TODO, payload: searchQuery };
};
