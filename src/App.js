import "./App.css";
import React, { useState } from "react";

/* 
input task, add button
handle task add, trigger new task production
put new task in list of tasks
 */
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  const handleAddTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const toggleTask = () => {
    setChecked(true);
    console.log(checked);
  };

  return (
    <div className="App">
      <h1>All I want ToDo is this ToDo List...</h1>
      <input
        type="text"
        value={input}
        onInput={(event) => setInput(event.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <div id="taskList">
        {tasks.map((task) => {
          return (
            <div key={task}>
              <input type={"checkbox"} onClick={toggleTask} />
              {(checked && (
                <span id="striked">
                  <label>{task}</label>
                </span>
              )) || <label>{task}</label>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
