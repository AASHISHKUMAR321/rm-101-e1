import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ ele, data, fun }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [index, setIndex] = useState(ele.id);
  const [check, setCheck] = useState(ele.done);

  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        data-testid="task-checkbox"
        checked={check}
        onChange={() => {
          setCheck(!check);
        }}
      />
      <div data-testid="task-text">
        {check ? <s>{ele.text}</s> : `${ele.text}`}
      </div>

      {/* Counter here */}
      <Counter e={ele.count} />

      <button
        data-testid="task-remove-button"
        onClick={() => {
          fun(index);
        }}
      >
        remove
      </button>
    </li>
  );
};

export default Task;
