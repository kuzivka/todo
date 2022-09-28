import { Selector } from 'react-redux';

export const getSortingOption: Selector<ToDoState, SortingOption> = (state) =>
  state.sortBy;
