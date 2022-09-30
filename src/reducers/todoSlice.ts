import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    sortBy: 'createdAt',
    filterBy: 'all',
    searchQuery: '',
  } as ToDoState,
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
      state.tasks.filter((task) => task.id !== action.payload);
    },
    editTodo: (state, action) => {
      let taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (taskToUpdate) {
        taskToUpdate = action.payload;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleDone, deleteTodo, editTodo } = todoSlice.actions;
