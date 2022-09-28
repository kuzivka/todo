import { createTheme, ThemeProvider } from '@mui/material/styles';
import FilterBar from './components/FilterBar';
import Header from './components/Header';
import './components/styles/style.scss';
import TaskCards from './components/TaskCards';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <TaskInput />
        <FilterBar />
        <TaskCards />
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#1e1e1e',
      main: '#2b2b2b',
      dark: '#555555',
    },
  },
});

export default App;
