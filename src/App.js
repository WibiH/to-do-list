import "./App.css";
import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoTask from "./components/ToDoTask";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <label>New Task</label>
      <input type="text" value={task} />
      <button onClick={() => setTask(task + 1)}>Add</button>
      <ToDoList />
    </div>
  );
}

export default App;
