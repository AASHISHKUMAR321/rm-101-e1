import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ e }) => {
  // sample value to be replaced
  const [count, setCount] = useState(e);
  const countHandler = (value) => {
    if (count < 1) return;
    setCount(count + value);
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          countHandler(1);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          countHandler(-1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
