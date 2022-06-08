import React, { useState } from "react";
import { validate } from "uuid";
import styles from "./addTask.module.css";

const AddTask = ({ data }) => {
  const [task, setTask] = useState({
    id: Math.random(),
    text: "",
    count: 1,
    done: false,
  });
  const inputHandler = (e) => {
    setTask({ ...task, text: e.target.value });
  };
  console.log(data);
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
          data.push(task);
          console.log(data);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
