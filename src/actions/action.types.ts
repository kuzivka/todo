import {
  ADD_TODO,
  DELETE_COMPLETED,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  TOGGLE_DONE,
} from './actions';

export interface ToDoAction {
  type: typeof ADD_TODO | typeof EDIT_TODO;
  payload: ToDo;
}

export interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export interface FilterTodoAction {
  type: typeof FILTER_TODO;
  payload: TaskToShow;
}

export interface DeleteComletedAction {
  type: typeof DELETE_COMPLETED;
}
