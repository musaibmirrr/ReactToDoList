import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function TodoForm({ onClick, todos }) {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length) {
      onClick([...todos, { data: task, id: uuid(), completed: false }]);
    }
    setTask("");
  };
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Add Task"
          variant="outlined"
          placeholder="What's on your mind"
          value={task}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          sx={{ height: 55 }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Add Task
        </Button>
      </form>
    </div>
  );
}
