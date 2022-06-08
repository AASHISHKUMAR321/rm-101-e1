import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

const TaskApp = ({ data }) => {
  // NOTE: do not delete `data-testid` key value pair
  console.log(data);
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <h1>Todo App</h1>
      <TaskHeader />
      {/* Add Task */}
      <AddTask data={data} />
      <Tasks task={data} />
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
