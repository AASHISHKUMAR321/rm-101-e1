import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 5;
  let unCompletedTask = 3;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <span>You Have a </span>{" "}
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <span>of</span>
      <b data-testid="header-total-task">{totalTask}</b>
      <span>Tasks Remaining</span>
    </div>
  );
};

export default TaskHeader;
