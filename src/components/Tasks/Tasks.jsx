import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ task }) => {
  const [data, setData] = useState(task);
  const [remove, setRemove] = useState(null);
  // NOTE: do not delete `data-testid` key value pair
  // useEffect(() => {
  //   axios.get(``).then((data) => console.log(data));
  // }, []);
  const handler = (index) => {
    // setData({ ...data });
    setRemove(index);
    // setData(data);
  };
  console.log(data);

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data
          .filter((e) => e.id != remove)
          .map((e) => (
            <Task ele={e} data={data} fun={handler} />
          ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
