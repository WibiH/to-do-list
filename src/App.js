import "./App.css";
import React, { useState } from "react";

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
  };

  return (
    <div className="App">
      <h1>All I want ToDo is this ToDo List...</h1>
      <div className="list-box">
        <div>
          <input
            type="text"
            value={input}
            onInput={(event) => setInput(event.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        <ul id="taskList">
          {tasks.map((task) => {
            return (
              <li key={task}>
                <input
                  className="form-control"
                  type={"checkbox"}
                  onClick={toggleTask}
                />
                {(checked && (
                  <span id="striked">
                    <label>{task}</label>
                  </span>
                )) || <label>{task}</label>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
