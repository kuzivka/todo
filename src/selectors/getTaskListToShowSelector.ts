import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  return state.tasks.map((task) => {
    return {
      id: task.id,
      task: task.task,
      expiresAt: format(task.expiresAt, 'd.L.yyyy H:mm'),
      done: task.done,
    };
  });
};
