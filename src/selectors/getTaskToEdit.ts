import { Selector } from '@reduxjs/toolkit';
import { getNewTaskObject } from '../utils/getNewTaskObject';

export const getTaskToEdit: Selector<ToDoState, ToDo> = (state, id: string) => {
  const taskToEdit = state.tasks.find((task) => task.id === id);
  if (taskToEdit) {
    return {
      ...taskToEdit,
    };
  } else {
    return getNewTaskObject();
  }
};

