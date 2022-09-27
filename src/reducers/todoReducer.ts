import {
  ToDoAction,
  ToggleDoneAction,
  DeleteTodoAction,
} from '../actions/action.types';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_DONE,
} from '../actions/actions';

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
      const newListOfTasks = state.tasks.map((task) => ({ ...task }));
      const newState = { ...state, tasks: newListOfTasks };
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
    case EDIT_TODO: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return (task = action.payload);
        } else {
          return task;
        }
      });
      const newState = { ...state, tasks: updatedTasks };
      return newState;
    }
    default:
      return state;
  }
};
