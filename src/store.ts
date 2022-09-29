import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/reducer';

export const store = configureStore({ reducer: todoReducer });
