import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { TIME_ON_CARDS } from '../components/constants';

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  return state.tasks.map((task) => {
    return {
      id: task.id,
      task: task.task,
      createdAt: format(task.createdAt, TIME_ON_CARDS),
      expiresAt: format(task.expiresAt, TIME_ON_CARDS),
      done: task.done,
    };
  });
};
