import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    tasks: [],
    sortBy: 'createdAt',
    filterBy: 'all',
    searchQuery: '',
  } as ToDoState,
  reducers: {
    filterTodo: (state, action) => {
      state.filterBy = action.payload;
    },
    searchTodo: (state, action) => {
      state.searchQuery = action.payload;
    },
    sortTodo: (state, action) => {
      state.sortBy = action.payload;
    },
    deleteCompletedTodo: (state) => {
      const filteredArrayOfTasks = state.tasks.filter((task) => !task.done);
      state.tasks = filteredArrayOfTasks;
    },
  },
});

export default todoListSlice.reducer;
export const {
  filterTodo,
  sortTodo,
  deleteCompletedTodo,
  searchTodo,
} = todoListSlice.actions;
