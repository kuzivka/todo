import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import todoListReducer from './reducers/todoListSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  todo: todoReducer,
  todoList: todoListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export type ToDoState = ReturnType<typeof store.getState>;
