import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import todoListReducer from './reducers/todoListSlice';

export const store = configureStore({
  reducer: { todo: todoReducer, todoList: todoListReducer },
});
