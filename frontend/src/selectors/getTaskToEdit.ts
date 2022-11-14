import { Selector } from '@reduxjs/toolkit';
import { ToDoState } from '../store/store';
import { getNewTaskObject } from '../utils/getNewTaskObject';

export const getTaskToEdit: Selector<ToDoState, ToDo> = (state, id: string) => {
  const taskToEdit = state.todo.tasks.find((task) => task.id === id);
  if (taskToEdit) {
    return {
      ...taskToEdit,
    };
  } else {
    return getNewTaskObject();
  }
};
