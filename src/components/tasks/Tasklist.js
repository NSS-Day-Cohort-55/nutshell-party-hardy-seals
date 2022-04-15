import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTasks } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import { deleteTask, updateTask } from "../../modules/TaskManager";

export const Tasklist = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => getAllTasks().then(setTasks));
  };

  const handleCompleteTask = (task) => {
      task.isComplete = true
    updateTask(task).then(() => getAllTasks()).then(setTasks)
  };

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res));
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/task/create");
          }}
        >
          Add A Task{" "}
        </button>
        <div>
          {tasks.map((task) => (
              task.isComplete ? "" :  <TaskCard 
              key={task.id}
              task={task}
              deleteTask={handleDeleteTask}
              completeTask={handleCompleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

/* <div className="container-cards">
        {animals.map(animal =>
          <AnimalCard key={animal.id} animal={animal} />
        )}
      </div>
    );
  }; */
