import React, { useState } from "react";
import { validate } from "uuid";
import styles from "./addTask.module.css";

const AddTask = ({ data, fun }) => {
  const [task, setTask] = useState({
    id: Math.random(),
    text: "",
    count: 1,
    done: false,
  });
  const inputHandler = (e) => {
    setTask({ ...task, text: e.target.value });
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
          fun(task);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
