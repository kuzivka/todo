import { ToDoAction, ToggleDoneAction } from '../actions/action.types';
import { ADD_TODO, TOGGLE_DONE } from '../actions/actions';

const initialState: ToDoState = {
  tasks: [],
  sortBy: 'createdAt',
  hideDone: false,
};

export const todoReducer = (
  state: ToDoState = initialState,
  action: ToDoAction | ToggleDoneAction
): ToDoState => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case TOGGLE_DONE: {
      const newState = { ...state, tasks: [...state.tasks] };
      const taskToUpdate = newState.tasks.find(
        (task) => task.id === action.payload
      );
      if (taskToUpdate) {
        taskToUpdate.done = !taskToUpdate.done;
      }
      return newState;
    }
    default:
      return state;
  }
};
