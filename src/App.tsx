import { useStore } from 'react-redux';


function App() {

  const store = useStore();

  return (
    <div className='App' style={{textAlign: 'center'}}>
      <h1>To Do List</h1>
      <h2>add your tasks</h2>
    </div>
  );
}

export default App;
