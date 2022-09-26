import { addHours } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const oneDayInAdvanceFromNow = () => addHours(Date.now(), 24).valueOf();

export function getNewTaskObject(
  task: string,
  expirationDate: number = oneDayInAdvanceFromNow()
): ToDo {
  return {
    id: uuidv4(),
    task,
    createdAt: Date.now().valueOf(),
    expiresAt: expirationDate,
    done: false,
  };
}

export function getEditedTaskObject(
  id: string,
  task: string,
  createdAt: number,
  expiresAt: number
): ToDo {
  return {
    id,
    task,
    createdAt,
    expiresAt,
    done: false
  };
}
