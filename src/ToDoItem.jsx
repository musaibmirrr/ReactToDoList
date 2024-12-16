import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function TodoItem({ todo, removeTodo,toggleComplete }) {
  return (
    <div>
      <Checkbox checked={todo.completed} onChange={toggleComplete} {...label} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.data}
      </span>
      <IconButton onClick={removeTodo} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
