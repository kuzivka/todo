import { ADD_TODO, TOGGLE_DONE } from './actions';

export interface ToDoAction {
  type: typeof ADD_TODO;
  payload: ToDo;
}

export interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: string;
}
