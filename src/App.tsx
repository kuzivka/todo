import { createTheme, ThemeProvider } from '@mui/material/styles';
import TodoAplication from './pages/TodoAplication';
import './styles/style.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodoAplication />
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
