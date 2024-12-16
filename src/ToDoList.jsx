import { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if(!data) return [];
  return data;
}
export default function TodoList() {
  const [tasks, setTasks] = useState(getInitialData);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(tasks))
  },[tasks]);

  const removeTodo = (id) => {
    setTasks((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div>
      <h1>Your Tasks</h1>
      {tasks.map((t) => {
        return (
          <TodoItem
            todo={t}
            removeTodo={() => removeTodo(t.id)}
            toggleComplete={() => toggleComplete(t.id)}
            key={uuid()}
          />
        );
      })}
      <TodoForm todos={tasks} onClick={setTasks} />
    </div>
  );
}
