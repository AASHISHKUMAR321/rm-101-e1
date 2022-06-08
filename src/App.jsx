import React from "react";
import TaskApp from "./components/TaskApp";
import Tasks from "./data/tasks.json";

function App() {
  return (
    <div>
      <TaskApp data={Tasks} />
    </div>
  );
}

export default App;
