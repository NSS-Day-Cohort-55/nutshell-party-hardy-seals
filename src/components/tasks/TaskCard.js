import React from "react";
import { Link } from "react-router-dom";

export const TaskCard = ({ task, deleteTask, completeTask }) => {
    
    
  return (
    <>
    
      <div className="something">
        <h2>{task.name}</h2>
        <div> {task.expectedCompletion}</div>
        <label htmlFor="isComplete">Task Completed</label>
        <input
          type="checkbox"
          name="isComplete"
          id={`task--${task.id}`}
          onChange={ () => completeTask(task)}
        />
        <button type="button" onClick={() => deleteTask(task.id)}>
          Remove Task
        </button>
        <Link to={`/tasks/${task.id}/editThis`}>
    <button type="button" >Edit</button>
  </Link>
      </div>
    </>
  );
};
