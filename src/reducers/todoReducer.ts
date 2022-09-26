import {
  ToDoAction,
  ToggleDoneAction,
  DeleteTodoAction,
} from '../actions/action.types';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from '../actions/actions';

const initialState: ToDoState = {
  tasks: [],
  sortBy: 'createdAt',
  hideDone: false,
};

export const todoReducer = (
  state: ToDoState = initialState,
  action: ToDoAction | ToggleDoneAction | DeleteTodoAction
): ToDoState => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case TOGGLE_DONE: {
      const newState = { ...state };
      const taskToUpdate = newState.tasks.find(
        (task) => task.id === action.payload
      );
      if (taskToUpdate) {
        taskToUpdate.done = !taskToUpdate.done;
      }
      return newState;
    }
    case DELETE_TODO: {
      const newListOfTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: newListOfTasks };
    }
    case EDIT_TODO:{
      
    }
    default:
      return state;
  }
};
