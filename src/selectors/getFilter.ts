import { Selector } from 'react-redux';
import { ToDoState } from '../store/store';

export const getFilter: Selector<ToDoState, TaskToShow> = (state) => state.todoList.filterBy;
