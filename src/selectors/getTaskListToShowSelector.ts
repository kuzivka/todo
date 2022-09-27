import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { TIME_ON_CARDS } from '../constants';

const filteredList = (state: ToDoState) => {
  return state.show === 'active'
    ? state.tasks.filter((task: ToDo) => task.done === false)
    : state.show === 'completed'
    ? state.tasks.filter((task: ToDo) => task.done === true)
    : state.tasks;
};

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => {
  return filteredList(state).map((task) => {
    return {
      id: task.id,
      task: task.task,
      createdAt: format(task.createdAt, TIME_ON_CARDS ),
      expiresAt: format(task.expiresAt, TIME_ON_CARDS),
      done: task.done,
    };
  });
};
