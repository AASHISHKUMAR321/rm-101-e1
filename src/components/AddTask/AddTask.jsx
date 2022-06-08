import React, { useState } from "react";
import { validate } from "uuid";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [task, setTask] = useState("");
  const inputHandler = (e) => {
    setTask(e.target.value);
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add Task..."
        onChange={inputHandler}
      />
      <button
        data-testid="add-task-button"
        onClick={() => {
          console.log(task);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
