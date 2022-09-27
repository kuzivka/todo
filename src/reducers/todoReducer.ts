import {
  ToDoAction,
  ToggleDoneAction,
  DeleteTodoAction,
  FilterTodoAction,
  DeleteComletedAction,
} from '../actions/action.types';
import {
  ADD_TODO,
  DELETE_COMPLETED,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  TOGGLE_DONE,
} from '../actions/actions';

const initialState: ToDoState = {
  tasks: [],
  sortBy: 'createdAt',
  show: 'all',
};

export const todoReducer = (
  state: ToDoState = initialState,
  action:
    | ToDoAction
    | ToggleDoneAction
    | DeleteTodoAction
    | FilterTodoAction
    | DeleteComletedAction
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
      const newState = { ...state };
      const taskToUpdate = newState.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      newState.tasks[taskToUpdate] = action.payload;
      return newState;
    }
    case FILTER_TODO: {
      const newState = { ...state, show: action.payload };
      return newState;
    }
    case DELETE_COMPLETED: {
      const newListOfTasks = state.tasks.filter((task) => task.done === false);
      return {...state, tasks: newListOfTasks}
    }
    default:
      return state;
  }
};
