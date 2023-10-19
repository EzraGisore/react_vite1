import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);
      });
  }, []);
  return (
    <>
      <p>Tasks</p>
      {tasks
        ? tasks.map((task) => {
            return (
              <>
                <p> {task.title}</p>
                <p>{task.completedtask}</p>
              </>
            );
          })
        : null}
    </>
  );
}
