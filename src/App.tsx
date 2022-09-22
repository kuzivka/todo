import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import TaskCard from "./components/TaskCards";
import TaskInput from "./components/TaskInput";

function App() {

  return (
      <ThemeProvider theme={theme}>
        <div className="App" style={{ textAlign: "center" }}>
          <Header />
          <TaskInput />
          <TaskCard />
        </div>
      </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#1e1e1e",
      main: "#2b2b2b",
      dark: "#555555",
    },
  },
});

export default App;
