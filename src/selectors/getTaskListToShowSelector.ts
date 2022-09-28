import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { TIME_ON_CARDS } from '../constants';
import { filterListBy } from '../enums';

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
  if (sortBy === 'createdAt') {
    return b.createdAt - a.createdAt;
  }
  if (sortBy === 'task') {
    return a.task.localeCompare(b.task);
  }
  return 0;
};

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  const filterByFunc = applyFiltering(state.filterBy);
  const sortyByFunc = applySorting(state.sortBy);
  return state.tasks
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
