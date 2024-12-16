import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoForm from "./ToDoForm";
import Navbar from "./Navbar";
import TodoList from "./ToDoList";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList/>
    </>
  );
}

export default App;
