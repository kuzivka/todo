import {
  List
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getTaskListToShowSelector } from '../selectors/getTaskListToShowSelector';
import TodoCard from './TodoCard';

export default function TaskCards() {
  const tasks = useSelector(getTaskListToShowSelector);
 
  return (
    <List className="tasks-list">
      {tasks.map((task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </List>
  );
}
