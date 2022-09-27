import { Selector } from 'react-redux';

export const getFilter: Selector<ToDoState, TaskToShow> = (state) => state.filterBy;
