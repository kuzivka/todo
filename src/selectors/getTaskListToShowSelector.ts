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

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  const filterByFunc = applyFiltering(state.filterBy);
  return state.tasks.filter(filterByFunc).map((task) => {
    return {
      id: task.id,
      task: task.task,
      createdAt: format(task.createdAt, TIME_ON_CARDS),
      expiresAt: format(task.expiresAt, TIME_ON_CARDS),
      done: task.done,
    };
  });
};
