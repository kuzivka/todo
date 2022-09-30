import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [] as ToDo[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },

    toggleDone: (state, action) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (taskToUpdate) {
        taskToUpdate.done = !taskToUpdate.done;
      }
    },
    deleteTodo: (state, action) => {
      const newListOfTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: newListOfTasks };
    },
    editTodo: (state, action) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return (task = action.payload);
        } else {
          return task;
        }
      });
      const newState = { ...state, tasks: updatedTasks };
      return newState;
    },
    deleteCompletedTodo: (state) => {
      const filteredArrayOfTasks = state.tasks.filter((task) => !task.done);
      state.tasks = filteredArrayOfTasks;
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  toggleDone,
  deleteTodo,
  editTodo,
  deleteCompletedTodo,
} = todoSlice.actions;
