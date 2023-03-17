import React, { useState } from "react";

/* 
input task, add button
handle task add, trigger new task production
put new task in list of tasks
 */
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <label>New Task</label>
      <input
        type="text"
        value={input}
        onInput={(event) => setInput(event.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <div>
        {tasks.map((task) => {
          return (
            <div key={task}>
              <input type={"checkbox"} />
              <label>{task}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
