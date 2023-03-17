import { useState } from "react";

const ToDoTask = () => {
  return (
    <form>
      <div>
        <input id="input-task" type="checkbox" name="task-name" />
        <label htmlFor="input-task">Task</label>
      </div>
    </form>
  );
};

export default ToDoTask;
