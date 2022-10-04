import { Selector } from 'react-redux';
import { ToDoState } from '../store/store';

export const getSortingOption: Selector<ToDoState, SortingOption> = (state) =>
  state.todoList.sortBy;
