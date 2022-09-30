import FilterBar from '../components/filter/FilterBar';
import Header from '../components/header/Header';
import TaskCards from '../components/cards/TaskCards';
import TaskInput from '../components/cards/TaskInput';

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
