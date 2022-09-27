import { Selector } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const filteredList = (state: ToDoState) => {
return (
  (state.show==='active')?(state.tasks.filter((task: ToDo) => task.done === false)):
  (state.show==='completed')?(state.tasks.filter((task: ToDo) => task.done === true)):
  (state.tasks));
}

export const getTaskListToShowSelector: Selector<ToDoState, TodoToShow[]> = (
  state
) => { return filteredList(state).map((task) => {
      return {
        id: task.id,
        task: task.task,
        createdAt: format(task.createdAt, 'd.L.yyyy H:mm'),
        expiresAt: format(task.expiresAt, 'd.L.yyyy H:mm'),
        done: task.done,
      };
    });
};
