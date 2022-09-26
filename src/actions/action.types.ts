import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from './actions';

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
