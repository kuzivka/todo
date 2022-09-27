import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  if (state.show === 'active') {
    return state.tasks
      .filter((task) => task.done === false)
      .map((task) => {
        return {
          id: task.id,
          task: task.task,
          createdAt: format(task.createdAt, 'd.L.yyyy H:mm'),
          expiresAt: format(task.expiresAt, 'd.L.yyyy H:mm'),
          done: task.done,
        };
      });
  }
  if (state.show === 'completed') {
    return state.tasks
      .filter((task) => task.done === true)
      .map((task) => {
        return {
          id: task.id,
          task: task.task,
          createdAt: format(task.createdAt, 'd.L.yyyy H:mm'),
          expiresAt: format(task.expiresAt, 'd.L.yyyy H:mm'),
          done: task.done,
        };
      });
  } else
    return state.tasks.map((task) => {
      return {
        id: task.id,
        task: task.task,
        createdAt: format(task.createdAt, 'd.L.yyyy H:mm'),
        expiresAt: format(task.expiresAt, 'd.L.yyyy H:mm'),
        done: task.done,
      };
    });
};
