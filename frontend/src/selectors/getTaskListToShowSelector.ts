import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { TIME_ON_CARDS } from '../components/constants';
import { filterListBy, sortListBy } from '../enums';
import { ToDoState } from '../store/store';

const applyFiltering = (filterBy: TaskToShow) => (task: ToDo) => {
  if (filterBy === filterListBy.active) {
    return !task.done;
  }
  if (filterBy === filterListBy.comleted) {
    return task.done;
  }
  return true;
};

const applySorting = (sortBy: SortingOption) => (a: ToDo, b: ToDo) => {
  if (sortBy === sortListBy.createdAt) {
    return b.createdAt - a.createdAt;
  }
  if (sortBy === sortListBy.task) {
    return a.task.localeCompare(b.task);
  }
  return 0;
};

const applySearch = (searchQuery: string) => (task: ToDo) => {
  return task.task.toLowerCase().includes(searchQuery.toLowerCase());
};

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  const filterByFunc = applyFiltering(state.todoList.filterBy);
  const sortyByFunc = applySorting(state.todoList.sortBy);
  return state.todo.tasks
    .filter(applySearch(state.todoList.searchQuery))
    .filter(filterByFunc)
    .sort(sortyByFunc)
    .map((task) => {
      return {
        id: task.id,
        task: task.task,
        createdAt: format(task.createdAt, TIME_ON_CARDS),
        expiresAt: format(task.expiresAt, TIME_ON_CARDS),
        done: task.done,
      };
    });
};
