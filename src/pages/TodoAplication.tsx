import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import TaskCards from '../components/TaskCards';
import TaskInput from '../components/TaskInput';

export default function TodoAplication() {
  return (
    <>
      <Header />
      <TaskInput />
      <FilterBar />
      <TaskCards />
    </>
  );
}
