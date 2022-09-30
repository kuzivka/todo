import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    sortBy: 'createdAt' as SortingOption,
    filterBy: 'all' as TaskToShow,
    searchQuery: '',
  },
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
  },
});

export default todoListSlice.reducer;
export const { filterTodo, sortTodo, searchTodo } = todoListSlice.actions;
